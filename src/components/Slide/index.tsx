import React from 'react';
import {
    Container, SlideItem, Title
} from './styles';
import { ISlide } from './types';
import { spacingMap, slideSizeMapViewPort } from './maps';
import { RichText } from '../RichText';
export const Slide = ({
    title,
    html,
    bgImage,
    bgColor,
    size = "xl",
    spacing = "md",
    borderColor
}: ISlide) => {
    return (
        <Container $spacing={spacingMap[spacing]}>
            <SlideItem
                $imageUrl={bgImage?.filename}
                $color={bgColor}
                $size={slideSizeMapViewPort[size]}
                $borderColor={borderColor}
            >
                {title &&
                    <Title
                        $color={bgColor}
                    >{title}</Title>}
                {html && <RichText text={html} />}
            </SlideItem>
        </Container>
    )
}