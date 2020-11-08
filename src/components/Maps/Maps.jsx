import React, { useContext, useState } from 'react'
import { GoogleMap, LoadScript, Marker, StandaloneSearchBox } from '@react-google-maps/api';

import * as Styled from './styles';
import { CitiesContext } from '../../contexts';
import { Search } from './Search/Search';

const Maps = () => {
    const { handleSetPin } = useContext(CitiesContext)

    let searchBoxRef = null;
    const [center, setCenter] = useState({
        lat: -3.745,
        lng: -38.523
    })

    const [coord, setCoord] = useState({})
    const [searchOpened, setSearchOpened] = useState(false)

    const containerStyle = {
        width: '100vw',
        height: '100vh'
    };

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
    }

    const handleToggleOpened = () => {
        setSearchOpened(!searchOpened)
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
                fullScreenControle={false}
            >
                <StandaloneSearchBox
                    onLoad={
                        ref => searchBoxRef = ref
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