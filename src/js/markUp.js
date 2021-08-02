// import countryCardTemplate from '../templates/country-card.hbs';
// import countriesListTemplate from '../templates/countries-list.hbs';
// import { noticeError, noticeProgress, noticeSuccess } from './notifications';

// export default function renderCountryCard(country) {
//   if (country.length > 10) {
//     noticeError();
//     return;
//   }

//   if (country.length >= 2 && country.length <= 10) {
//     const countriesList = countriesListTemplate(country);
//     countryContainer.insertAdjacentHTML('beforeend', countriesList);
//     noticeProgress();
//     return;
//   }

//   const countryCardMarkUp = countryCardTemplate(country);
//   countryContainer.insertAdjacentHTML('beforeend', countryCardMarkUp);
//   noticeSuccess();
// }
