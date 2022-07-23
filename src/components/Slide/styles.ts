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
  $descriptionSize?: number,  
  $slideWidth?: number, 
  $slideHeight?: number, 
  $color?: string, 
  }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 1rem;
  background-size: cover;
  ${(p) =>`width: ${p.$slideWidth || 800}px;`}
  ${(p) =>`height: ${p.$slideHeight || 800}px;`}
  text-align: center;
    ${(p) =>`background-image: url("${p.$imageUrl}");`}
    ${(p) =>`background-color: ${p.$color || 'white'};`}
`;

export const Title = styled.h1<{ 
  $color?: string, 
  }>`width: fit-content;
  position: relative;
  top: 10%;
  font-size: 5rem;  
  ${(p) =>`background-color: ${p.$color || 'white'};`}

`

export const Description = styled.p<{ 
  $descriptionSize?: number,  
  $color?: string, 
  }>`
  ${(p) =>`font-size: ${p.$descriptionSize || 1.5}rem;`}
  ${(p) =>`background-color: ${p.$color || 'white'};`}
  width: fit-content;
  position: relative;
  top: 50%;
  transform: translateY(-50%);
`