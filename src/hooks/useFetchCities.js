import { useContext, useState } from 'react'

import { CitiesContext } from '../contexts'

const useFetchCities = () => {
    const [isLoading, setIsLoading] = useState(false)
    const { selectedPin, handleSetCities } = useContext(CitiesContext)

    const fetchCities = async () => {
        try {
            setIsLoading(true)
            const response = await fetch(
                ` https://api.openweathermap.org/data/2.5/find?units=metric&lat=${selectedPin.lat}&lon=${selectedPin.lng}&cnt=15&APPID=${process.env.REACT_APP_OPEN_WEATHER_API_KEY}`
            )

            let { list } = await response.json()
            handleSetCities(list)
            setIsLoading(false)
        } catch (e) {
            setIsLoading(false)
            console.log(e)
        }
    }

    return { isLoading, fetchCities }
}

export { useFetchCities }