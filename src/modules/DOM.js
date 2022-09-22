const searchbar = document.querySelector('.searchbar');
const searchBtn = document.querySelector('.search-btn');
const form = document.querySelector('form');

const currentWeatherIcon = document.querySelector('.weather-icon-current');
const weather = document.querySelector('.weather');
const tempValue = document.querySelector('.temp-value');
const celsiusBtn = document.querySelector('.celsius');
const farhrenhietBtn = document.querySelector('.farhrenheit');
const humidity = document.querySelector('.humidity span');
const wind = document.querySelector('.wind span');
const windUnit = document.querySelector('.wind-unit');

const city = document.querySelector('.city');
const date = document.querySelector('.date');
const daysCards = document.querySelectorAll('.card');

const body = document.querySelector('body');
const photoCitation = document.querySelector('.photo-citation');

export {
  photoCitation,
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
  windUnit,
  city,
  date,
  daysCards,
  body,
};
