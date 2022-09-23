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
} from './DOM';

const sunny = [sunnyImg, 'Photo by Pixabay', 'https://www.pexels.com/photo/banaue-rice-terraces-164196/'];
const fewClouds = [fewCloudsImg, 'Photo by Breno Cardoso', 'https://www.pexels.com/photo/red-clouds-on-sky-8559062/'];
const cloudy = [cloudyImg, 'Photo by Brett Sayles', 'https://www.pexels.com/photo/masses-of-dark-clouds-3766107/'];
const rainy = [rainyImg, 'Photo by Sami  Aksu', 'https://www.pexels.com/photo/glass-wet-with-rain-9899126/'];
const thunderStorm = [thunderstormImg, 'Photo by Yuvraj Salam', 'https://www.pexels.com/photo/lightning-over-trees-3536899/'];
const snowy = [snowyImg, 'Photo by Roy Post', 'https://www.pexels.com/photo/photography-of-road-during-winter-season-760971/'];
const foggy = [foggyImg, 'Photo by eberhard grossgasteiger', 'https://www.pexels.com/photo/photo-of-foggy-forest-1367192/'];

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

function setBodyImage(weatherCondition) {
  body.style.backgroundImage = `url(${weatherCondition[0]})`;
  photoCitation.textContent = weatherCondition[1];
  photoCitation.href = weatherCondition[2];
}
function changeBodyImage(weatherCondition) {
  if (weatherCondition === 'clear sky') {
    setBodyImage(sunny);
  } else if (weatherCondition === 'few clouds') {
    setBodyImage(fewClouds);
  } else if (weatherCondition.includes('clouds')) {
    setBodyImage(cloudy);
  } else if (weatherCondition.includes('rain')) {
    setBodyImage(rainy);
  } else if (weatherCondition === 'thunderstorm') {
    setBodyImage(thunderStorm);
  } else if (weatherCondition === 'snow') {
    setBodyImage(snowy);
  } else {
    setBodyImage(foggy);
  }
}

function getWeatherIcon(weatherCondition) {
  if (weatherCondition === 'clear sky') {
    return sunnyIcon;
  } if (weatherCondition === 'few clouds') {
    return fewCloudsIcon;
  } if (weatherCondition.includes('clouds')) {
    return cloudyIcon;
  } if (weatherCondition.includes('rain')) {
    return rainyIcon;
  } if (weatherCondition === 'thunderstorm') {
    return thunderstormIcon;
  } if (weatherCondition === 'snow') {
    return snowyIcon;
  }
  return foggyIcon;
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
