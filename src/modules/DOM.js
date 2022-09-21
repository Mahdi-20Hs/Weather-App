const searchbar = document.querySelector('.searchbar');
const searchBtn = document.querySelector('.search-btn');
const form = document.querySelector('form');

const currentWeatherIcon = document.querySelector('.weather-icon-current');
const weather = document.querySelector('.weather');
const tempValue = document.querySelector('.temp-value');
const celsiusBtn = document.querySelector('.celsius');
const farhrenhietBtn = document.querySelector('.farhrenhiet');
const humidity = document.querySelector('.humidity span');
const wind = document.querySelector('.wind span');

const city = document.querySelector('.city');
const date = document.querySelector('.date');
const daysCards = document.querySelectorAll('.card');

export {

  currentWeatherIcon,
  searchbar,
  searchBtn,
  form,
  weather,
  tempValue,
  celsiusBtn,
  farhrenhietBtn,
  humidity,
  wind,
  city,
  date,
  daysCards,
};
