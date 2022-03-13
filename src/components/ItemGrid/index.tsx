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
                    <Tile
                        $width={props.width || 200}
                        $height={props.height || 200}
                        $imageUrl={item.image}>{`${index + 1} - ${item.title}`}</Tile>)
                }
            </Container>
        </>
    )
}