import styled from 'styled-components'

export const Container = styled.div<{
  $alignment: string
}>`  
  padding: 1rem 0.75rem;
  display: flex;
  justify-content: center;
  @media (min-width: 768px) {
    ${(p) => `justify-content: ${p.$alignment};`}
  }
`

export const Box = styled.div<{
  $textColor: string,
  $borderColor: string,
  $opacity: number
}>`
  ${(p) => `opacity: ${p.$opacity || 100}%;`}
  ${(p) => `border: 3px solid ${p.$borderColor};`}
  ${(p)=> `color: ${p.$textColor};`}
  width: fit-content;
  height: 100%;
  display: flex;
  align-items: center;
  border-radius: 2% 6% 5% 4% / 1% 1% 2% 4%;
  text-transform: uppercase;
  letter-spacing: 0.3ch;
  background: #ffffff;
  position: relative;
  font-size: 1.5rem;
  padding: 2rem 2rem;
  max-width: 90vw;
  @media (min-width: 768px) {
    font-size: 2.5rem;
    padding: 4rem 4rem;
    max-width: 60vw;
  }
  
  &::before {
    content: '';
    ${(p) => `border: 2px solid ${p.$borderColor};`}
    opacity: 70%;
    display: block;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate3d(-50%, -50%, 0) scale(1.015) rotate(0.5deg);
    border-radius: 1% 1% 2% 4% / 2% 6% 5% 4%;
  }
`