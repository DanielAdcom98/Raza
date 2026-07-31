const MONTHS = [
  { id: "sep", label: "Septiembre", short: "SEP", stage: "Lanzamiento", focus: "Ruido nacional para instalar una marca desconocida." },
  { id: "oct", label: "Octubre", short: "OCT", stage: "Lanzamiento", focus: "Sostener el ruido y abrir las primeras rutas de conversión." },
  { id: "nov", label: "Noviembre", short: "NOV", stage: "Mantenimiento", focus: "Transición de consideración hacia performance." },
  { id: "dic", label: "Diciembre", short: "DIC", stage: "Mantenimiento", focus: "Conversión alrededor de eventos y momentos de alta intención." },
  { id: "ene", label: "Enero", short: "ENE", stage: "Mantenimiento", focus: "Escalar adquisición y retargeting con los aprendizajes acumulados." },
  { id: "feb", label: "Febrero", short: "FEB", stage: "Mantenimiento", focus: "Máxima presión de performance dentro del mantenimiento." }
];

const CHANNELS = [
  {
    id: "meta-reach", name: "Meta Reach", initials: "MR", role: "Support", objective: "Awareness",
    action: "Conocer, recordar y buscar la marca", verticals: ["Marca", "Deportivas", "Casino", "Lotería", "Virtuales"],
    kpi: "Alcance 18+ y frecuencia", secondary: "Reach único, frecuencia, VTR y búsquedas de marca",
    formats: ["Reels", "Stories", "Video 6–15s", "Reach & Frequency"], costType: "CPM", cost: 6.5, unit: "impresiones",
    note: "Controlar saturación y renovar creatividades cada dos semanas.", color: "#6f91ff",
    budgets: { sep: 32000, oct: 26000, nov: 12000, dic: 7000, ene: 4000, feb: 4000 }
  },
  {
    id: "meta-conversion", name: "Meta Conversiones", initials: "MC", role: "Core", objective: "Performance",
    action: "Completar registro y primer depósito", verticals: ["Deportivas", "Casino", "Lotería", "Virtuales"],
    kpi: "Registros + FTD", secondary: "CPR, tasa registro→FTD, valor depositado y ROAS",
    formats: ["Reels", "Stories", "Feed", "Retargeting", "Deep links"], costType: "CPA FTD", cost: 45, unit: "FTD",
    registrationCost: 13.5, registrationRate: 0.30,
    note: "Principal canal de FTD. Optimizar al evento FTD cuando exista volumen suficiente.", color: "#315cff",
    budgets: { sep: 8000, oct: 15000, nov: 28000, dic: 32000, ene: 35000, feb: 37000 }
  },
  {
    id: "tiktok-always", name: "TikTok Always-on", initials: "TT", role: "Core / Growth", objective: "Performance",
    action: "Completar registro y primer depósito", verticals: ["Deportivas", "Casino", "Virtuales", "Lotería"],
    kpi: "Registros + FTD", secondary: "CPR, VTR, CTR y tasa registro→FTD",
    formats: ["In-feed", "Spark Ads", "Creator whitelisting", "Retargeting"], costType: "CPA FTD", cost: 60, unit: "FTD",
    registrationCost: 15, registrationRate: 0.25,
    note: "Segundo canal de FTD: lenguaje local, tutorial y prueba social.", color: "#9a71ff",
    budgets: { sep: 10000, oct: 15000, nov: 17000, dic: 18000, ene: 19000, feb: 21000 }
  },
  {
    id: "tiktok-topview", name: "TikTok TopView + Prime Time", initials: "TV", role: "Growth", objective: "Awareness",
    action: "Generar notoriedad y búsqueda de marca", verticals: ["Marca"],
    kpi: "Alcance y vistas", secondary: "Frecuencia, VTR, búsquedas de marca y visitas asistidas",
    formats: ["TopView", "Prime Time", "Teaser", "Reveal", "Manifiesto"], costType: "CPV", cost: 0.01, unit: "vistas",
    note: "Acción de lanzamiento sin expectativa directa de FTD.", color: "#ff5073",
    budgets: { sep: 57000, oct: 48000, nov: 0, dic: 0, ene: 0, feb: 0 }
  },
  {
    id: "google", name: "Google Search", initials: "GS", role: "Core contingente", objective: "Performance",
    action: "Registrar y completar primer depósito", verticals: ["Deportivas", "Casino", "Lotería", "Virtuales"],
    kpi: "Registros + FTD", secondary: "CPR, CTR, CPC, share de búsqueda y tasa registro→FTD",
    formats: ["Search marca", "Genéricos", "Verticales", "Extensiones"], costType: "CPA FTD", cost: 43, unit: "FTD",
    registrationCost: 15.05, registrationRate: 0.35,
    note: "Pendiente de aprobación. Si no habilita, redistribuir 60% Meta, 25% TikTok y 15% DCO.", color: "#43a9e8",
    budgets: { sep: 0, oct: 2000, nov: 4000, dic: 5000, ene: 6000, feb: 8000 }
  },
  {
    id: "youtube", name: "YouTube", initials: "YT", role: "Support", objective: "Consideración",
    action: "Entender la propuesta, el respaldo y la forma de uso", verticals: ["Marca", "Deportivas", "Casino"],
    kpi: "Vistas calificadas", secondary: "VTR, alcance único, lift de búsqueda y conversiones asistidas",
    formats: ["Bumper 6s", "In-stream 15–30s", "Shorts", "Video Action"], costType: "CPV", cost: 0.017, unit: "vistas",
    note: "Alta presión en lanzamiento; después, secuencias educativas y retargeting.", color: "#ff5c5c",
    budgets: { sep: 24000, oct: 20000, nov: 7000, dic: 3000, ene: 2000, feb: 4000 }
  },
  {
    id: "dooh", name: "Circuito DOOH", initials: "DO", role: "Growth / Support", objective: "Awareness",
    action: "Reconocer la marca y conectar presencia física-digital", verticals: ["Marca", "Deportivas", "Lotería"],
    kpi: "Alcance y frecuencia del circuito", secondary: "Cobertura por zona, lift de búsqueda y visitas asistidas",
    formats: ["DOOH programático", "Circuitos premium", "Proximidad a bancas"], costType: "CPM", cost: 47, unit: "impresiones OOH",
    note: "Concentrado en septiembre–octubre; alcance final sujeto al plan del proveedor.", color: "#ffd400",
    budgets: { sep: 75000, oct: 70000, nov: 0, dic: 0, ene: 0, feb: 0 }
  },
  {
    id: "dco-display", name: "DCO RealTime Display", initials: "DD", role: "Support", objective: "Consideración",
    action: "Visitar una landing relevante según el contexto", verticals: ["Deportivas", "Lotería", "Casino"],
    kpi: "Impresiones visibles", secondary: "Viewability, CTR, visitas calificadas y conversión asistida",
    formats: ["Display dinámico", "Video contextual", "Retargeting", "Piezas por evento"], costType: "CPM", cost: 13, unit: "impresiones",
    note: "Base always-on con mensajes dinámicos por calendario y resultados.", color: "#55c98a",
    budgets: { sep: 8000, oct: 7000, nov: 10000, dic: 10000, ene: 11000, feb: 9000 }
  },
  {
    id: "dco-push", name: "DCO RealTime Push", initials: "DP", role: "Support", objective: "Consideración",
    action: "Entrar a la landing por momento deportivo o resultado", verticals: ["Deportivas", "Lotería"],
    kpi: "Visitas calificadas", secondary: "CTR, rebote, registro asistido y conversión asistida",
    formats: ["Web push", "Native push", "Partido", "Sorteo", "Quincena"], costType: "CPC", cost: 0.8, unit: "visitas",
    note: "Crece gradualmente y funciona como puente hacia performance.", color: "#1aa872",
    budgets: { sep: 2000, oct: 3000, nov: 3000, dic: 4000, ene: 4000, feb: 4000 }
  },
  {
    id: "rich-media", name: "Rich Media", initials: "RM", role: "Support", objective: "Consideración",
    action: "Interactuar y explorar la propuesta", verticals: ["Marca", "Deportivas", "Casino"],
    kpi: "Interacciones", secondary: "Engagement rate, tiempo interactivo y visitas asistidas",
    formats: ["Expandibles", "Countdown", "Interactivos", "Alto impacto"], costType: "CPE", cost: 0.65, unit: "interacciones",
    note: "Mayor uso en lanzamiento; conservar después solo las piezas eficientes.", color: "#00c5bb",
    budgets: { sep: 6000, oct: 6000, nov: 3000, dic: 3000, ene: 1000, feb: 1000 }
  },
  {
    id: "twitch", name: "Twitch", initials: "TW", role: "Support / Community", objective: "Awareness",
    action: "Ver, escuchar e interactuar con contenido 18+", verticals: ["Deportivas", "Virtuales", "Casino"],
    kpi: "Impresiones / video", secondary: "Minutos vistos, chat engagement y clics asistidos",
    formats: ["Sponsored stream", "Creator reads", "Overlays", "Pre-roll", "Clips"], costType: "CPM", cost: 13, unit: "impresiones",
    note: "Uso selectivo alrededor de grandes momentos deportivos y gaming.", color: "#865fe3",
    budgets: { sep: 4000, oct: 4000, nov: 3000, dic: 2000, ene: 1000, feb: 1000 }
  },
  {
    id: "spotify", name: "Spotify", initials: "SP", role: "Support", objective: "Awareness",
    action: "Reconocer la marca y visitar después", verticals: ["Marca", "Deportivas"],
    kpi: "Impresiones audio / video", secondary: "Audio completion rate, reach, frecuencia y visitas asistidas",
    formats: ["Audio 30s", "Video takeover", "Sponsored session"], costType: "CPM", cost: 12, unit: "impresiones / audio",
    note: "Refuerzo sonoro con inversión acotada después del lanzamiento.", color: "#23d263",
    budgets: { sep: 4000, oct: 4000, nov: 3000, dic: 1000, ene: 2000, feb: 1000 }
  }
];

