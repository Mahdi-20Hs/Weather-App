import {
  weather,
  currentWeatherIcon,
  tempValue,
  celsiusBtn,
  farhrenhietBtn,
  humidity,
  wind,
  city,
  date,
  daysCards,
  clouds,
  fewClouds,
} from './DOM';

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

function getWeatherIcon(weatherCondition) {
  if (weatherCondition === 'clear sky') {
    return '../imgs/weather-sunny-svgrepo-com.svg';
  } if (weatherCondition === 'few clouds') {
    return '../imgs/cloudy-svgrepo-com.svg';
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
  populateForecastWeather(dailyWeatherData);
}

export default populateScreen;
