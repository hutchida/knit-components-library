import React from 'react';
import { Container, TileText, Tile, TileTW } from './styles';
import { IItemGridProps, IItem } from './types';

export const ItemGrid = ({
    data,
    props
}: IItemGridProps) => {
    console.log('props', props)

    return (
        <>
            {/* TAILWIND version */}
            <Container>
                {data?.map((item: IItem, index: number) =>
                    <a href={`https://${item?.url}`} target={props?.target || '_blank'}>
                        <TileTW style={{
                            width: `${props.width || 200}px`,
                            height: `${props.height || 200}px`,
                            fontSize: `${props.fontSize || 1.5}rem`,
                            backgroundImage: `url(${item.image})`
                        }}>
                            <TileText style={{
                                backgroundColor: `${props.backgroundColor || 'white'}`,
                            }}>{`${index + 1} - ${item.title}`}
                            </TileText>
                        </TileTW>
                    </a>)
                }
            </Container>





            {/* STYLED COMPONENT version */}
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
        </>
    )
}