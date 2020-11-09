import React, { useContext, useEffect } from 'react'

import LocateIcon from '../../assets/icons/locate.svg'
import { CitiesContext } from '../../contexts'
import { useFetchGeolocation } from '../../hooks'

import * as Styled from './styles'

const MyLocation = () => {
    const { handleSetPin } = useContext(CitiesContext)
    const { currentCoordinates, getCoordinates } = useFetchGeolocation()

    const handleOnClick = () => {
        getCoordinates()
    }

    useEffect(() => {
        getCoordinates()
    }, [])

    useEffect(() => {
        if (currentCoordinates) {
            handleSetPin(currentCoordinates)
        }
    }, [currentCoordinates])

    return (
        <Styled.Button onClick={handleOnClick}>
            <img alt="locate" src={LocateIcon} width="30px" />
        </Styled.Button>
    )
}

export { MyLocation }
