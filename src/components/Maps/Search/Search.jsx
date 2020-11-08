import React, { useState } from 'react'

import * as Styled from './styles'
import SearchIcon from '../../../assets/icons/search.svg'
import CloseIcon from '../../../assets/icons/close.svg'

const Search = () => {
    const [opened, setOpened] = useState(false)

    const handleToggleOpened = () => {
        setOpened(!opened)
    }

    return (
        <>
            <Styled.ButtonSearch onClick={handleToggleOpened}>
                <img alt='open search input' src={opened ? CloseIcon : SearchIcon} width={opened ? '20px' : '25px'} />
            </Styled.ButtonSearch>
            <Styled.InputSearch show={opened} type="text" placeholder="fdsfsd" />
        </>
    )
}

export { Search }