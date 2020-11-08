import styled from 'styled-components'

const SearchInput = styled.input`
    width: 300px;
    height: 20px;
    background-color: white;
    position: absolute;
    border-bottom-right-radius: 2px;
    border-top-right-radius: 2px;
    top: 70px;
    left: 10px;
    border: 0;
    padding: 10px;
    font-size: 18px;
    box-shadow: rgba(0, 0, 0, 0.3) 0px 1px 4px -1px;
    color: rgb(86, 86, 86);
    font-family: Roboto, Arial, sans-serif;

    &:focus {
        outline: 0;
    }

    @media (max-width: 415px) {
        left: 50%;
        transform: translateX(-50%);
    }
`

export { SearchInput }