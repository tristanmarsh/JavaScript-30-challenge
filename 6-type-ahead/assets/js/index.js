{
  const cities = [];
  const searchInput = document.querySelector('input.search');
  const target = document.querySelector('.suggestions');

  function initCitiesData() {
    const localStoredCities = JSON.parse(window.localStorage.getItem('cities'));

    if (localStoredCities !== null) {
      cities.push(...localStoredCities);
    } else {
      const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

      fetch(endpoint)
        .then(blob => blob.json())
        .then(response => {
          window.localStorage.setItem('cities', JSON.stringify(response));
          cities.push(...response);
        }).catch(error => new Error(error));
    }
  }

  function findMatches(query, searchObject) {
    const tlc = string => string.toLowerCase();
    return searchObject.filter(city => (tlc(city.city).includes(tlc(query))
      || tlc(city.state).includes(tlc(query))));
  }

  function displayMatches(matches, query) {
    function highlight(term, string) {
      return string.replace(term, `<span class="hl">${term}</span>`);
    }

    function formatNumberSeparator(input) {
      const commaCheck = (index, array) => (((array.length - index - 1) % 3 === 0 && index < array.length - 1) ? ',' : '');
      return input.split('').reduce((acc, value, index, array) => (
        `${acc}${value}${commaCheck(index, array)}`
      ), '');
    }

    target.innerHTML = (matches.length > 0)
      ? matches.reduce((acc, city) => {
        const cityName = highlight(query, `${city.city}`);
        const stateName = highlight(query, `${city.state}`);
        const cityPopulation = formatNumberSeparator(`${city.population}`);

        return `${acc}
          <li>
            <span class="name">${cityName}, ${stateName}</span>
            <span class="hl"></span><span class="population">${cityPopulation}</span>
          </li>`;
      }, '')
      : `<li>Filter for a city</li>
        <li>or a state</li>`;
  }

  function handleSearchChange() {
    const query = this.value;
    const matches = findMatches(query, cities);
    displayMatches(matches, query);
  }

  (function init() {
    initCitiesData();
    searchInput.addEventListener('keyup', handleSearchChange);
  }());
}
