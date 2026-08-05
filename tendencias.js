const TREND_MONTHS = [
  "2024-07", "2024-08", "2024-09", "2024-10", "2024-11", "2024-12",
  "2025-01", "2025-02", "2025-03", "2025-04", "2025-05", "2025-06",
  "2025-07", "2025-08", "2025-09", "2025-10", "2025-11", "2025-12",
  "2026-01", "2026-02", "2026-03", "2026-04", "2026-05", "2026-06"
];

const SEARCH_TRENDS = {
  dog: {
    term: "Carreras de perros",
    category: "NICHO EN CRECIMIENTO",
    average: 1000,
    recent: 1300,
    change: 142.35,
    values: [320,260,320,320,260,260,390,390,590,480,590,590,590,590,1000,1000,720,1000,880,880,1000,1300,1300,1300],
    note: "Es la vertical específica de mayor escala y combina crecimiento interanual con una base reciente estable."
  },
  horse: {
    term: "Carreras de caballos",
    category: "NICHO ESTABLE",
    average: 140,
    recent: 160,
    change: 0,
    values: [170,170,110,140,140,110,140,170,170,140,140,140,110,140,170,140,140,110,140,140,170,140,170,170],
    note: "El genérico se mantiene estable; las consultas con “hoy” y “en vivo” crecen desde una base mucho menor."
  },
  poker: {
    term: "Póker online",
    category: "MESA · ESTABLE",
    average: 260,
    recent: 283,
    change: -0.28,
    values: [210,170,260,210,390,320,320,170,210,390,480,390,320,210,320,390,260,260,320,320,260,320,320,210],
    note: "El promedio anual luce estable, pero junio de 2026 quedó 46% por debajo del mismo mes de 2025."
  },
  bingo: {
    term: "Bingo online",
    category: "MESA · CONTRACCIÓN",
    average: 90,
    recent: 103,
    change: -27.66,
    values: [140,90,90,170,170,90,110,90,140,90,140,90,70,90,90,90,70,90,70,70,70,110,110,90],
    note: "La demanda es pequeña y pierde fuerza interanual. Funciona mejor como cobertura que como vertical principal."
  },
  baccarat: {
    term: "Bacarat online",
    category: "MESA · EXPERIMENTAL",
    average: 20,
    recent: 10,
    change: 61.11,
    values: [10,10,10,10,10,10,10,10,20,30,30,20,20,30,40,40,40,20,40,10,20,10,10,10],
    note: "El crecimiento anual parte de una base mínima y el nivel reciente vuelve a 10 búsquedas mensuales."
  },
  crash: {
    term: "Crash games",
    category: "MECÁNICA · BAJA BASE",
    average: 40,
    recent: 27,
    change: 135,
    values: [40,20,10,20,10,20,10,10,10,10,20,20,20,20,70,140,70,10,20,20,20,30,20,30],
    note: "Hay crecimiento porcentual, pero la escala sigue siendo mínima y el término abierto atrae mucho ruido de videojuegos."
  },
  casino: {
    term: "Casino online",
    category: "GENÉRICO · RUPTURA ALCISTA",
    average: 8100,
    recent: 27100,
    change: 1417.86,
    values: [590,480,390,390,720,1000,590,590,590,480,590,590,480,590,720,720,720,720,1000,1900,18100,27100,27100,27100],
    note: "La ruptura comienza en marzo de 2026. Mantener medición mensual antes de asumir que 27,1K es la nueva base permanente."
  }
};

const integer = new Intl.NumberFormat("es-DO", { maximumFractionDigits: 0 });
const decimal = new Intl.NumberFormat("es-DO", { minimumFractionDigits: 1, maximumFractionDigits: 1 });
const svgNs = "http://www.w3.org/2000/svg";

function compact(value) {
  if (value >= 1000000) return `${decimal.format(value / 1000000)}M`;
  if (value >= 1000) return `${decimal.format(value / 1000)}K`;
  return integer.format(value);
}

function niceMax(value) {
  if (value <= 50) return Math.ceil(value / 10) * 10;
  if (value <= 200) return Math.ceil(value / 50) * 50;
  if (value <= 1000) return Math.ceil(value / 250) * 250;
  if (value <= 5000) return Math.ceil(value / 1000) * 1000;
  return Math.ceil(value / 5000) * 5000;
}

function svgElement(name, attributes = {}, text = "") {
  const element = document.createElementNS(svgNs, name);
  Object.entries(attributes).forEach(([key, value]) => element.setAttribute(key, value));
  if (text) element.textContent = text;
  return element;
}

function renderTrend(key) {
  const trend = SEARCH_TRENDS[key];
  const svg = document.querySelector("#specificTrendChart");
  const width = 860;
  const height = 360;
  const left = 62;
  const right = 26;
  const top = 28;
  const bottom = 55;
  const plotWidth = width - left - right;
  const plotHeight = height - top - bottom;
  const max = niceMax(Math.max(...trend.values));
  const x = index => left + index * plotWidth / (trend.values.length - 1);
  const y = value => top + plotHeight - value / max * plotHeight;
  const points = trend.values.map((value, index) => `${x(index)},${y(value)}`).join(" ");
  const area = `${left},${top + plotHeight} ${points} ${left + plotWidth},${top + plotHeight}`;

  svg.replaceChildren();
  [0, .25, .5, .75, 1].forEach(ratio => {
    const gridY = top + plotHeight - ratio * plotHeight;
    svg.append(
      svgElement("line", { x1: left, y1: gridY, x2: width - right, y2: gridY, class: "chart-grid" }),
      svgElement("text", { x: left - 12, y: gridY + 4, class: "chart-axis", "text-anchor": "end" }, compact(max * ratio))
    );
  });

  [0, 5, 11, 17, 23].forEach(index => {
    const label = TREND_MONTHS[index].replace("-", " · ");
    svg.append(svgElement("text", { x: x(index), y: height - 19, class: "chart-axis", "text-anchor": "middle" }, label));
  });

  svg.append(
    svgElement("polygon", { points: area, class: "chart-area" }),
    svgElement("polyline", { points, class: "chart-line" }),
    svgElement("circle", { cx: x(trend.values.length - 1), cy: y(trend.values.at(-1)), r: 7, class: "chart-dot" })
  );

  document.querySelector("#chartCategory").textContent = trend.category;
  document.querySelector("#chartTerm").textContent = trend.term;
  document.querySelector("#chartAverage").textContent = integer.format(trend.average);
  document.querySelector("#chartRecent").textContent = integer.format(trend.recent);
  document.querySelector("#chartChange").textContent = `${trend.change > 0 ? "+" : trend.change < 0 ? "−" : ""}${decimal.format(Math.abs(trend.change))}%`;
  document.querySelector("#chartDescription").textContent = trend.note;
  svg.setAttribute("aria-label", `${trend.term}: serie mensual de julio de 2024 a junio de 2026. Último valor: ${integer.format(trend.values.at(-1))} búsquedas.`);

  document.querySelectorAll(".term-button").forEach(button => {
    const active = button.dataset.term === key;
    button.classList.toggle("is-active", active);
    button.setAttribute("aria-pressed", String(active));
  });
}

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".term-button").forEach(button => {
    button.addEventListener("click", () => renderTrend(button.dataset.term));
  });
  renderTrend("dog");
});
