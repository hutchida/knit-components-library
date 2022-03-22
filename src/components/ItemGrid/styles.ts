import tw from 'tailwind-styled-components';
import styled from 'styled-components';

export const Container = tw.div`
    py-[30px]
    m-auto
    w-4/5
    h-full
    border
    flex
    flex-wrap
    justify-center
`

export const Tile = styled.div<{ 
    $imageUrl?: string,  
    $width?: number,  
    $height?: number,  
    $fontSize?: number, 
    $backgroundColor?: string, 
    }>`
    text-align: center;
    ${(p) =>`width: ${p.$width}px;`}
    ${(p) =>`height: ${p.$height}px;`}
    ${(p) =>`background-image: url("${p.$imageUrl}");`}
    ${(p) =>`font-size: ${p.$fontSize || 1.5}rem;`}
    p { 
        ${(p) =>`background-color: ${p.$backgroundColor || 'white'};`}
        margin: auto;
        width: fit-content;
        position: relative;
        top: 50%;
        transform: translateY(-50%);
     }
`

export const TileTW = tw.div`
`
export const TileText = tw.p`
    text-center
    m-auto
    w-full
    relative
    top-1/2
    transform
    -translate-y-1/2
`