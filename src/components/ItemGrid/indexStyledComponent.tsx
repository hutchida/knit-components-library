import React from 'react';
import { Container, Tile } from './styles';
import { IItemGridProps, IItem } from './types';

{/* STYLED COMPONENT version */ }
export const ItemGrid = ({
    data,
    props
}: IItemGridProps) => {
    return (
        <Container>
            {data?.map((item: IItem, index: number) =>
                <a href={`https://${item?.url}`} target={props?.target || '_blank'}>
                    <Tile
                        $width={props.width || 200}
                        $height={props.height || 200}
                        $imageUrl={item.image}><p>{`${index + 1} - ${item.title}`}</p></Tile>
                </a>)
            }
        </Container>
    )
}