import { useState } from 'react'

const useFetchCities = () => {
    const [cities, setCities] = useState([])

    // const fetchCities = async (lat, lng) => {
    //     const response = await fetch(
    //         ` https://api.openweathermap.org/data/2.5/find?units=metric&lat=${lat}&lon=${lng}&cnt=15&APPID=${process.env.REACT_APP_OPEN_WEATHER_API_KEY}`
    //     )
    // }

    return { cities }
}

export { useFetchCities }