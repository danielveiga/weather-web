import React, { useState } from 'react'
import { GoogleMap, LoadScript, Marker, StandaloneSearchBox } from '@react-google-maps/api';

import * as Styled from './styles';

const Maps = () => {
    let searchBoxRef = null;
    const [center, setCenter] = useState({
        lat: -3.745,
        lng: -38.523
    })

    const [coord, setCoord] = useState({
        lat: -3.745,
        lng: -38.523
    })

    const containerStyle = {
        width: '100vw',
        height: '100vh'
    };

    const handleOnClickMap = ({ latLng: { lat, lng } }) => {
        setCoord({
            lat: lat(),
            lng: lng()
        })
    }

    const handlePlacesChange = () => {
        const { lat, lng } = searchBoxRef.getPlaces()[0].geometry.location;
        setCenter({ lat: lat(), lng: lng() })
    }

    return (
        <LoadScript
            googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}
            libraries={['places']}
        >
            <GoogleMap
                mapContainerStyle={containerStyle}
                center={center}
                zoom={10}
                onClick={handleOnClickMap}
            >
                <StandaloneSearchBox
                    onLoad={
                        ref => searchBoxRef = ref
                    }
                    onPlacesChanged={handlePlacesChange}
                >
                    <Styled.SearchInput
                        type='text'
                        placeholder='Search on Google Maps'
                    />
                </StandaloneSearchBox>
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