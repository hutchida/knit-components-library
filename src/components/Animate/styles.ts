import styled from 'styled-components';

export const Wrapper = styled.div<{
  $addSpace?: boolean
}>`
  width: 100%;
  ${(p)=> p.$addSpace && `margin: 10rem 0 10rem`}
  ;
`

export const Container = styled.div<{
  $enterFrom?: string,
  $isVisible?: boolean,
  $spinFromLeft?: boolean,
  $spinFromRight?: boolean
}>`
${(p)=> p.$isVisible && p.$enterFrom === 'top' && `animation:enterFromTop 2000ms ease;`}
${(p)=> p.$isVisible && p.$enterFrom === 'left' && `animation:enterFromLeft 2000ms ease;`}
${(p)=> (p.$isVisible && p.$enterFrom === 'bottom') && `animation:enterFromBottom 2000ms ease;`}
${(p)=> p.$isVisible && p.$enterFrom === 'right' && `animation:enterFromRight 2000ms ease;`}

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

@keyframes enterFromTop  {
  0% {
    transform: translateY(-100%);
    scroll-snap-align: none;
  }
  30% {
    scroll-snap-align: none;
  }
  100% {
    transform: translateY(0%);
    scroll-snap-align: center;
  }
}

@keyframes enterFromRight  {
  0% {
    transform: translateX(100%);
    scroll-snap-align: none;
  }
  30% {
    scroll-snap-align: none;
  }
  100% {
    transform: translateX(0%);
    scroll-snap-align: center;
  }
}

@keyframes enterFromBottom  {
  0% {
    transform: translateY(100%);
    scroll-snap-align: none;
  }
  30% {
    scroll-snap-align: none;
  }
  100% {
    transform: translateY(0%);
    scroll-snap-align: center;
  }
}

@keyframes enterFromLeft  {
  0% {
    margin-right: 100vh;
    transform: translateX(-100%);
  }
  30% {
    scroll-snap-align: none;
  }
  100% {
    transform: translateX(0%);
    scroll-snap-align: center;
  }
}
`