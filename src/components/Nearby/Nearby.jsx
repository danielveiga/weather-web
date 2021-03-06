import React, { useState } from 'react'

import * as Styled from './styles'
import { ButtonNearby } from './ButtonNearby'
import { ListNearby } from './ListNearby'

const Nearby = () => {
    const [opened, setOpened] = useState(false)

    const handleToggleOpened = () => {
        setOpened(!opened)
    }

    return (
        <>
            {opened ?
                <Styled.ListNearbyContainer>
                    <ListNearby handleOnClose={handleToggleOpened} />
                </Styled.ListNearbyContainer> :
                <Styled.ButtonNearbyContainer>
                    <ButtonNearby handleOnClick={handleToggleOpened} />
                </Styled.ButtonNearbyContainer>
            }
        </>
    )
}

export { Nearby }