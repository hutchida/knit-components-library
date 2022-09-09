import styled from 'styled-components';

export const Container = styled.section<{
  $spacing?:number
}>`
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 2rem;
  ${(p)=> `padding: ${p.$spacing}rem 0`}
`
export const SlideItem = styled.div<{ 
  $imageUrl?: string,  
  $size?: number,
  $color?: string, 
  $borderColor?: string,
  }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 1rem;
  background-size: cover;
  background-repeat:   no-repeat;
  background-position: center center;  
  ${(p) =>`min-width: ${p.$size || 60}vw;`}
  ${(p) =>`min-height: ${p.$size || 60}vh;`}
  text-align: center;
  ${(p) =>`background-image: url("${p.$imageUrl}");`}
  ${(p) => `background-color: ${p.$color || 'white'};`}
  padding: 3rem 0;
  ${(p) => p.$borderColor && `border: solid ${p.$borderColor} 5px`}
`;

export const Title = styled.h1<{ 
  $color?: string, 
  }>`width: fit-content;
  position: relative;
  margin-bottom: 3rem;
  font-size: 4vw;  
  max-width: 70%;
  padding: 0 2rem 0 2rem;
  ${(p) =>`background-color: ${p.$color || 'white'};`}

`