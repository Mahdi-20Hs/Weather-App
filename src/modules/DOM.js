import cloudyIcon from '../imgs/weather-cloudy.svg';
import fewCloudsIcon from '../imgs/weather-partly-cloudy.svg';
import sunnyIcon from '../imgs/weather-sunny.svg';
import rainyIcon from '../imgs/weather-pouring.svg';
import snowyIcon from '../imgs/weather-snowy-heavy.svg';
import foggyIcon from '../imgs/weather-fog.svg';
import thunderstormIcon from '../imgs/weather-lightning.svg';

import cloudyImg from '../imgs/pexels-brett-sayles-3766107.jpg';
import fewCloudsImg from '../imgs/pexels-breno-cardoso-8559062.jpg';
import sunnyImg from '../imgs/pexels-pixabay-164196.jpg';
import rainyImg from '../imgs/pexels-sami-aksu-9899126.jpg';
import snowyImg from '../imgs/pexels-roy-post-760971.jpg';
import foggyImg from '../imgs/pexels-eberhard-grossgasteiger-1367192.jpg';
import thunderstormImg from '../imgs/pexels-yuvraj-salam-3536899.jpg';

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
  cloudyIcon,
  fewCloudsIcon,
  sunnyIcon,
  snowyIcon,
  rainyIcon,
  thunderstormIcon,
  foggyIcon,
  cloudyImg,
  fewCloudsImg,
  sunnyImg,
  snowyImg,
  rainyImg,
  thunderstormImg,
  foggyImg,
};
