import tw from 'tailwind-styled-components';
import styled from 'styled-components';

export const Container = tw.div`
    m-auto
    w-4/5
    h-screen
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

    // border: red solid 1px;
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