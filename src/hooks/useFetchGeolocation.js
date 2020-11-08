import { useEffect, useState } from 'react'

const useFetchGeolocation = () => {
    const [coordinates, setCoordinates] = useState()

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(position => {
            setCoordinates({
                lat: position.coords.latitude,
                lng: position.coords.longitude
            })
        })
    }, [])

    return { coordinates }
}

export { useFetchGeolocation }