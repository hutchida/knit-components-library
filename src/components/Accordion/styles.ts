import styled from 'styled-components';

export const Container = styled.div`
  margin: 6rem auto 4rem;
`;

export const Accordion = styled.ul`
  list-style: none;
`;

export const ItemContainer = styled.li`
  list-style: none;
`;

export const ItemControl = styled.span`
  font-size: 20px;
`;

export const ItemBodyContainer = styled.li`
  list-style: none;
`;

export const ItemTitle = styled.button<{$isActive?:Boolean}>`
  font-size: 16px;
  color: #fff;
  text-align: left;
  font-weight: 700;
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  padding: 18px 8px;
  cursor: pointer;
  border: none;
  
  background-color: #008593;
  ${(p) => 
    p.$isActive ? `
    background-color: #105057;` : ``
  }
`;

export const ItemBody = styled.div<{$isActive?:Boolean}>`
  background-color: #f7f7f7;
  height: 0;
  overflow: hidden;
  ${(p) => 
    p.$isActive ? `
    height: auto;` : ``
  }
  `;