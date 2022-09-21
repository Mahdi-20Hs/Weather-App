import './styles/main.css';
import { searchbar, form } from './modules/DOM';
import getData from './modules/getData';
import populateScreen from './modules/populateScreen';

form.addEventListener('submit', async (event) => {
  event.preventDefault();
  const searchTerm = searchbar.value;
  const dailyWeatherData = await getData(searchTerm);
  populateScreen(dailyWeatherData, dailyWeatherData[0], searchTerm);
  console.log(dailyWeatherData);
});
