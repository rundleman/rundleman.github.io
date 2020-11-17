(function () {
  const HEXAGON_BORDER = 2;
  let hexagonWidth = 100;
  let hexagonMapHeight = 0;

  const mapSettings = {
    l: null,
    m: null,
    n: null,
    domains: [],
    probability: null,
    domainsCount: null,
    holeDomainsCount: null,
  };

  // start listeners functions

  const mapSettingsInputs = document.querySelectorAll(".map-settings-input");
  const showMapBtn = document.querySelector(".show-map-btn");
  const countDomainsBtn = document.querySelector(".count-domains");
  const autoFillingInput = document.querySelector(".map-auto-filling-input");
  const autoFillingBtn = document.querySelector(".map-auto-filling-btn");

  if (!mapSettingsInputs) return;
  if (!showMapBtn) return;
  if (!countDomainsBtn) return;
  if (!autoFillingInput) return;
  if (!autoFillingBtn) return;

  showMapBtn.addEventListener("click", showMap);
  countDomainsBtn.addEventListener("click", showDomainsCount);
  autoFillingBtn.addEventListener("click", autoFill);

  for (const input of mapSettingsInputs) {
    input.addEventListener("input", updateMapSettings);
  }

  autoFillingInput.addEventListener("input", updateFillingProbability);

  // end listeners functions

  function updateMapSettings(e) {
    if (!e || !e.target) return;

    clearError();
    const { name, value } = e.target;
    mapSettings[name] = Number(value);
  }

  function updateFillingProbability(e) {
    if (!e || !e.target) return;

    clearError();
    const { value } = e.target;
    mapSettings.probability = Number(value);
  }

  function showMap() {
    if (isMapSizeValid()) {
      clearMap();
      fillInitialDomains();
      renderHexagonMap();
      renderCountDomainsResult(0);
    } else showMapSettingsError("L,N,M<=30, целые");
  }

  function autoFill() {
    if (!isMapSizeValid()) {
      showMapSettingsError("L,N,M<=30, целые");
    } else if (!isProbabilityValid()) {
      showMapSettingsError("вероятность от 0,01 до 0,99");
    } else {
      clearMap();
      fillInitialDomains();
      renderHexagonMap(true);
      showDomainsCount();
    }
  }

  function isMapSizeValid() {
    const { l, m, n } = mapSettings;

    if (!isValid(l)) return false;
    if (!isValid(m)) return false;
    if (!isValid(n)) return false;

    return true;

    function isValid(coordinate) {
      if (!Number.isInteger(coordinate)) return false;
      if (coordinate < 1 || coordinate > 30) return false;

      return true;
    }
  }

  function isProbabilityValid() {
    const { probability } = mapSettings;

    if (!probability || probability < 0.01 || probability > 0.99) return false;

    return true;
  }

  function fillInitialDomains() {
    const { l, m, n } = mapSettings;

    mapSettings.domains = [];
    for (let i = 0; i < n + l - 1; i++) {
      mapSettings.domains[i] = new Array(m + l - 1).fill(false);
    }
  }

  function changeDomains(e) {
    if (!e || !e.target) return;

    const {
      dataset: { coordinates },
      checked,
    } = e.target;

    [row, column] = coordinates.split(" ");

    mapSettings.domains[row][column] = checked;
  }

  // start render functions

  function renderHexagonMap(auto = false) {
    const hexagonMap = document.querySelector(".hexagon-map");
    if (!hexagonMap) return;

    const { l, m, n } = mapSettings;

    let hexagonCount = Math.ceil(m + l / 2 + n / 2);
    hexagonWidth = Math.min(Math.floor(1024 / hexagonCount), 100);
    hexagonMapHeight = 0;

    for (let row = 0; row < n + l - 1; row++) {
      for (let column = 0; column < m + l - 1; column++) {
        if (row + column < l - 1 || row + column >= n + m + l - 2) {
          continue;
        }

        let rowOffset = 0;
        let columnOffset = 0;

        if (column < l - 1) {
          rowOffset = -(l - 1 - column) * (hexagonWidth / 2);
        } else if (column > l - 1) {
          rowOffset = (column - l + 1) * (hexagonWidth / 2);
        }
        rowOffset += row * HEXAGON_BORDER;
        columnOffset += column * HEXAGON_BORDER;

        const left = hexagonWidth * row + rowOffset;
        const top = ((hexagonWidth * Math.sqrt(3)) / 2) * column + columnOffset;
        hexagonMapHeight = Math.max(hexagonMapHeight, top);

        const hexagon = createHexagon(row, column, left, top, auto);
        hexagonMap.append(hexagon);
      }
    }

    fixMapResultsMargin();
  }

  function createHexagon(row, column, left, top, auto) {
    const hexagon = document.createElement("label");
    hexagon.className = "hexagon";
    hexagon.style.left = `${left}px`;
    hexagon.style.top = `${top}px`;

    const input = document.createElement("input");
    input.type = "checkbox";
    if (auto) {
      const { probability } = mapSettings;
      const state = Math.random() < probability;
      input.checked = state;
      mapSettings.domains[row][column] = state;
    }
    input.classList.add("hexagon-input", "visually-hidden");
    input.dataset.coordinates = `${row} ${column}`;
    input.addEventListener("change", changeDomains);

    hexagon.append(input);

    for (let i = 1; i < 4; i++) {
      const rectangle = document.createElement("div");
      rectangle.classList.add("hexagon-rectangle", `hexagon-rectangle-${i}`);
      rectangle.style.width = `${hexagonWidth}px`;
      rectangle.style.height = `${hexagonWidth * 0.6}px`;
      hexagon.append(rectangle);
    }

    return hexagon;
  }

  function renderMapResultsTable() {
    const mapResults = document.querySelector(".map-results");
    if (!mapResults) return;

    const {
      probability,
      domainsCount,
      holeDomainsCount,
      domains,
      l,
      m,
      n,
    } = mapSettings;
    let cellsInDomain = 0;
    for (let i = 0; i < domains.length; i++) {
      cellsInDomain += domains[i].filter(Boolean).length;
    }
    const cellsCount = (n + l - 1) * (m + l - 1) - l * (l - 1);
    const tr = document.createElement("tr");

    addTd(probability);
    addTd(domainsCount);
    addTd(holeDomainsCount);
    addTd(
      `Всего ячеек = ${cellsCount}, из них имеющих значение 1 = ${cellsInDomain}`
    );

    const tbody = mapResults.tBodies[0];
    if (!tbody) return;

    if (tbody.rows.length === 10) {
      tbody.firstElementChild.remove();
    }
    tbody.append(tr);

    function addTd(value) {
      const td = document.createElement("td");
      td.innerText = value;
      tr.append(td);
    }
  }

  function colorHexagon(row, col, color) {
    const elem = document.querySelector(`[data-coordinates='${row} ${col}']`);
    if (!elem) return;
    const rectangles = elem.parentNode.querySelectorAll(".hexagon-rectangle");
    if (!rectangles) return;

    for (const rectangle of rectangles) {
      rectangle.style.backgroundColor = color;
    }
  }

  function clearColors() {
    const { domains } = mapSettings;

    for (let row = 0; row < domains.length; row++) {
      for (let col = 0; col < domains[row].length; col++) {
        colorHexagon(row, col, "");
      }
    }
  }

  function clearMap() {
    const hexagonMap = document.querySelector(".hexagon-map");
    if (!hexagonMap) return;

    hexagonMap.innerHTML = "";
  }

  function renderCountDomainsResult(domainsCount) {
    const countDomainsResult = document.querySelector(".count-domains-result");
    if (!countDomainsResult) return;

    countDomainsResult.innerHTML = domainsCount;
  }

  function fixMapResultsMargin() {
    const mapResults = document.querySelector(".map-results");
    if (!mapResults) return;

    mapResults.style.marginTop = `${hexagonMapHeight + 200}px`;
  }

  function showMapSettingsError(text) {
    const mapSettings = document.querySelector(".map-settings");
    if (!mapSettings) return;

    const error = document.createElement("p");
    error.className = "error";
    error.innerHTML = text;
    mapSettings.append(error);
  }

  function clearError() {
    const error = document.querySelector(".error");
    if (!error) return;

    error.remove();
  }
  // end render functions

  function showDomainsCount() {
    clearColors();
    const { domains } = mapSettings;
    const visited = [];
    let domainsCount = 0;
    for (let i = 0; i < mapSettings.domains.length; i++) {
      visited[i] = new Array(mapSettings.domains[i].length).fill(false);
    }

    function bfs(row, column) {
      const color = getRandomColor();
      const queue = [[row, column]];
      visited[row][column] = domainsCount;

      function addNode([row, column]) {
        if (row < 0 || column < 0) return;
        if (row >= domains.length || column >= domains[row].length) return;
        if (!domains[row][column]) return;
        if (visited[row][column]) return;

        queue.push([row, column]);
        visited[row][column] = domainsCount;
      }

      while (queue.length > 0) {
        const [row, column] = queue.shift();
        colorHexagon(row, column, color);

        addNode([row + 1, column]);
        addNode([row - 1, column]);
        addNode([row, column + 1]);
        addNode([row, column - 1]);
        addNode([row + 1, column - 1]);
        addNode([row - 1, column + 1]);
      }
    }

    for (let row = 0; row < domains.length; row++) {
      for (let column = 0; column < domains[row].length; column++) {
        const domainValue = domains[row][column];

        if (domainValue && !visited[row][column]) {
          domainsCount++;
          bfs(row, column);
        }
      }
    }

    mapSettings.domainsCount = domainsCount;
    renderCountDomainsResult(domainsCount);
    getHoleDomainsCount(visited);
  }

  function getHoleDomainsCount(visited) {
    let holeDomainsCount = 0;
    const holeDomains = [];

    function bfs(row, column) {
      const queue = [[row, column]];
      visited[row][column] = true;
      let atEdge = false;
      let candidateNode = false;

      function addNode([row, column]) {
        if (
          row < 0 ||
          column < 0 ||
          row >= visited.length ||
          column >= visited[row].length
        ) {
          atEdge = true;
          return;
        }
        if (typeof visited[row][column] === "number") {
          candidateNode = visited[row][column];
          return;
        }
        if (visited[row][column]) return;

        queue.push([row, column]);
        visited[row][column] = true;
      }

      while (queue.length > 0) {
        const [row, column] = queue.shift();

        addNode([row + 1, column]);
        addNode([row - 1, column]);
        addNode([row, column + 1]);
        addNode([row, column - 1]);
        addNode([row + 1, column - 1]);
        addNode([row - 1, column + 1]);
      }

      if (!atEdge) {
        if (!holeDomains.includes(candidateNode)) {
          holeDomains.push(candidateNode);
          holeDomainsCount++;
        }
      }
    }

    for (let row = 0; row < visited.length; row++) {
      for (let column = 0; column < visited[row].length; column++) {
        if (!visited[row][column]) {
          bfs(row, column);
        }
      }
    }

    mapSettings.holeDomainsCount = holeDomainsCount;
    renderMapResultsTable();
  }

  function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";

    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }

    return color;
  }
})();
