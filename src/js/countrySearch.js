import '../sass/main.scss';
import fetchCountries from './fetchCountries';
import getRefs from './refs';
import countryCardTemplate from '../templates/country-card.hbs';
import countriesListTemplate from '../templates/countries-list.hbs';

var debounce = require('lodash.debounce');

const { input, countryContainer } = getRefs();

input.addEventListener('input', debounce(onSearch, 500));

function onSearch(e) {
  e.preventDefault();

  countryContainer.innerHTML = '';
  const searchQuery = e.target.value;

  fetchCountries(searchQuery).then(renderCountryCard).catch(onFetchError);
}

function renderCountryCard(country) {
  if (country.length > 10) {
    console.log('больше 10');
    return;
  }

  if (country.length >= 2 && country.length <= 10) {
    console.log('от 2 до 10');
    const countriesList = countriesListTemplate(country);
    countryContainer.insertAdjacentHTML('beforeend', countriesList);
    return;
  }

  console.log('1');
  const countryCardMarkUp = countryCardTemplate(country);
  countryContainer.insertAdjacentHTML('beforeend', countryCardMarkUp);
}

function onFetchError(error) {
  console.log(error);
}
