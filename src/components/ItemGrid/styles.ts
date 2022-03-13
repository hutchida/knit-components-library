import tw from 'tailwind-styled-components';
import styled from 'styled-components';

export const Container = tw.div`
    m-auto
    w-4/5
    h-screen
    border
    flex
`
export const Tile = styled.div<{ $imageUrl?: string,  $width?: number,  $height?: number }>`
border: red solid 1px;
text-align: center;
${(p) =>`width: ${p.$width}px;`}
${(p) =>`height: ${p.$height}px;`}
${(p) =>`background-image: url("${p.$imageUrl}");`}
`