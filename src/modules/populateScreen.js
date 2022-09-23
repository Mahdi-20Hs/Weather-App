import {
  weather,
  currentWeatherIcon,
  tempValue,
  humidity,
  wind,
  city,
  date,
  daysCards,
  body,
  photoCitation,
} from './DOM';

const sunny = ['../imgs/pexels-pixabay-164196.jpg', 'Photo by Pixabay', 'https://www.pexels.com/photo/banaue-rice-terraces-164196/'];
const fewClouds = ['../imgs/pexels-breno-cardoso-8559062.jpg', 'Photo by Breno Cardoso', 'https://www.pexels.com/photo/red-clouds-on-sky-8559062/'];
const cloudy = ['../imgs/pexels-brett-sayles-3766107.jpg', 'Photo by Brett Sayles', 'https://www.pexels.com/photo/masses-of-dark-clouds-3766107/'];
const rainy = ['../imgs/pexels-sami-aksu-9899126.jpg', 'Photo by Sami  Aksu', 'https://www.pexels.com/photo/glass-wet-with-rain-9899126/'];
const thunderStorm = ['../imgs/pexels-yuvraj-salam-3536899.jpg', 'Photo by Yuvraj Salam', 'https://www.pexels.com/photo/lightning-over-trees-3536899/'];
const snowy = ['../imgs/pexels-roy-post-760971.jpg', 'Photo by Roy Post', 'https://www.pexels.com/photo/photography-of-road-during-winter-season-760971/'];
const misty = ['../imgs/pexels-eberhard-grossgasteiger-1367192.jpg', 'Photo by eberhard grossgasteiger', 'https://www.pexels.com/photo/photo-of-foggy-forest-1367192/'];

function getFullDayName(shortcut) {
  let fullDayName;
  if (shortcut === 'Fri' || shortcut === 'Sun' || shortcut === 'Mon') {
    fullDayName = `${shortcut}day`;
  } else if (shortcut === 'Thu') {
    fullDayName = 'Thursday';
  } else if (shortcut === 'Sat') {
    fullDayName = 'Saturday';
  } else if (shortcut === 'Tue') {
    fullDayName = 'Tuesday';
  } else {
    fullDayName = 'Wednesday';
  }
  return fullDayName;
}
function changeBodyImage(weatherCondition) {
  if (weatherCondition === 'clear sky') {
    body.style.backgroundImage = `url(${sunny[0]})`;
    photoCitation.textContent = sunny[1];
    photoCitation.href = sunny[2];
  } else if (weatherCondition === 'few clouds') {
    body.setAttribute('style', `background-image: url(${fewClouds[0]})`);
    photoCitation.textContent = fewClouds[1];
    photoCitation.href = fewClouds[2];
  } else if (weatherCondition.includes('clouds')) {
    body.style.backgroundImage = `url(${cloudy[0]})`;
    photoCitation.textContent = cloudy[1];
    photoCitation.href = cloudy[2];
  } else if (weatherCondition.includes('rain')) {
    body.style.backgroundImage = `url(${rainy[0]})`;
    photoCitation.textContent = rainy[1];
    photoCitation.href = rainy[2];
  } else if (weatherCondition === 'thunderstorm') {
    body.style.backgroundImage = `url(${thunderStorm[0]})`;
    photoCitation.textContent = thunderStorm[1];
    photoCitation.href = thunderStorm[2];
  } else if (weatherCondition === 'snow') {
    body.style.backgroundImage = `url(${snowy[0]})`;
    photoCitation.textContent = snowy[1];
    photoCitation.href = snowy[2];
  } else {
    body.style.backgroundImage = `url(${misty[0]})`;
    photoCitation.textContent = misty[1];
    photoCitation.href = misty[2];
  }
}

function getWeatherIcon(weatherCondition) {
  if (weatherCondition === 'clear sky') {
    return '../imgs/weather-sunny.svg';
  } if (weatherCondition === 'few clouds') {
    return '../imgs/weather-partly-cloudy.svg';
  } if (weatherCondition.includes('clouds')) {
    return '../imgs/weather-cloudy.svg';
  } if (weatherCondition.includes('rain')) {
    return '../imgs/weather-pouring.svg';
  } if (weatherCondition === 'thunderstorm') {
    return '../imgs/weather-lightning.svg';
  } if (weatherCondition === 'snow') {
    return '../imgs/weather-snowy-heavy.svg';
  }
  return '../imgs/weather-fog.svg';
}

function displayCurrentWeather(currentWeatherData, cityName) {
  tempValue.textContent = currentWeatherData.temp;
  humidity.textContent = currentWeatherData.humidity;
  wind.textContent = currentWeatherData.wind;
  city.textContent = cityName.charAt(0).toUpperCase() + cityName.slice(1);

  const dateArr = currentWeatherData.date.split(' ');
  dateArr[0] = getFullDayName(dateArr[0]);
  date.textContent = dateArr.join(' ');

  weather.textContent = currentWeatherData.weather;
  currentWeatherIcon.src = getWeatherIcon(currentWeatherData.weather);
}

function populateForecastWeather(dailyWeatherData) {
  const daysCardsArr = [...daysCards];

  dailyWeatherData.forEach((day) => {
    const index = dailyWeatherData.indexOf(day);
    const cardHeader = daysCardsArr[index].querySelector('.day');
    const cardIcon = daysCardsArr[index].querySelector('.weather-icon');
    const maxTemp = daysCardsArr[index].querySelector('.max-temp span');
    const minTemp = daysCardsArr[index].querySelector('.min-temp span');

    cardHeader.textContent = day.date.split(' ')[0];
    cardIcon.src = getWeatherIcon(day.weather);
    maxTemp.textContent = day.max;
    minTemp.textContent = day.min;
  });
}

function populateScreen(dailyWeatherData, currentWeatherData, cityName) {
  displayCurrentWeather(currentWeatherData, cityName);
  changeBodyImage(currentWeatherData.weather);
  populateForecastWeather(dailyWeatherData);
}

export default populateScreen;
