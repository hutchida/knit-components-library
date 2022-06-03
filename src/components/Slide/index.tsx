import React from 'react';
import {
    Container, SlideItem, Title, Description
} from './styles';
import { ISlide } from './types';

export const Slide = ({
    title,
    description,
    descriptionSize,
    bgImage,
    bgColor,
    slideWidth,
    slideHeight }: ISlide) => {
    const descriptionSizeMap = {
        "xs": 0.25,
        "sm": 0.5,
        "md": 0.75,
        "lg": 1,
        "xl": 2
    }
    const slideSizeMap = {
        "xs": 400,
        "sm": 500,
        "md": 600,
        "lg": 800,
        "xl": 1200
    }
    return (
        <Container>
            <SlideItem
                $imageUrl={bgImage}
                $color={bgColor}
                $slideWidth={slideSizeMap[slideWidth || "md"]}
                $slideHeight={slideSizeMap[slideHeight || "md"]}>
                {title &&
                    <Title
                        $color={bgColor}
                    >{title}</Title>}
                {description &&
                    <Description
                        $descriptionSize={descriptionSizeMap[descriptionSize || "md"]}
                        $color={bgColor}
                    >{description}</Description>}
            </SlideItem>
        </Container>
    )
}