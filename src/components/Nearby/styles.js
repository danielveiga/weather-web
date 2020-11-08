import styled from 'styled-components'

const ListNearbyContainer = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: white;
    position: absolute;
    left: 0;
    top: 0;
    border-radius: 5px;

    @media (max-width: 415px) {
        left: 50%;
        transform: translateX(-50%);
    }
`

const ButtonNearbyContainer = styled.div`
    position: absolute;
    top: 130px;
    right: 10px;
`

export {
    ListNearbyContainer,
    ButtonNearbyContainer
}