import { useState } from 'react'
import { toast } from 'react-toastify'
import { getCityByName, getWeatherForecast } from '../../api/server'
import ForecastInfo from '../../components/ForecastInfo/ForecastInfo'
import SearchBar from '../../components/SearchBar/SearchBar'
import SideMenu from '../../components/SideMenu/SideMenu'
import City from '../../models/City'
import WeatherForecast from '../../models/WeatherForecast'
import { Container, NoSearchText } from './HomePage.styles'

const HomePage = () => {
  const [loading, setLoading] = useState<boolean>(false)
  const [selectedForecastIndex, setSelectedForecastIndex] = useState<number | null>(null)
  const [dailyForecasts, setDailyForecasts] = useState<WeatherForecast[]>([])

  const handleSearch = (search: string) => {
    if (!search?.length) return
    setLoading(true)

    getCityByName(search).then(({ data }) => {
      const { coord: { lat, lon } }: City = data

      getWeatherForecast(lat, lon).then(({ data }) => {
        const dailyWithTimezone = data.daily.map(
          (v: any) => ({ ...v, timezone: data.timezone })
        )

        setDailyForecasts(dailyWithTimezone);
        setSelectedForecastIndex(0)
        toast("Successfully found forecasts!", { type: 'success' });
      })
        .catch(() => {
          toast("Server error. Please try again later.", { type: 'error' })
        })
    })
      .catch(({ response: { status, data } }) => {
        if (status === 404) toast(data.message, { type: 'error' })
        else toast("Server error. Please try again later.", { type: 'error' })
      })
      .finally(() => setLoading(false))
  }

  return (
    <Container>
      <SearchBar {...{ loading }} {...{ handleSearch }} label="City name" />
      <SideMenu {...{ selectedForecastIndex }} onSelect={setSelectedForecastIndex} {...{ dailyForecasts }} />
      {selectedForecastIndex !== null ? (
        <ForecastInfo forecast={dailyForecasts[selectedForecastIndex]} />
      ) : (
        <NoSearchText>No weather forecasts available...</NoSearchText>
      )}
    </Container>
  )
}

export default HomePage