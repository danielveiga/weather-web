import React from 'react'

import * as Styled from './styles'

import CloseIcon from '../../../assets/icons/close.svg'

const ListNearby = ({ handleOnClose }) => {
    return (
        <Styled.ListNearbyContainer>
            <Styled.CloseButton onClick={handleOnClose}>
                <img src={CloseIcon} width="20px" />
            </Styled.CloseButton>
        </Styled.ListNearbyContainer>
    )
}

export { ListNearby }