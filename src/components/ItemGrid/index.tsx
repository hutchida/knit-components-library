import React from 'react';
import { Container } from './styles';
export const ItemGrid = ({
    props
}: any) => {
    console.log('props', props)
    return (
        <Container>{props}</Container>
    )
}