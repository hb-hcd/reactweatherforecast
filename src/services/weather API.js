const API_KEY = process.env.REACT_APP_API_KEY
const BASE_URL = "https://api.openweathermap.org/data/2.5"
//https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}

export const getWeatherData = async (dataType, searchParams)=>{
    const url = new URL(BASE_URL+"/"+dataType);
    url.search =new URLSearchParams({...searchParams,appid:API_KEY})
    console.log(url);
  const res = await fetch(url);
  const data =await res.json();
  return data;
}
