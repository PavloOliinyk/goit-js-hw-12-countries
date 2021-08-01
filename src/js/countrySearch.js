import '../sass/main.scss';
import '@pnotify/core/dist/PNotify.css';
import '@pnotify/core/dist/BrightTheme.css';
import { success, notice, error, info, defaults } from '@pnotify/core';
import fetchCountries from './fetchCountries';
import getRefs from './refs';
import countryCardTemplate from '../templates/country-card.hbs';
import countriesListTemplate from '../templates/countries-list.hbs';

var debounce = require('lodash.debounce');

const { input, countryContainer } = getRefs();
defaults.delay = 1500;
input.addEventListener('input', debounce(onSearch, 500));

function onSearch(e) {
  e.preventDefault();

  countryContainer.innerHTML = '';
  const searchQuery = e.target.value;

  fetchCountries(searchQuery).then(renderCountryCard).catch(noticeNull);
}

function renderCountryCard(country) {
  if (country.length > 10) {
    console.log('больше 10');
    noticeError();
    return;
  }

  if (country.length >= 2 && country.length <= 10) {
    console.log('от 2 до 10');
    const countriesList = countriesListTemplate(country);
    countryContainer.insertAdjacentHTML('beforeend', countriesList);
    noticeProgress();
    return;
  }

  console.log('1');

  const countryCardMarkUp = countryCardTemplate(country);
  countryContainer.insertAdjacentHTML('beforeend', countryCardMarkUp);
  noticeSuccess();
}

function noticeNull() {
  notice({
    title: 'Warning',
    text: 'Please, type country to show',
  });
}

function noticeError() {
  error({
    title: 'Error',
    text: 'Too many matches found. Please enter a more specific query',
  });
}

function noticeProgress() {
  info({
    title: 'Information',
    text: 'Please, keep searching...',
  });
}

function noticeSuccess() {
  success({
    title: 'Success',
    text: 'The search proceeded successfully',
  });
}
