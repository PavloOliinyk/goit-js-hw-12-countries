import '../sass/main.scss';
import '@pnotify/core/dist/PNotify.css';
import '@pnotify/core/dist/BrightTheme.css';
import fetchCountries from './fetchCountries';
import getRefs from './refs';
import countryCardTemplate from '../templates/country-card.hbs';
import countriesListTemplate from '../templates/countries-list.hbs';
import {
  noticeError,
  noticeNull,
  noticeProgress,
  noticeSuccess,
  setDefaultsDelay,
} from './notifications';

var debounce = require('lodash.debounce');
const { input, countryContainer } = getRefs();
setDefaultsDelay(1500);

function onSearch(e) {
  e.preventDefault();

  countryContainer.innerHTML = '';
  const searchQuery = e.target.value;

  fetchCountries(searchQuery).then(renderCountryCard).catch(noticeNull);
}

function renderCountryCard(country) {
  if (country.length > 10) {
    noticeError();
    return;
  }

  if (country.length >= 2 && country.length <= 10) {
    const countriesList = countriesListTemplate(country);
    countryContainer.insertAdjacentHTML('beforeend', countriesList);
    noticeProgress();
    return;
  }

  const countryCardMarkUp = countryCardTemplate(country);
  countryContainer.insertAdjacentHTML('beforeend', countryCardMarkUp);
  noticeSuccess();
}

input.addEventListener('input', debounce(onSearch, 500));
