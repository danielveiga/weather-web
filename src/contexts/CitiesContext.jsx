import React, { createContext, useState } from 'react'

const InitialState = {
    selectedPin: null,
    cities: [],
    isLoading: false,
    handleSetPin: () => { },
    handleSetCities: () => { }
}

const Context = createContext(InitialState)
const { Provider, Consumer: CitiesConsumer } = Context

const CitiesProvider = ({ children }) => {
    const [state, setState] = useState(InitialState)

    const handleSetPin = async (pin) => {
        setState({ ...state, selectedPin: pin })
    }

    const handleSetCities = (cities) => {
        setState({ ...state, cities: cities})
    }

    return <Provider value={{ ...state, handleSetPin, handleSetCities }}>{children}</Provider>
}

export { Context as CitiesContext, CitiesProvider, CitiesConsumer }
