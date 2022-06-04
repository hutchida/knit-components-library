import styled from 'styled-components';

export const Container = styled.section<{
  $bgColor?:string
  $tilt?:number
}>`
  margin-top: 5%;
  position: relative;
  width: 100%;
  ${(p)=> `background-color: ${p.$bgColor};`}
  ${(p)=> `transform: skewY(${p.$tilt}deg);`}
`
export const Skewed = styled.div<{
  $tilt?:number
}>`
  padding: 5rem;
  ${(p)=> `transform: skewY(-${p.$tilt}deg);`}
`