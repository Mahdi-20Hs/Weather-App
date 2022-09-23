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

function activateCard(index) {
  daysCards.forEach((element) => {
    element.classList.remove('clicked-card');
  });
  [...daysCards][index].classList.add('clicked-card');
}

form.addEventListener('submit', async (event) => {
  event.preventDefault();
  await submitForm();
  populateScreen(dailyWeatherData, dailyWeatherData[0], searchTerm);
  activateCard(0);
});

daysCards.forEach((card) => {
  card.addEventListener('click', () => {
    const index = [...daysCards].indexOf(card);
    activateCard(index);
    populateScreen(dailyWeatherData, dailyWeatherData[index], searchTerm);
  });
});

function getIndex() {
  let index;
  daysCards.forEach((card) => {
    if (card.classList.contains('clicked-card')) {
      index = [...daysCards].indexOf(card);
    }
  });
  return index;
}

celsiusBtn.addEventListener('click', () => {
  if (unit === 'f') {
    unit = 'c';
    celsiusBtn.classList.add('activated-unit');
    farhrenhietBtn.classList.remove('activated-unit');

    dailyWeatherData.forEach((day) => {
      day.max = ((day.max - 32) * (5 / 9)).toFixed(0);
      day.min = ((day.min - 32) * (5 / 9)).toFixed(0);
      day.temp = ((day.temp - 32) * (5 / 9)).toFixed(0);
      day.wind = (day.wind * 1.609).toFixed(0);
    });
    const index = getIndex();
    populateScreen(dailyWeatherData, dailyWeatherData[index], searchTerm);
    windUnit.textContent = 'km/h';
  }
});

farhrenhietBtn.addEventListener('click', () => {
  if (unit === 'c') {
    unit = 'f';

    farhrenhietBtn.classList.add('activated-unit');
    celsiusBtn.classList.remove('activated-unit');
    dailyWeatherData.forEach((day) => {
      day.max = ((day.max * (9 / 5)) + 32).toFixed(0);
      day.min = ((day.min * (9 / 5)) + 32).toFixed(0);
      day.temp = ((day.temp * (9 / 5)) + 32).toFixed(0);
      day.wind = (day.wind / 1.609).toFixed(0);
    });
    const index = getIndex();
    populateScreen(dailyWeatherData, dailyWeatherData[index], searchTerm);
    windUnit.textContent = 'mph';
  }
});

window.onload = async function () {
  searchTerm = 'London';
  dailyWeatherData = await getData(searchTerm);
  populateScreen(dailyWeatherData, dailyWeatherData[0], searchTerm);
};
