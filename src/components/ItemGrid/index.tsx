import React from 'react';
import { Container, TileText, TileTW } from './styles';
import { IItemGridProps, IItem } from './types';

export const ItemGrid = ({
    data,
    props,
}: IItemGridProps) => {
    return (<Container>
        {data?.map((item: IItem, index: number) =>
            <a href={`https://${item?.url}`} target={props?.target || '_blank'}>
                <TileTW style={{
                    width: `${props.width || 200}px`,
                    height: `${props.height || 200}px`,
                    fontSize: `${props.fontSize || 1.5}rem`,
                    backgroundImage: `url(${item.image})`
                }}
                >
                    <TileText style={{
                        backgroundColor: `${props.backgroundColor || 'white'}`,
                    }}
                    >{`${index + 1} - ${item.title}`}
                    </TileText>
                </TileTW>
            </a>)
        }
    </Container>
    );
};