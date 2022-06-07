import { IAnimate } from "./types";
import { Container } from './styles';
import { useState, useRef, useEffect } from "react";
import React from "react";
/**
 * 
 * @param slideUp - boolean to tell component to invoke the slideUp class
 * @param children - other react elements that this component wraps
 * @param time - time for the animation, NOT YET CONFIGURED, set to 600ms by default in the styles
 * @returns 
 */
export const Animate = (
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  { slideUp, time = '700ms', children }:
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
    <Container
      $isVisible={isVisible}
      // className={(slideUp) ? `slideUp` : `empty`}
      ref={domRef}
    >
      {children}
    </Container>
  );
};
