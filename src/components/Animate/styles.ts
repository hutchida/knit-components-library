import styled from 'styled-components';

export const Container = styled.div<{$isVisible?:boolean}>`
  ${(p)=> p.$isVisible && `animation:slideUp 600ms linear;`}
  @keyframes slideUp  {
    0% {
      margin-top: 100px;
      scroll-snap-align: none;
    }
    30% {
      scroll-snap-align: none;
    }
    100% {
      margin-top: 0px;
      scroll-snap-align: center;
    }
  }
`