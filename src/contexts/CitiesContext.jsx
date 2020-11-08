import React, { createContext, useState } from 'react'

const InitialState = {
    selectedPin: null,
    cities: [],
    isLoading: false,
    handleSetPin: () => { }
}

const Context = createContext(InitialState)
const { Provider, Consumer: CitiesConsumer } = Context

const CitiesProvider = ({ children }) => {
    const [state, setState] = useState(InitialState)

    const handleSetPin = async (pin) => {
        setState({ ...state, selectedPin: pin })
    }

    return <Provider value={{ ...state, handleSetPin }}>{children}</Provider>
}

export { Context as CitiesContext, CitiesProvider, CitiesConsumer }