const JOURNEY = [
  { name: "Expectativa", objective: "Awareness", text: "Hacer que la marca se sienta como acontecimiento cultural.", media: "TopView · DOOH · teasers" },
  { name: "Lanzamiento", stage: "Lanzamiento", text: "Presentar quién es Raza.do, qué ofrece y por qué tiene respaldo local.", media: "Video · alcance · landings" },
  { name: "Consideración", objective: "Consideración", text: "Reducir dudas sobre registro, depósito, retiro, bonos y categorías.", media: "Tutoriales · Meta · YouTube" },
  { name: "Conversión", objective: "Performance", text: "Llevar a registro, primer depósito y primera jugada con rutas claras.", media: "Meta · TikTok · Search" },
  { name: "Recurrencia", objective: "Performance", stage: "Mantenimiento", text: "Convertir partido, sorteo, quincena y resultado en hábito.", media: "Retargeting · CRM · audiencias" },
  { name: "Comunidad", objective: "Awareness", text: "Hacer que Raza.do sea conversación mediante contenido vivo.", media: "Twitch · creadores · picks" }
];

const state = { month: "all", stage: "all", objective: "all", vertical: "all", search: "" };
const OBJECTIVE_VISUALS = [
  { name: "Awareness", color: "#ffd400", purpose: "Instalar y amplificar" },
  { name: "Consideración", color: "#55c98a", purpose: "Explicar y llevar tráfico" },
  { name: "Performance", color: "#315cff", purpose: "Generar FTD" }
];
const FUNNEL_ASSUMPTIONS = { frequency: 3.5, reachToVisit: 0.018, visitToRegistration: 0.20 };
const money = new Intl.NumberFormat("es-DO", { style: "currency", currency: "USD", maximumFractionDigits: 0 });
const integer = new Intl.NumberFormat("es-DO", { maximumFractionDigits: 0 });
const decimal = new Intl.NumberFormat("es-DO", { minimumFractionDigits: 2, maximumFractionDigits: 2 });

