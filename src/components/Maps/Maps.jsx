import React, { useContext, useEffect, useState } from 'react'
import { GoogleMap, LoadScript, Marker, StandaloneSearchBox } from '@react-google-maps/api';

import { CitiesContext } from '../../contexts';
import { Search } from './Search/Search';

const libraries = ['places']

const Maps = () => {
    const { selectedPin, handleSetPin } = useContext(CitiesContext)

    const [searchBoxRef, setSearchBoxRef] = useState();
    const [center, setCenter] = useState({
        lat: -3.745,
        lng: -38.523
    })

    const [coord, setCoord] = useState({})

    const containerStyle = {
        width: '100vw',
        height: '100vh'
    };

    useEffect(() => {
        if (selectedPin) {
            setCenter(selectedPin)
            setCoord(selectedPin)
        }
    }, [selectedPin])

    const handleOnClickMap = ({ latLng: { lat, lng } }) => {
        const coordinates = {
            lat: lat(),
            lng: lng()
        }
        setCoord(coordinates)
        handleSetPin(coordinates)
    }

    const handlePlacesChange = () => {
        const { lat, lng } = searchBoxRef.getPlaces()[0].geometry.location;
        setCenter({ lat: lat(), lng: lng() })
        handleSetPin({ lat: lat(), lng: lng() })
    }

    return (
        <LoadScript
            googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}
            libraries={libraries}
        >
            <GoogleMap
                mapContainerStyle={containerStyle}
                center={center}
                zoom={10}
                onClick={handleOnClickMap}
                fullScreenControle={false}
            >
                <StandaloneSearchBox
                    onLoad={
                        ref => setSearchBoxRef(ref)
                    }
                    onPlacesChanged={handlePlacesChange}
                >
                    <Search />
                </StandaloneSearchBox> :
                {coord.lat && coord.lng && (
                    <Marker position={{
                        lat: coord.lat,
                        lng: coord.lng
                    }} />
                )}
            </GoogleMap>
        </LoadScript>
    )
}

export { Maps }