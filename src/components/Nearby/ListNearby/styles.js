import styled, { css } from 'styled-components'

const ListNearbyContainer = styled.div`
    position: relative;
    background-color: #87CEEB;
    width: 100vw;
    height: 100vh;
    overflow: hidden;
`

const Title = styled.h1`
    position: absolute;
    left: 20px;
    top: 10px;
`

const CityHeader = styled.div`
    display: flex;
    justify-content: space-between;
`

const CityName = styled.h3`
    font-weight: 500;
`

const Temp = styled.h4`
    font-weight: 300;
    margin: 10px 0px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    white-space: nowrap;
    
    ${({ min }) => min && css`
        color: #4682B4;
    `}
    
    ${({ max }) => max && css`
        color: #CD5C5C;
    `}
`

const CityBody = styled.div`
    display: flex;

    @media (max-width: 415px) {
            justify-content: space-between;
        }

    >div {
        margin-right: 50px;

        @media (max-width: 415px) {
            margin-right: 0;
        }
    }
`

const CloseButton = styled.button`
    position: absolute;
    top: 40px;
    right: 20px;
    background-color: transparent;
    border: 0;
    outline: 0;
    cursor: pointer;
`

const ListNearby = styled.div`
    margin: 20px;
    margin-top: 100px;
    overflow: scroll;
    max-height: calc(100% - 100px);
`;

const ListNearbyItem = styled.div`
    background-color: rgba(255,255,255,0.5);
    margin-bottom: 10px;
    padding: 10px 20px;
    border-radius: 10px;
    height: 60px;
    transition: height 0.5s ease-in-out;
    overflow: hidden;

    &:hover {
        background-color: rgba(255,255,255,0.8);
    }

    ${({ expanded }) => expanded && css`
        height: 200px;
    `}
`

const TempContainer = styled.div`
    display: flex;

    >img {
        margin-left: 10px;
    }
`

export {
    ListNearbyContainer,
    CloseButton,
    ListNearby,
    ListNearbyItem,
    Title,
    CityHeader,
    CityName,
    CityBody,
    TempContainer,
    Temp
}