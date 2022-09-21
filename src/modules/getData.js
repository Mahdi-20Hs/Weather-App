import axios from 'axios';
import fromUnixTime from 'date-fns/fromUnixTime';

async function getLocation(city) {
  try {
    const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=f421a9f223bf59b3abbd7698f3e933d2`);

    const { lat } = response.data.coord;
    const { lon } = response.data.coord;
    const cityName = response.data.name;
    return { lat, lon, cityName };
  } catch (err) {
    alert(`${err} from getLocation`);
    return undefined;
  }
}
function formatDate(date) {
  const formatedDate = fromUnixTime(date);
  let hours = formatedDate.getHours();
  hours = (hours % 12) || 12;
  let mins = formatedDate.getMinutes();
  mins = (mins > 0) || '00';
  const day = `${formatedDate}`.split(' ')[0];
  const amOrPm = (hours >= 12) ? 'PM' : 'AM';
  return `${day} ${hours}:${mins} ${amOrPm}`;
}
function CreateDayObj(dayData) {
  const dayObj = {};
  dayObj.date = formatDate(dayData.dt);
  dayObj.temp = Math.floor((dayData.temp.day + dayData.temp.night) / 2);
  dayObj.min = Math.floor(dayData.temp.min);
  dayObj.max = Math.floor(dayData.temp.max);
  dayObj.humidity = Math.floor(dayData.humidity);
  dayObj.wind = Math.floor(dayData.wind_speed * 3.6);
  dayObj.weather = dayData.weather[0].description;
  return dayObj;
}
function getDailyWeatherData(daysArr) {
  const dailyWeatherData = [];
  daysArr.forEach((day) => {
    const dayObj = CreateDayObj(day);
    dailyWeatherData.push(dayObj);
  });
  return dailyWeatherData;
}
async function getData(city) {
  const coords = await getLocation(city);
  const { lat } = coords;
  const { lon } = coords;

  try {
    const response = await axios.get(`https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&exclude=minutely,hourly&units=metric&appid=f421a9f223bf59b3abbd7698f3e933d2`);
    const daysArr = response.data.daily;
    const dailyWeatherData = getDailyWeatherData(daysArr);
    return dailyWeatherData;
  } catch (err) {
    alert(`${err} from getData`);
    return undefined;
  }
}

export default getData;
