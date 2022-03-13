import React from 'react';
import { Container } from './styles';
import { IItemGridProps } from './types';

export const ItemGrid = ({
    data,
    props
}: IItemGridProps) => {
    console.log('props', props)
    return (
        <Container>{props}</Container>
    )
}