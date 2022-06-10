import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1200px;
  margin: 6rem auto 4rem;
`;

export const Accordion = styled.ul`
  list-style: none;
`;

export const Highlights = styled.div<{$isActive?:Boolean}>`
  list-style: none;
  display: flex;
  flex-flow: column;  
  font-size: 4vw;
  align-items: center;
  justify-content: space-between;
  overflow-y: hidden;
  height: 0;
  ${(p) => 
    p.$isActive ? `
    height: auto;
    padding: 2vw 0;` : `
    border-`
  }
`;

export const Highlight = styled.div<{$isActive?:Boolean}>`
  background: #fafafa;
  border-radius: 5px;
  font-family: Menlo, Monaco, Lucida Console, Liberation Mono, DejaVu Sans Mono,
  Bitstream Vera Sans Mono, Courier New, monospace;
  overflow: hidden;
  padding: 0.75rem;
  margin: 2vw 5%;
  text-align: justify;
  `;

export const ItemContainer = styled.li<{$isActive?:Boolean}>`
  hr {
    border-bottom: dotted;
  }
  max-width: 1200px;
  list-style: none;
  border-radius: 1rem;
  ${(p) => 
    p.$isActive ? `
    border: lightblue solid 5px;
    ` : ``}

  
`;

export const ItemControl = styled.span`
  font-size: 20px;
`;

export const ItemTitle = styled.button<{$isActive?:Boolean}>`
  z-index: -1;
  position: relative;
  color: #363538;
  text-align: left;
  font-weight: 200;
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  padding: 18px 8px;
  cursor: pointer;
  border: none;
  background-color: #e8e8e8;
  ${(p) => 
    p.$isActive ? `
    background-color: #e8e8e8;
    ` : ``}
`;

export const EventInfo = styled.div`
  display: flex;
  justify-content: space-between;    
  align-items: end;
  padding: 2vw 5% 2vw 0;
  font-size: 3vw;
  width: 95%;
`;

export const FromTo = styled.div<{$isActive?:Boolean}>`
  text-transform: uppercase;
  ${(p) => 
    p.$isActive ? `
    border-bottom: dotted;
    ` : ``}
`;
export const Company = styled.div`
  span {
    font-size: 1vw;
  }
`;
export const Role = styled.div`
  font-size: 2vw;
`;
export const Where = styled.div`
  font-size: 2vw;
`;

export const Divider = styled.hr`
`;