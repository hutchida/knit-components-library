import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
`

export const Container = styled.div<{
  $isVisible?: boolean,
  $spinFromLeft?: boolean,
  $spinFromRight?: boolean
}>`
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

${(p) => p.$isVisible && p.$spinFromRight && `
  animation:spinFromRight 5s ease-out 0s 1;
  width: fit-content;
  transform: translateX(-100%);
`}

${(p) => p.$isVisible && p.$spinFromLeft && `
  animation:spinFromLeft 5s ease-out 0s 1;
  width: fit-content;
  transform: translateX(3000%);
`}

@keyframes spinFromRight {
  0% {
    transform: translateX(2000%) translateY(40%) rotate(0deg);
  }
  100% {
    transform: translateX(-100%) translateY(0%) rotate(360deg);
  }
}
@keyframes spinFromLeft {
  0% {
    transform: translateX(100%) translateY(40%) rotate(360deg);
  }
  100% {
    transform: translateX(3000%) translateY(0%) rotate(0deg);
  }
}
`