import styled from 'styled-components'

const Button = styled.button`
    height: 45px;
    width: 45px;
    border: 0;
    border-bottom-right-radius: 2px;
    border-top-right-radius: 2px;
    box-shadow: rgba(0, 0, 0, 0.3) 0px 1px 4px -1px;
    color: #000;
    background-color: white;
    border-radius: 50%;
    cursor: pointer;
    outline: 0;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    font-weight: 800;
    position: absolute;
    right: 10px;
    top: 190px;
`

export { Button }