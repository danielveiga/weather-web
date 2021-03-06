import React, { useContext, useEffect, useState } from 'react'

import * as Styled from './styles'

import CloseIcon from '../../../assets/icons/close.svg'
import { useFetchCities } from '../../../hooks/useFetchCities'
import { CitiesContext } from '../../../contexts'

import SunnyIcon from '../../../assets/icons/sunny.svg'
import FewCloudsIcon from '../../../assets/icons/few-clouds.svg'
import ScatteredCloudsIcon from '../../../assets/icons/scattered-clouds.svg'
import BrokenCloudsIcon from '../../../assets/icons/broken-clouds.svg'
import ShowerRainIcon from '../../../assets/icons/shower-rain.svg'
import ThunderstormIcon from '../../../assets/icons/thunderstorm.svg'
import SnowIcon from '../../../assets/icons/snow.svg'
import MistIcon from '../../../assets/icons/mist.svg'
import SearchLocation from '../../../assets/icons/search-location.svg'
import { ListNearbyLoader } from './ListNearbyLoader'

const ListNearby = ({ handleOnClose }) => {
    const { cities } = useContext(CitiesContext)
    const { fetchCities, isLoading } = useFetchCities()

    const [expandedItemIndex, setExpandedItemIndex] = useState()

    const weatherIconsDictionary = {
        '01d': SunnyIcon,
        '02d': FewCloudsIcon,
        '03d': ScatteredCloudsIcon,
        '04d': BrokenCloudsIcon,
        '09d': ShowerRainIcon,
        '10d': ShowerRainIcon,
        '11d': ThunderstormIcon,
        '13d': SnowIcon,
        '50d': MistIcon,
        '01n': SunnyIcon,
        '02n': FewCloudsIcon,
        '03n': ScatteredCloudsIcon,
        '04n': BrokenCloudsIcon,
        '09n': ShowerRainIcon,
        '10n': ShowerRainIcon,
        '11n': ThunderstormIcon,
        '13n': SnowIcon,
        '50n': MistIcon
    }

    useEffect(() => {
        fetchCities()
    }, [])

    const handleToggleExpandedItemIndex = (index) => {
        if (index === expandedItemIndex) {
            setExpandedItemIndex(null)
        } else {
            setExpandedItemIndex(index)
        }
    }

    if (!isLoading && (!cities || !cities.length)) {
        return (
            <Styled.ListNearbyContainer>
                <Styled.CloseButton onClick={handleOnClose}>
                    <img alt='close nearby list' src={CloseIcon} width="20px" />
                </Styled.CloseButton>
                <Styled.Title>
                    Nearby Cities
                </Styled.Title>
                <Styled.EmptyState>
                    <img src={SearchLocation} width="60px" />
                    Ops, there is no cities nearby<br />this location
                </Styled.EmptyState>
            </Styled.ListNearbyContainer>
        )
    }

    return (
        <Styled.ListNearbyContainer>
            <Styled.CloseButton onClick={handleOnClose}>
                <img alt='close nearby list' src={CloseIcon} width="20px" />
            </Styled.CloseButton>
            <Styled.Title>
                Nearby Cities
            </Styled.Title>
            {
                isLoading ?
                    <Styled.LoadingContainer><ListNearbyLoader /></Styled.LoadingContainer> :
                    <Styled.ListNearby>
                        {
                            cities.map((city, index) =>
                                <Styled.ListNearbyItem
                                    key={index}
                                    expanded={expandedItemIndex === index}
                                    onClick={() => handleToggleExpandedItemIndex(index)}
                                >
                                    <Styled.CityHeader>
                                        <Styled.CityName>{city.name}</Styled.CityName>
                                        <Styled.TempContainer>
                                            <Styled.Temp>{`${parseInt(city.main.temp)}°C`}</Styled.Temp>
                                            <img
                                                src={weatherIconsDictionary[city.weather[0].icon]}
                                                width="30px"
                                                alt="weather icon"
                                            />
                                        </Styled.TempContainer>
                                    </Styled.CityHeader>
                                    <Styled.CityBody>
                                        <div>
                                            <Styled.Temp min={1}>{<><strong>Min.</strong>{parseInt(city.main.temp_min)}°C</>}</Styled.Temp>
                                            <Styled.Temp max={1}>{<><strong>Max.</strong> {parseInt(city.main.temp_max)}°C</>}</Styled.Temp>
                                        </div>
                                        <div>
                                            <Styled.Temp>{<><strong>Feels Like</strong> {parseInt(city.main.feels_like)}°C</>}</Styled.Temp>
                                            <Styled.Temp>{<><strong>Humidity</strong> {parseInt(city.main.humidity)}%</>}</Styled.Temp>
                                        </div>
                                        <div>
                                            <Styled.Temp>{<><strong>Wind Speed</strong> {parseInt(city.wind.speed)} km/h</>}</Styled.Temp>
                                        </div>
                                    </Styled.CityBody>
                                </Styled.ListNearbyItem>)
                        }
                    </Styled.ListNearby>
            }
        </Styled.ListNearbyContainer>
    )
}

export { ListNearby }