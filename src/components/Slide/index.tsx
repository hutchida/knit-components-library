import React from 'react';
import {
    Container, SlideItem, Title, Description
} from './styles';
import { ISlide } from './types';
import { spacingMap, slideSizeMap, descriptionSizeMap } from './maps';
export const Slide = ({
    title,
    description,
    descriptionSize = "md",
    bgImage,
    bgColor,
    slideWidth = "md",
    slideHeight = "md",
    spacing = "xl"
}: ISlide) => {
    return (
        <Container $spacing={spacingMap[spacing]}>
            <SlideItem
                $imageUrl={bgImage?.filename}
                $color={bgColor}
                $slideWidth={slideSizeMap[slideWidth]}
                $slideHeight={slideSizeMap[slideHeight]}>
                {title &&
                    <Title
                        $color={bgColor}
                    >{title}</Title>}
                {description &&
                    <Description
                        $descriptionSize={descriptionSizeMap[descriptionSize]}
                        $color={bgColor}
                    >{description}</Description>}
            </SlideItem>
        </Container>
    )
}