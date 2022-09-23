import './styles/main.css';
import {
  searchbar, form, daysCards, celsiusBtn, farhrenhietBtn, windUnit,
} from './modules/DOM';
import getData from './modules/getData';
import populateScreen from './modules/populateScreen';

let searchTerm;
let dailyWeatherData;
let unit = 'c';

async function submitForm() {
  searchTerm = searchbar.value;
  dailyWeatherData = await getData(searchTerm);
}

form.addEventListener('submit', async (event) => {
  event.preventDefault();
  await submitForm();
  populateScreen(dailyWeatherData, dailyWeatherData[0], searchTerm);
  daysCards.forEach((element) => {
    element.classList.remove('clicked-card');
  });
  [...daysCards][0].classList.add('clicked-card');
  console.log(dailyWeatherData);
});

daysCards.forEach((card) => {
  card.addEventListener('click', () => {
    daysCards.forEach((element) => {
      element.classList.remove('clicked-card');
    });
    card.classList.add('clicked-card');
    const index = [...daysCards].indexOf(card);
    populateScreen(dailyWeatherData, dailyWeatherData[index], searchTerm);
  });
});

celsiusBtn.addEventListener('click', () => {
  if (unit === 'f') {
    unit = 'c';
    celsiusBtn.classList.add('activated-unit');
    farhrenhietBtn.classList.remove('activated-unit');
    let index;
    dailyWeatherData.forEach((day) => {
      day.max = ((day.max - 32) * (5 / 9)).toFixed(0);
      day.min = ((day.min - 32) * (5 / 9)).toFixed(0);
      day.temp = ((day.temp - 32) * (5 / 9)).toFixed(0);
      day.wind = (day.wind * 1.609).toFixed(0);
    });
    daysCards.forEach((card) => {
      if (card.classList.contains('clicked-card')) {
        index = [...daysCards].indexOf(card);
      }
    });
    populateScreen(dailyWeatherData, dailyWeatherData[index], searchTerm);
    windUnit.textContent = 'km/h';
  }
});
farhrenhietBtn.addEventListener('click', () => {
  if (unit === 'c') {
    unit = 'f';
    let index;
    farhrenhietBtn.classList.add('activated-unit');
    celsiusBtn.classList.remove('activated-unit');
    dailyWeatherData.forEach((day) => {
      day.max = ((day.max * (9 / 5)) + 32).toFixed(0);
      day.min = ((day.min * (9 / 5)) + 32).toFixed(0);
      day.temp = ((day.temp * (9 / 5)) + 32).toFixed(0);
      day.wind = (day.wind / 1.609).toFixed(0);
    });
    daysCards.forEach((card) => {
      if (card.classList.contains('clicked-card')) {
        index = [...daysCards].indexOf(card);
        return undefined;
      }
    });
    populateScreen(dailyWeatherData, dailyWeatherData[index], searchTerm);
    windUnit.textContent = 'mph';
  }
});
window.onload = async function () {
  searchTerm = 'London';
  dailyWeatherData = await getData(searchTerm);
  populateScreen(dailyWeatherData, dailyWeatherData[0], searchTerm);
};
