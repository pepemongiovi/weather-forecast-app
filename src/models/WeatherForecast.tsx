import Temperature from "./Temperature"
import Weather from "./Weather";

export default interface WeatherForecast {
  date: string;
  temp: Temperature
  feels_like: Omit<Temperature, "min" | "max">
  humidity: number;
  clouds: number;
  rain: number;
  weather: Weather[];
  timezone: string;
  wind_speed: number;
}