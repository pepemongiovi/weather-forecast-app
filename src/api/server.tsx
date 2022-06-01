import axios, { AxiosResponse } from 'axios'

const api = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL
});

export const getCityByName = async (cityName: string): Promise<AxiosResponse> => {
  const endpoint = '/weather'
  const params = {
    appid: process.env.REACT_APP_API_KEY,
    q: cityName
  }

  return api.get(endpoint, { params })
}

export const getWeatherForecast = async (lat: number, lon: number): Promise<AxiosResponse> => {
  const endpoint = '/onecall'
  const params = {
    appid: process.env.REACT_APP_API_KEY,
    exclude: 'hourly,current,minutely',
    lat,
    lon
  }

  return api.get(endpoint, { params })
}

