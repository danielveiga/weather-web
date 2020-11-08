import styled from 'styled-components'

const ListNearbyContainer = styled.div`
    position: relative;
`

const CloseButton = styled.button`
    position: absolute;
    top: 20px;
    right: 20px;
    background-color: transparent;
    border: 0;
    outline: 0;
    cursor: pointer;
`

export {
    ListNearbyContainer,
    CloseButton
}