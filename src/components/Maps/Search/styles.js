import styled, { css } from 'styled-components'

const ButtonSearch = styled.div`
    position: absolute;
    top: 70px;
    right: 10px;
    height: 45px;
    width: 45px;
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
    top: 73px;
    right: 70px;
    width: 200px;
    height: 20px;
    border-radius: 20px;
    border: 0;
    box-shadow: rgba(0, 0, 0, 0.3) 0px 1px 4px -1px;
    outline: 0;
    padding: 10px;
    opacity: 0;
    transition: opacity 0.2s ease-in-out;

    ${({ show }) => show && css`
        opacity: 1;
    `}
`

export {
    ButtonSearch,
    InputSearch
}