const $ = (selector) => document.querySelector(selector);
const escapeHtml = (value) => String(value).replace(/[&<>'"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;" }[c]));
const totalFor = (channel, monthIds) => monthIds.reduce((sum, month) => sum + (channel.budgets[month] || 0), 0);
const totalPlan = CHANNELS.reduce((sum, channel) => sum + totalFor(channel, MONTHS.map(m => m.id)), 0);

function visibleMonths() {
  return MONTHS.filter(month => (state.month === "all" || state.month === month.id) && (state.stage === "all" || state.stage === month.stage));
}

function filteredChannels(monthIds = visibleMonths().map(m => m.id)) {
  const query = state.search.trim().toLocaleLowerCase("es");
  return CHANNELS.filter(channel => {
    const objectiveMatch = state.objective === "all" || channel.objective === state.objective;
    const verticalMatch = state.vertical === "all" || channel.verticals.includes(state.vertical);
    const searchMatch = !query || `${channel.name} ${channel.role} ${channel.kpi} ${channel.formats.join(" ")}`.toLocaleLowerCase("es").includes(query);
    return objectiveMatch && verticalMatch && searchMatch && totalFor(channel, monthIds) > 0;
  });
}

function expectedResult(channel, investment) {
  if (!investment || !channel.cost) return 0;
  return channel.costType === "CPM" ? investment / channel.cost * 1000 : investment / channel.cost;
}

function expectedRegistrations(channel, investment) {
  if (channel.objective !== "Performance" || !investment || !channel.registrationCost) return 0;
  return investment / channel.registrationCost;
}

function resultLabel(channel, investment) {
  if (channel.objective === "Performance") {
    return `${integer.format(expectedRegistrations(channel, investment))} reg. → ${integer.format(expectedResult(channel, investment))} FTD`;
  }
  const result = expectedResult(channel, investment);
  return `${integer.format(result)} ${channel.unit}`;
}

function formatCompactMoney(value) {
  if (value >= 1000000) return `US$${decimal.format(value / 1000000)}M`;
  return `US$${integer.format(value / 1000)}K`;
}

function initControls() {
  const monthFilter = $("#monthFilter");
  MONTHS.forEach(month => monthFilter.insertAdjacentHTML("beforeend", `<option value="${month.id}">${month.label}</option>`));
  ["month", "stage", "objective", "vertical"].forEach(key => {
    $(`#${key}Filter`).addEventListener("change", event => { state[key] = event.target.value; render(); });
  });
  $("#searchFilter").addEventListener("input", event => { state.search = event.target.value; render(); });
  $("#resetFilters").addEventListener("click", resetFilters);
}

function resetFilters() {
  Object.assign(state, { month: "all", stage: "all", objective: "all", vertical: "all", search: "" });
  $("#filters").reset();
  render();
}

function renderJourney() {
  $("#journey").innerHTML = JOURNEY.map((item, index) => `
    <button class="journey-card" type="button" data-objective="${item.objective || "all"}" data-stage="${item.stage || "all"}">
      <span class="journey-number"><span>0${index + 1}</span><span>↗</span></span>
      <span class="journey-content">
        <strong class="journey-title">${item.name}</strong>
        <span class="journey-description">${item.text}</span>
        <span class="journey-media">${item.media}</span>
      </span>
    </button>`).join("");
  $("#journey").addEventListener("click", event => {
    const card = event.target.closest(".journey-card");
    if (!card) return;
    state.objective = card.dataset.objective;
    state.stage = card.dataset.stage;
    state.month = "all";
    $("#objectiveFilter").value = state.objective;
    $("#stageFilter").value = state.stage;
    $("#monthFilter").value = "all";
    document.querySelectorAll(".journey-card").forEach(el => el.classList.toggle("is-active", el === card));
    render();
    $("#flow").scrollIntoView({ behavior: "smooth" });
  });
}

function renderMetrics() {
  const months = visibleMonths();
  const ids = months.map(m => m.id);
  const channels = filteredChannels(ids);
  const investment = channels.reduce((sum, channel) => sum + totalFor(channel, ids), 0);
  const registrations = channels.filter(c => c.objective === "Performance").reduce((sum, channel) => sum + expectedRegistrations(channel, totalFor(channel, ids)), 0);
  const ftd = channels.filter(c => c.objective === "Performance").reduce((sum, channel) => sum + expectedResult(channel, totalFor(channel, ids)), 0);
  const performance = channels.filter(c => c.objective === "Performance").reduce((sum, channel) => sum + totalFor(channel, ids), 0);
  const share = investment / totalPlan * 100;
  const cards = [
    { label: "Inversión seleccionada", value: formatCompactMoney(investment), foot: `${decimal.format(share)}% del plan total`, accent: true },
    { label: "Registros esperados", value: integer.format(registrations), foot: registrations ? `CPR blended ${money.format(performance / registrations)}` : "Solo campañas de conversión" },
    { label: "FTD esperados", value: integer.format(ftd), foot: "Solo canales optimizables directamente" },
    { label: "Performance directo", value: formatCompactMoney(performance), foot: investment ? `${decimal.format(performance / investment * 100)}% de la selección` : "0% de la selección" },
    { label: "Canales activos", value: integer.format(channels.length), foot: `${months.length} ${months.length === 1 ? "mes visible" : "meses visibles"}` }
  ];
  $("#metricGrid").innerHTML = cards.map(card => `<article class="metric-card ${card.accent ? "accent" : ""}"><span class="metric-label">${card.label}</span><div class="metric-value">${card.value}</div><p class="metric-foot">${card.foot}</p></article>`).join("");
  const monthText = months.length === 6 ? "6 meses" : months.map(m => m.label).join(", ") || "Sin meses";
  $("#selectionLabel").textContent = `${monthText} · ${channels.length} canales · ${state.objective === "all" ? "Todos los objetivos" : state.objective}`;
}

function renderChart() {
  const months = visibleMonths();
  const monthIds = months.map(m => m.id);
  const channels = filteredChannels(monthIds);
  const totals = months.map(month => channels.reduce((sum, channel) => sum + channel.budgets[month.id], 0));
  const max = Math.max(...totals, 1);
  $("#chartTitle").textContent = `Distribución por medio · ${months.length === 6 ? "Plan completo" : months.map(m => m.label).join(", ") || "Sin período"}`;
  $("#chartLegend").innerHTML = channels.map(channel => `<span class="legend-item"><i class="legend-swatch" style="background:${channel.color}"></i>${escapeHtml(channel.name)}</span>`).join("");
  $("#monthlyChart").innerHTML = months.map((month, index) => {
    const segments = channels.filter(channel => channel.budgets[month.id] > 0).map(channel => {
      const value = channel.budgets[month.id];
      return `<span class="bar-segment" style="height:${Math.max(value / max * 330, 2)}px;background:${channel.color}" title="${escapeHtml(channel.name)} · ${money.format(value)}"></span>`;
    }).join("");
    return `<button class="bar-group" type="button" data-month="${month.id}" aria-label="Filtrar ${month.label}, ${money.format(totals[index])}">
      <span class="bar-total">${formatCompactMoney(totals[index])}</span>
      <span class="bar-stack">${segments}</span>
      <span class="bar-label"><strong>${month.short}</strong><span>${month.stage}</span></span>
    </button>`;
  }).join("");
  $("#monthlyChart").querySelectorAll(".bar-group").forEach(button => button.addEventListener("click", () => {
    state.month = state.month === button.dataset.month ? "all" : button.dataset.month;
    state.stage = "all";
    $("#monthFilter").value = state.month;
    $("#stageFilter").value = "all";
    render();
  }));
}

function renderDistribution() {
  const ids = visibleMonths().map(month => month.id);
  const channels = filteredChannels(ids);
  const objectiveTotals = OBJECTIVE_VISUALS.map(objective => ({
    ...objective,
    investment: channels
      .filter(channel => channel.objective === objective.name)
      .reduce((sum, channel) => sum + totalFor(channel, ids), 0)
  }));
  const investment = objectiveTotals.reduce((sum, objective) => sum + objective.investment, 0);
  let cursor = 0;
  const segments = objectiveTotals.filter(objective => objective.investment > 0).map(objective => {
    const start = cursor;
    cursor += objective.investment / Math.max(investment, 1) * 100;
    return `${objective.color} ${start}% ${cursor}%`;
  });
  const donut = $("#objectiveDonut");
  donut.style.background = segments.length ? `conic-gradient(${segments.join(",")})` : "#282828";
  donut.innerHTML = `<span><strong>${formatCompactMoney(investment)}</strong><small>selección activa</small></span>`;
  donut.setAttribute("aria-label", investment
    ? objectiveTotals.filter(objective => objective.investment > 0).map(objective => `${objective.name}: ${decimal.format(objective.investment / investment * 100)}%`).join(". ")
    : "Sin inversión para la selección activa");

  $("#objectiveLegend").innerHTML = objectiveTotals.map(objective => {
    const share = investment ? objective.investment / investment * 100 : 0;
    const active = state.objective === objective.name;
    return `<button class="objective-legend-item ${active ? "is-active" : ""}" type="button" data-objective="${escapeHtml(objective.name)}" aria-pressed="${active}">
      <i style="background:${objective.color}"></i>
      <span><strong>${escapeHtml(objective.name)}</strong><small>${escapeHtml(objective.purpose)}</small></span>
      <span class="objective-value"><strong>${formatCompactMoney(objective.investment)}</strong><small>${decimal.format(share)}%</small></span>
    </button>`;
  }).join("");
  $("#objectiveLegend").querySelectorAll(".objective-legend-item").forEach(button => button.addEventListener("click", () => {
    state.objective = state.objective === button.dataset.objective ? "all" : button.dataset.objective;
    $("#objectiveFilter").value = state.objective;
    render();
  }));

  const ranked = channels
    .map(channel => ({ channel, investment: totalFor(channel, ids) }))
    .sort((a, b) => b.investment - a.investment);
  const visibleRank = ranked.slice(0, 6);
  const maxInvestment = Math.max(...visibleRank.map(item => item.investment), 1);
  const visibleInvestment = visibleRank.reduce((sum, item) => sum + item.investment, 0);
  $("#rankingSummary").textContent = ranked.length
    ? `Top ${visibleRank.length} · ${decimal.format(visibleInvestment / Math.max(investment, 1) * 100)}% del mix`
    : "Sin resultados";
  $("#channelRanking").innerHTML = visibleRank.map((item, index) => `
    <button class="ranking-row" type="button" data-channel="${escapeHtml(item.channel.name)}" aria-label="Filtrar ${escapeHtml(item.channel.name)}, ${money.format(item.investment)}">
      <span class="ranking-copy"><span><b>${String(index + 1).padStart(2, "0")}</b>${escapeHtml(item.channel.name)}</span><strong>${formatCompactMoney(item.investment)}</strong></span>
      <span class="ranking-track"><i style="width:${item.investment / maxInvestment * 100}%;background:${item.channel.color}"></i></span>
    </button>`).join("");
  $("#channelRanking").querySelectorAll(".ranking-row").forEach(button => button.addEventListener("click", () => {
    state.search = state.search === button.dataset.channel ? "" : button.dataset.channel;
    $("#searchFilter").value = state.search;
    render();
  }));
}

function formatTrendValue(value) {
  if (value >= 1000) return `${(value / 1000).toFixed(1).replace(".", ",")}K`;
  return integer.format(value);
}

function formatCompactCount(value) {
  if (value >= 1000000) return `${(value / 1000000).toFixed(1).replace(".", ",")}M`;
  if (value >= 10000) return `${Math.round(value / 1000)}K`;
  return integer.format(value);
}

function renderPerformanceResults() {
  const months = visibleMonths();
  const ids = months.map(month => month.id);
  const performanceChannels = filteredChannels(ids).filter(channel => channel.objective === "Performance");
  const investment = performanceChannels.reduce((sum, channel) => sum + totalFor(channel, ids), 0);
  const registrations = performanceChannels.reduce((sum, channel) => sum + expectedRegistrations(channel, totalFor(channel, ids)), 0);
  const ftd = performanceChannels.reduce((sum, channel) => sum + expectedResult(channel, totalFor(channel, ids)), 0);
  const conversionRate = registrations ? ftd / registrations * 100 : 0;
  const cpr = registrations ? investment / registrations : 0;
  const cpa = ftd ? investment / ftd : 0;
  const measuredImpressions = filteredChannels(ids)
    .filter(channel => channel.costType === "CPM")
    .reduce((sum, channel) => sum + expectedResult(channel, totalFor(channel, ids)), 0);
  const directVisits = filteredChannels(ids)
    .filter(channel => channel.unit === "visitas")
    .reduce((sum, channel) => sum + expectedResult(channel, totalFor(channel, ids)), 0);
  const visits = Math.max(registrations / FUNNEL_ASSUMPTIONS.visitToRegistration, directVisits);
  const reach = Math.max(measuredImpressions / FUNNEL_ASSUMPTIONS.frequency, visits / FUNNEL_ASSUMPTIONS.reachToVisit);
  const impressions = Math.max(measuredImpressions, reach * FUNNEL_ASSUMPTIONS.frequency);
  const reachToVisit = reach ? visits / reach * 100 : 0;

  $("#funnelSelection").textContent = months.length === 6
    ? "Plan completo · campañas de conversión"
    : `${months.map(month => month.label).join(", ") || "Sin período"} · campañas de conversión`;
  $("#conversionFunnel").innerHTML = `
    <div class="funnel-level funnel-impressions"><span>Impresiones modeladas</span><strong>${formatCompactCount(impressions)}</strong><small>Base de exposición de la selección</small></div>
    <div class="funnel-level funnel-reach"><span>Alcance estimado</span><strong>${formatCompactCount(reach)}</strong><small>Frecuencia blended ${decimal.format(FUNNEL_ASSUMPTIONS.frequency)}</small></div>
    <div class="funnel-level funnel-visits"><span>Visitas calificadas</span><strong>${formatCompactCount(visits)}</strong><small>${decimal.format(reachToVisit)}% alcance→visita</small></div>
    <div class="funnel-level funnel-registers"><span>Registros esperados</span><strong>${integer.format(registrations)}</strong><small>${decimal.format(visits ? registrations / visits * 100 : 0)}% visita→registro · CPR ${money.format(cpr)}</small></div>
    <div class="funnel-level funnel-ftd"><span>FTD esperados</span><strong>${integer.format(ftd)}</strong><small>${decimal.format(conversionRate)}% registro→FTD · CPA ${money.format(cpa)}</small></div>`;
  $("#conversionFunnel").setAttribute("aria-label", `${integer.format(impressions)} impresiones, ${integer.format(reach)} personas alcanzadas, ${integer.format(visits)} visitas, ${integer.format(registrations)} registros y ${integer.format(ftd)} FTD esperados.`);

  const trend = months.map(month => {
    const monthInvestment = performanceChannels.reduce((sum, channel) => sum + (channel.budgets[month.id] || 0), 0);
    return {
      month,
      investment: monthInvestment,
      registrations: performanceChannels.reduce((sum, channel) => sum + expectedRegistrations(channel, channel.budgets[month.id] || 0), 0),
      ftd: performanceChannels.reduce((sum, channel) => sum + expectedResult(channel, channel.budgets[month.id] || 0), 0)
    };
  });
  const chart = $("#resultsTrend");
  if (!trend.length || !performanceChannels.length) {
    chart.innerHTML = '<p class="trend-empty">No hay resultados de conversión para la selección activa.</p>';
    chart.setAttribute("aria-label", "Sin resultados de conversión para la selección activa");
    $("#trendSummary").textContent = "Ajusta los filtros para volver a las campañas de conversión.";
    return;
  }

  const width = 760;
  const height = 340;
  const left = 58;
  const right = 18;
  const top = 34;
  const bottom = 54;
  const plotWidth = width - left - right;
  const plotHeight = height - top - bottom;
  const rawMax = Math.max(...trend.flatMap(item => [item.registrations, item.ftd]), 1);
  const step = rawMax > 4000 ? 1000 : rawMax > 1600 ? 500 : rawMax > 700 ? 250 : 100;
  const maxValue = Math.ceil(rawMax / step) * step;
  const xFor = index => trend.length === 1 ? left + plotWidth / 2 : left + index * plotWidth / (trend.length - 1);
  const yFor = value => top + plotHeight - value / maxValue * plotHeight;
  const grid = [0, .25, .5, .75, 1].map(ratio => {
    const y = top + plotHeight - ratio * plotHeight;
    return `<line x1="${left}" y1="${y}" x2="${width - right}" y2="${y}" class="trend-grid-line"/><text x="${left - 10}" y="${y + 4}" class="trend-axis-label" text-anchor="end">${formatTrendValue(maxValue * ratio)}</text>`;
  }).join("");
  const registrationPoints = trend.map((item, index) => `${xFor(index)},${yFor(item.registrations)}`).join(" ");
  const ftdPoints = trend.map((item, index) => `${xFor(index)},${yFor(item.ftd)}`).join(" ");
  const monthLabels = trend.map((item, index) => `<text x="${xFor(index)}" y="${height - 18}" class="trend-month" text-anchor="middle">${item.month.short}</text>`).join("");
  const registrationDots = trend.map((item, index) => `<g><circle cx="${xFor(index)}" cy="${yFor(item.registrations)}" r="5" class="trend-dot trend-dot-register"/><text x="${xFor(index)}" y="${Math.max(yFor(item.registrations) - 11, 15)}" class="trend-value trend-value-register" text-anchor="middle">${formatTrendValue(item.registrations)}</text><title>${item.month.label}: ${integer.format(item.registrations)} registros</title></g>`).join("");
  const ftdDots = trend.map((item, index) => `<g><circle cx="${xFor(index)}" cy="${yFor(item.ftd)}" r="5" class="trend-dot trend-dot-ftd"/><text x="${xFor(index)}" y="${Math.min(yFor(item.ftd) + 20, height - bottom - 2)}" class="trend-value trend-value-ftd" text-anchor="middle">${formatTrendValue(item.ftd)}</text><title>${item.month.label}: ${integer.format(item.ftd)} FTD</title></g>`).join("");
  chart.innerHTML = `<svg viewBox="0 0 ${width} ${height}" aria-hidden="true">
    ${grid}
    <polyline points="${registrationPoints}" class="trend-line trend-line-register"/>
    <polyline points="${ftdPoints}" class="trend-line trend-line-ftd"/>
    ${registrationDots}${ftdDots}${monthLabels}
  </svg>`;
  chart.setAttribute("aria-label", trend.map(item => `${item.month.label}: ${integer.format(item.registrations)} registros y ${integer.format(item.ftd)} FTD`).join(". "));
  const first = trend[0];
  const last = trend[trend.length - 1];
  $("#trendSummary").textContent = trend.length > 1
    ? `${first.month.short}: ${integer.format(first.registrations)} registros / ${integer.format(first.ftd)} FTD → ${last.month.short}: ${integer.format(last.registrations)} registros / ${integer.format(last.ftd)} FTD.`
    : `${first.month.label}: ${integer.format(first.registrations)} registros y ${integer.format(first.ftd)} FTD esperados.`;
}

function renderChannels() {
  const months = visibleMonths();
  const ids = months.map(m => m.id);
  const channels = filteredChannels(ids).sort((a, b) => totalFor(b, ids) - totalFor(a, ids));
  $("#emptyState").hidden = channels.length > 0;
  $("#channelGrid").innerHTML = channels.map(channel => {
    const investment = totalFor(channel, ids);
    const maxMonth = Math.max(...MONTHS.map(month => channel.budgets[month.id]), 1);
    const mini = MONTHS.map(month => `<span class="mini-month"><i style="height:${Math.max(channel.budgets[month.id] / maxMonth * 62, 2)}px;background:${channel.color};opacity:${ids.includes(month.id) ? 1 : .2}"></i>${month.short}</span>`).join("");
    return `<details class="channel-card">
      <summary>
        <span class="channel-card-top"><span class="channel-icon" style="background:${channel.color}">${channel.initials}</span><span class="channel-role">${escapeHtml(channel.role)}</span></span>
        <h3>${escapeHtml(channel.name)}</h3><p class="channel-objective">${escapeHtml(channel.action)}</p>
        <span class="channel-numbers"><div><span>Inversión</span><strong>${money.format(investment)}</strong></div><div><span>${escapeHtml(channel.kpi)}</span><strong>${escapeHtml(resultLabel(channel, investment))}</strong></div></span>
        <span class="channel-expand">Ver estructura y formatos</span>
      </summary>
      <div class="channel-details">
        <h4>Formatos</h4><div class="format-list">${channel.formats.map(format => `<span class="format-chip">${escapeHtml(format)}</span>`).join("")}</div>
        <h4>Inversión mensual</h4><div class="mini-months">${mini}</div>
        <h4>KPI secundario</h4><p>${escapeHtml(channel.secondary)}</p>
        <h4>Benchmark</h4><p>${escapeHtml(channel.costType)} · US$${channel.cost < 1 ? channel.cost.toFixed(3) : decimal.format(channel.cost)}</p>
        <h4>Nota</h4><p>${escapeHtml(channel.note)}</p>
      </div>
    </details>`;
  }).join("");
}

function renderTable() {
  const ids = visibleMonths().map(m => m.id);
  const channels = filteredChannels(ids).sort((a, b) => totalFor(b, ids) - totalFor(a, ids));
  $("#flowTableBody").innerHTML = channels.map(channel => {
    const investment = totalFor(channel, ids);
    return `<tr>
      <td><span class="table-channel"><i class="table-dot" style="background:${channel.color}"></i>${escapeHtml(channel.name)}</span></td>
      <td>${escapeHtml(channel.role)}</td><td>${escapeHtml(channel.objective)}</td><td><strong>${money.format(investment)}</strong></td>
      <td>${escapeHtml(channel.kpi)}</td><td>${escapeHtml(resultLabel(channel, investment))}</td><td>${channel.formats.slice(0, 3).map(escapeHtml).join(" · ")}</td>
    </tr>`;
  }).join("");
}

function render() {
  renderMetrics();
  renderDistribution();
  renderPerformanceResults();
  renderChart();
  renderChannels();
  renderTable();
}

document.addEventListener("DOMContentLoaded", () => {
  initControls();
  renderJourney();
  render();
});
