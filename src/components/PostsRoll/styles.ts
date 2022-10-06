import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  gap: 2rem;
  flex-direction: column;
  width: 100%;
  align-items: center;
  padding: 2rem;
`

export const Container = styled.div`
  display: flex;
  gap: 1rem;
  flex-direction: column;
  width: 100%;
  align-items: center;
`

export const Title = styled.h1`
  width: 100%;
  font-size: xx-large;
  @media (min-width: 768px) {
    max-width: 50vw;
  }
`

export const DateField = styled.div`
  font-style: italic;
  color: #34d399;
  width: 100%;
  @media (min-width: 768px) {
    max-width: 50vw;
  }
`

export const Summary = styled.div`
  width: 100%;
  opacity: 30%;
  @media (min-width: 768px) {
    max-width: 50vw;
  }
`