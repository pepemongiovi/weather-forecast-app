import { Card, CardContent } from "@mui/material"
import WeatherForecast from "../../models/WeatherForecast"
import { InfoContainer, Label, Value, InfoGrid } from "./ForecastInfo.styles"

interface ForecastInfoProps {
  forecast: WeatherForecast
}

const ForecastInfo = ({ forecast }: ForecastInfoProps) => {
  const { temp, feels_like, clouds, humidity, weather, wind_speed, timezone, rain } = forecast

  const renderForecastInfoCell = (label: string, value: number | string, unit = '') => (
    <InfoContainer>
      <Label>{label}</Label>
      <Value variant="h5">
        {value !== undefined ? `${value} ${unit}` : '-'}
      </Value>
    </InfoContainer>
  )

  return (
    <Card sx={{ backgroundColor: '#5000db', color: 'white' }}>
      <InfoGrid container>
        <CardContent>
          {renderForecastInfoCell("Forecast", `${weather[0].main} (${weather[0].description})`)}
          {renderForecastInfoCell("Minimum", temp.min, "°K")}
          {renderForecastInfoCell("Maximum", temp.night, "°K")}
          {renderForecastInfoCell("Timezone", timezone)}
        </CardContent>
        <CardContent>
          {renderForecastInfoCell("Cloudiness", clouds, "%")}
          {renderForecastInfoCell("Rain precipitation", rain, "mm")}
          {renderForecastInfoCell("Humidity", humidity, "°K")}
          {renderForecastInfoCell("Wind Speed", wind_speed, "m/s")}
        </CardContent>
        <CardContent>
          {renderForecastInfoCell("Morning", temp.morn, "°K")}
          {renderForecastInfoCell("Day", temp.day, "°K")}
          {renderForecastInfoCell("Evening", temp.eve, "°K")}
          {renderForecastInfoCell("Night", temp.night, "°K")}
        </CardContent>
        <CardContent>
          {renderForecastInfoCell("Morning (Perception)", feels_like.morn, "°K")}
          {renderForecastInfoCell("Day (Perception)", feels_like.day, "°K")}
          {renderForecastInfoCell("Evening (Perception)", feels_like.eve, "°K")}
          {renderForecastInfoCell("Night (Perception)", feels_like.night, "°K")}
        </CardContent>
      </InfoGrid>
    </Card>
  )
}

export default ForecastInfo