import React from 'react';

export const ItemGrid = ({
    props
}: any) => {
    console.log('props', props)
    return (
        <Container>{props}</Container>
    )
}