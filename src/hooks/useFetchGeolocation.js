import { useEffect, useState } from 'react'

const useFetchGeolocation = () => {
    const [currentCoordinates, setCurrentCoordinates] = useState()

    const getCoordinates = async () => {
        navigator.geolocation.getCurrentPosition(position => {
            setCurrentCoordinates({
                lat: position.coords.latitude,
                lng: position.coords.longitude
            })
        })
    }

    return { currentCoordinates, getCoordinates }
}

export { useFetchGeolocation }