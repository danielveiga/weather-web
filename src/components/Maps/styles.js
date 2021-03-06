import styled from 'styled-components'

const ButtonSearch = styled.div`
    position: absolute;
    bottom: 90px;
    left: 10px;
    height: 60px;
    width: 60px;
    border-radius: 50%;
    border: 0;
    border-bottom-right-radius: 2px;
    border-top-right-radius: 2px;
    box-shadow: rgba(0, 0, 0, 0.3) 0px 1px 4px -1px;
    color: rgb(86, 86, 86);
    background-color: white;
    border-radius: 50%;
    cursor: pointer;
    outline: 0;
    display: flex;
    justify-content: center;
`

const InputSearch = styled.input`
    position: absolute;
    bottom: 90px;
    left: 80px;
`

export {
    ButtonSearch,
    InputSearch
}