(() => {
  "use strict";

  const svgNS = "http://www.w3.org/2000/svg";
  const canvas = document.getElementById("canvas-wrap");
  const svg = document.getElementById("diagram");
  const viewport = document.getElementById("viewport");
  const edgeLayer = document.getElementById("edge-layer");
  const nodeLayer = document.getElementById("node-layer");
  const detail = document.getElementById("detail-content");
  const errorBox = document.getElementById("load-error");
  const width = 2500;
  const height = 1970;
  const nodeWidth = 220;
  const nodeHeight = 112;
  let data;
  let transform = { x: 0, y: 0, scale: 1 };
  let currentFilter = "all";
  let selectedId = null;
  let drag = null;

  const create = (name, attrs = {}, text) => {
    const el = document.createElementNS(svgNS, name);
    Object.entries(attrs).forEach(([key, value]) => el.setAttribute(key, String(value)));
    if (text !== undefined) el.textContent = text;
    return el;
  };

  function setTransform() {
    viewport.setAttribute("transform", `translate(${transform.x} ${transform.y}) scale(${transform.scale})`);
  }

  function fitDiagram() {
    transform = { x: 0, y: 0, scale: 1 };
    setTransform();
  }

  function zoomAt(factor, cx, cy) {
    const next = Math.max(0.1, Math.min(2.6, transform.scale * factor));
    const px = cx ?? width / 2;
    const py = cy ?? height / 2;
    const ratio = next / transform.scale;
    transform.x = px - (px - transform.x) * ratio;
    transform.y = py - (py - transform.y) * ratio;
    transform.scale = next;
    setTransform();
  }

  function screenPoint(clientX, clientY) {
    const point = svg.createSVGPoint();
    point.x = clientX;
    point.y = clientY;
    const local = point.matrixTransform(svg.getScreenCTM().inverse());
    return { x: local.x, y: local.y };
  }

  function nodeById(id) { return data.nodes.find(node => node.id === id); }

  function anchor(node, side) {
    if (side === "left") return { x: node.x, y: node.y + nodeHeight / 2 };
    if (side === "right") return { x: node.x + nodeWidth, y: node.y + nodeHeight / 2 };
    if (side === "top") return { x: node.x + nodeWidth / 2, y: node.y };
    return { x: node.x + nodeWidth / 2, y: node.y + nodeHeight };
  }

  function edgeGeometry(edge) {
    const from = nodeById(edge.from);
    const to = nodeById(edge.to);
    const fc = { x: from.x + nodeWidth / 2, y: from.y + nodeHeight / 2 };
    const tc = { x: to.x + nodeWidth / 2, y: to.y + nodeHeight / 2 };

    if (edge.route === "readerLogout") {
      return { d: `M ${from.x + nodeWidth} ${fc.y} H 2390 V 52 H ${tc.x} V ${to.y}`, label: { x: 1580, y: 43 } };
    }
    if (edge.route === "readerBack") {
      const start = anchor(from, "top");
      const end = anchor(to, "top");
      return { d: `M ${start.x} ${start.y} V 350 H ${end.x} V ${end.y}`, label: { x: (start.x + end.x) / 2, y: 341 } };
    }
    if (edge.route === "adminLogout") {
      const base = edge.from === "A03" ? 1920 : 1950;
      return { d: `M ${fc.x} ${from.y + nodeHeight} V ${base} H 55 V ${tc.y} H ${to.x}`, label: { x: edge.from === "A03" ? 1050 : 1500, y: base - 10 } };
    }
    if (edge.route === "adminVerticalBack") {
      return { d: `M ${fc.x} ${from.y} V ${to.y + nodeHeight}`, label: { x: fc.x + 58, y: (from.y + to.y + nodeHeight) / 2 } };
    }
    if (edge.route === "backToComics") {
      const y = 1225;
      return { d: `M ${from.x + nodeWidth / 2} ${from.y + nodeHeight} V ${y} H ${to.x + nodeWidth / 2} V ${to.y + nodeHeight}`, label: { x: (from.x + to.x + nodeWidth) / 2, y: y - 9 } };
    }
    if (edge.route === "adminSave") {
      const x = 835;
      return { d: `M ${from.x} ${fc.y} H ${x} V ${to.y + nodeHeight / 2} H ${to.x}`, label: { x: x - 50, y: fc.y - 12 } };
    }
    if (edge.curve && Math.abs(from.y - to.y) < 1) {
      const routeY = from.y + nodeHeight + 46;
      const start = from.x > to.x ? anchor(from, "left") : anchor(from, "right");
      const end = from.x > to.x ? anchor(to, "right") : anchor(to, "left");
      return { d: `M ${start.x} ${start.y} V ${routeY} H ${end.x} V ${end.y}`, label: { x: (start.x + end.x) / 2, y: routeY - 8 } };
    }
    if (edge.route === "above") {
      const start = anchor(from, "top");
      const end = anchor(to, "top");
      const routeY = Math.min(from.y, to.y) - 42;
      return { d: `M ${start.x} ${start.y} V ${routeY} H ${end.x} V ${end.y}`, label: { x: (start.x + end.x) / 2, y: routeY - 7 } };
    }
    if (Math.abs(from.y - to.y) < 1) {
      const start = from.x <= to.x ? anchor(from, "right") : anchor(from, "left");
      const end = from.x <= to.x ? anchor(to, "left") : anchor(to, "right");
      return { d: `M ${start.x} ${start.y} H ${end.x}`, label: { x: (start.x + end.x) / 2, y: start.y - 10 } };
    }
    if (to.y > from.y) {
      const start = anchor(from, "bottom");
      const end = anchor(to, "top");
      if (Math.abs(start.x - end.x) < 2) return { d: `M ${start.x} ${start.y} V ${end.y}`, label: { x: start.x + 55, y: (start.y + end.y) / 2 } };
      const routeY = edge.viaY ?? Math.round((start.y + end.y) / 2);
      return { d: `M ${start.x} ${start.y} V ${routeY} H ${end.x} V ${end.y}`, label: { x: (start.x + end.x) / 2, y: routeY - 9 } };
    }
    const start = anchor(from, "top");
    const end = anchor(to, "bottom");
    if (Math.abs(start.x - end.x) < 2) return { d: `M ${start.x} ${start.y} V ${end.y}`, label: { x: start.x + 52, y: (start.y + end.y) / 2 } };
    const routeY = edge.viaY ?? Math.round((start.y + end.y) / 2);
    return { d: `M ${start.x} ${start.y} V ${routeY} H ${end.x} V ${end.y}`, label: { x: (start.x + end.x) / 2, y: routeY - 9 } };
  }

  function renderEdges() {
    edgeLayer.replaceChildren();
    data.edges.forEach(edge => {
      const geom = edgeGeometry(edge);
      const role = nodeById(edge.from).role;
      const group = create("g", { class: `edge ${role}`, "data-from": edge.from, "data-to": edge.to, "data-role": role });
      const pathClass = edge.kind === "ambiguous" ? "edge-path ambiguous" : `edge-path ${role}${edge.kind === "inferred" ? " inferred" : ""}`;
      group.append(create("path", { d: geom.d, class: pathClass, "marker-end": `url(#arrow-${edge.kind === "ambiguous" ? "ambiguous" : role})` }));
      const labelWidth = Math.max(48, edge.label.length * 6.4 + 16);
      group.append(create("rect", { x: geom.label.x - labelWidth / 2, y: geom.label.y - 13, width: labelWidth, height: 19, rx: 8, class: "edge-label-bg" }));
      group.append(create("text", { x: geom.label.x, y: geom.label.y, class: `edge-label${edge.kind === "inferred" ? " inferred" : ""}`, "text-anchor":"middle" }, edge.label));
      edgeLayer.append(group);
    });
  }

  function wrappedLines(text, limit = 22) {
    const words = text.split(/\s+/);
    const lines = [];
    let line = "";
    words.forEach(word => {
      if (line && `${line} ${word}`.length > limit) { lines.push(line); line = word; }
      else line = line ? `${line} ${word}` : word;
    });
    if (line) lines.push(line);
    return lines.slice(0, 2);
  }

  function renderNodes() {
    nodeLayer.replaceChildren();
    data.nodes.forEach(node => {
      const group = create("g", { class: `node-card ${node.role}`, transform: `translate(${node.x} ${node.y})`, tabindex: "0", role: "button", "aria-label": `${node.id}, ${node.title}. Seleccionar para ver el sketch.`, "data-id": node.id, "data-role": node.role });
      group.append(create("rect", { class: "card", x:0, y:0, width:nodeWidth, height:nodeHeight, rx:15 }));
      group.append(create("rect", { class:"accent-bar", x:0, y:15, width:5, height:nodeHeight-30, rx:2 }));
      group.append(create("rect", { class:"id-pill", x:13, y:12, width:48, height:22, rx:8 }));
      group.append(create("text", { class:"node-id", x:37, y:27, "text-anchor":"middle" }, node.id));
      group.append(create("text", { class:"node-hint", x:nodeWidth-13, y:27, "text-anchor":"end" }, "VER SKETCH"));
      const title = create("text", { class:"node-title", x:14, y:58 });
      wrappedLines(node.title).forEach((line, i) => title.append(create("tspan", { x:14, dy:i === 0 ? 0 : 19 }, line)));
      group.append(title);
      const roleHint = node.role === "reader" ? "LECTOR / USUARIO" : "ADMINISTRADOR / EDITOR";
      group.append(create("text", { class:"node-hint", x:14, y:nodeHeight-10 }, roleHint));
      group.addEventListener("click", () => selectNode(node.id));
      group.addEventListener("keydown", event => {
        if (event.key === "Enter" || event.key === " ") { event.preventDefault(); selectNode(node.id); }
      });
      nodeLayer.append(group);
    });
  }

  function addImage(parent, src, alt, className) {
    const img = document.createElement("img");
    img.src = src;
    img.alt = alt;
    img.loading = "lazy";
    img.className = className;
    parent.append(img);
    return img;
  }

  function renderOverview() {
    detail.replaceChildren();
    const title = document.createElement("p");
    title.className = "screen-id";
    title.textContent = "SKETCHES ORIGINALES";
    detail.append(title);
    const heading = document.createElement("h3");
    heading.textContent = "Selecciona una pantalla";
    detail.append(heading);
    const intro = document.createElement("p");
    intro.textContent = "Cada nodo abre la lámina donde aparece el sketch. Las vistas ampliadas de perfil/configuración son evidencia adicional de la misma pantalla 15.";
    detail.append(intro);
    addImage(detail, data.assets.reader, "Lámina de sketches del lector/usuario", "sketch-image overview-image");
    const readerCaption = document.createElement("p"); readerCaption.className = "image-caption"; readerCaption.textContent = "Lector / usuario · lector_usuario1.png"; detail.append(readerCaption);
    addImage(detail, data.assets.admin, "Lámina de sketches del administrador/editor", "sketch-image overview-image");
    const adminCaption = document.createElement("p"); adminCaption.className = "image-caption"; adminCaption.textContent = "Administrador / editor · admin1.png"; detail.append(adminCaption);
  }

  function selectNode(id) {
    selectedId = id;
    const node = nodeById(id);
    document.querySelectorAll(".node-card").forEach(el => el.classList.toggle("selected", el.dataset.id === id));
    detail.replaceChildren();
    const idLabel = document.createElement("p"); idLabel.className = "screen-id"; idLabel.textContent = `${node.id} · ${node.role === "reader" ? "Lector / usuario" : "Administrador / editor"}`; detail.append(idLabel);
    const heading = document.createElement("h3"); heading.textContent = node.title; detail.append(heading);
    const evidence = document.createElement("p"); evidence.textContent = node.evidence; detail.append(evidence);
    const assetPath = data.assets[node.asset];
    addImage(detail, assetPath, `Sketch de referencia para ${node.id} ${node.title}`, "sketch-image");
    const caption = document.createElement("p"); caption.className = "image-caption"; caption.textContent = assetPath.split("/").pop(); detail.append(caption);
    const outgoing = data.edges.filter(edge => edge.from === id);
    const incoming = data.edges.filter(edge => edge.to === id);
    const flow = document.createElement("p");
    flow.innerHTML = `<strong>Entradas:</strong> ${incoming.length ? incoming.map(edge => `${edge.from} (${edge.label})`).join(" · ") : "Inicio del recorrido"}<br><strong>Salidas:</strong> ${outgoing.length ? outgoing.map(edge => `${edge.to} (${edge.label})`).join(" · ") : "Sin destino dibujado"}`;
    detail.append(flow);
    const outgoingAmbiguous = outgoing.some(edge => edge.kind === "ambiguous");
    if (outgoingAmbiguous || node.id === "A12") {
      const note = document.createElement("span"); note.className = "pill"; note.textContent = "Transición / rótulo ambiguo: revisar con el autor"; detail.append(note);
    } else if (outgoing.some(edge => edge.kind === "inferred") || incoming.some(edge => edge.kind === "inferred")) {
      const note = document.createElement("span"); note.className = "pill"; note.textContent = "Algunas conexiones son inferidas"; detail.append(note);
    }
  }

  function applyFilter(filter) {
    currentFilter = filter;
    document.querySelectorAll(".filter").forEach(button => {
      const active = button.dataset.filter === filter;
      button.classList.toggle("active", active);
      button.setAttribute("aria-pressed", String(active));
    });
    document.querySelectorAll(".node-card").forEach(node => {
      node.classList.toggle("muted", filter !== "all" && node.dataset.role !== filter);
    });
    document.querySelectorAll(".edge").forEach(edge => {
      edge.style.opacity = filter === "all" || edge.dataset.role === filter ? "1" : "0.08";
    });
  }

  function wireControls() {
    document.querySelectorAll(".filter").forEach(button => button.addEventListener("click", () => {
      if (!button.disabled) applyFilter(button.dataset.filter);
    }));
    document.getElementById("zoom-in").addEventListener("click", () => zoomAt(1.2));
    document.getElementById("zoom-out").addEventListener("click", () => zoomAt(1 / 1.2));
    document.getElementById("zoom-fit").addEventListener("click", fitDiagram);
    canvas.addEventListener("wheel", event => {
      event.preventDefault();
      const point = screenPoint(event.clientX, event.clientY);
      zoomAt(event.deltaY < 0 ? 1.12 : 1 / 1.12, point.x, point.y);
    }, { passive:false });
    canvas.addEventListener("pointerdown", event => {
      if (event.target.closest && event.target.closest(".node-card")) return;
      const point = screenPoint(event.clientX, event.clientY);
      drag = { x:point.x, y:point.y, tx:transform.x, ty:transform.y, pointerId:event.pointerId };
      canvas.classList.add("dragging");
      canvas.setPointerCapture(event.pointerId);
    });
    canvas.addEventListener("pointermove", event => {
      if (!drag) return;
      const point = screenPoint(event.clientX, event.clientY);
      transform.x = drag.tx + point.x - drag.x;
      transform.y = drag.ty + point.y - drag.y;
      setTransform();
    });
    const stopDrag = () => { drag = null; canvas.classList.remove("dragging"); };
    canvas.addEventListener("pointerup", stopDrag);
    canvas.addEventListener("pointercancel", stopDrag);
    window.addEventListener("resize", fitDiagram);
    canvas.addEventListener("keydown", event => {
      if (event.key === "+" || event.key === "=") zoomAt(1.2);
      else if (event.key === "-") zoomAt(1 / 1.2);
      else if (event.key === "0") fitDiagram();
    });
  }

  async function start() {
    try {
      const response = await fetch("diagram-data.json");
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      data = await response.json();
      if (!Array.isArray(data.nodes) || !Array.isArray(data.edges)) throw new Error("Invalid diagram data");
      const uniqueIds = new Set(data.nodes.map(node => node.id));
      if (uniqueIds.size !== data.nodes.length || data.edges.some(edge => !uniqueIds.has(edge.from) || !uniqueIds.has(edge.to))) throw new Error("Node IDs or connections are invalid");
      document.getElementById("screen-count").textContent = data.nodes.length;
      document.getElementById("role-count").textContent = data.roles.length;
      document.getElementById("shared-count").textContent = data.shared.length;
      svg.setAttribute("aria-label", `Diagrama interactivo de ${data.nodes.length} pantallas y ${data.roles.length} roles`);
      renderEdges();
      renderNodes();
      renderOverview();
      wireControls();
      fitDiagram();
    } catch (error) {
      console.error("Unable to load screen diagram", error);
      errorBox.hidden = false;
    }
  }

  start();
})();
