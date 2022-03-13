import React from 'react';
import { Container, Tile } from './styles';
import { IItemGridProps, IItem } from './types';

export const ItemGrid = ({
    data,
    props
}: IItemGridProps) => {
    console.log('props', props)
    return (
        <>
            <Container>
                {data?.map((item: IItem, index: number) =>
                    <Tile $imageUrl={item.image}>{item.title}</Tile>)
                }
            </Container>
        </>
    )
}