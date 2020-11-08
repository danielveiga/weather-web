import React, { useContext } from 'react'

import { CitiesContext } from '../../../contexts'
import NearByIcon from '../../../assets/icons/nearby.svg'

import * as Styled from './styles'

const ButtonNearby = ({ handleOnClick }) => {
    const { selectedPin } = useContext(CitiesContext)

    return (
        <Styled.Button disabled={!selectedPin} onClick={handleOnClick}>
            <img alt="list nearby" src={NearByIcon} width="30px" />
        </Styled.Button>
    )
}

export { ButtonNearby }