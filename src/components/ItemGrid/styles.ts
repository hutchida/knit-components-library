import tw from 'tailwind-styled-components';
import styled from 'styled-components';

export const Container = tw.div`
    m-auto
    w-4/5
    h-screen
    border
    flex
`
export const Tile = styled.div<{ $imageUrl?: string }>`
border
w-full
h-1/3
text-center
bg-gradient-to-r from-cyan-500 to-blue-500
${(p: { $imageUrl: string; }) =>`bg-[url('${p.$imageUrl}')]`}
`