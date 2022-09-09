import { IAnimate } from "./types";
import { Wrapper, Container } from './styles';
import { useState, useRef, useEffect } from "react";
import React from "react";
/**
 * 
 * @param enterFrom - enum to tell component to invoke the relevant slideIn class
 * @param spinFromLeft - boolean to tell component to invoke the spinFromLeft class
 * @param spinFromRight - boolean to tell component to invoke the spinFromLeft class
 * @param children - other react elements that this component wraps
 * @param time - time for the animation, NOT YET CONFIGURED, set to 600ms by default in the styles
 * @returns 
 */
export const Animate = (
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  { slideUp, enterFrom, addSpace, spinFromRight, spinFromLeft, time = '700ms', children }:
    IAnimate) => {
  const [isVisible, setVisible] = useState(false);
  const domRef = useRef() as React.MutableRefObject<HTMLInputElement>;
  useEffect(() => {
    if (!isVisible) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          return setVisible(entry.isIntersecting)
        });
      });
      const currElement = domRef.current!;
      observer.observe(currElement);
      return () => observer.unobserve(currElement);
    }
    return;
  }, [isVisible]);
  return (
    <Wrapper $addSpace={addSpace}>
      <Container
        $isVisible={isVisible}
        $spinFromLeft={spinFromLeft}
        $spinFromRight={spinFromRight}
        $enterFrom={enterFrom}
        ref={domRef}
      >
        {children}
      </Container>
    </Wrapper>
  );
};
