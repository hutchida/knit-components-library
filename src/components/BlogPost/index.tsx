import React from "react"

import { IBlogPost } from "./types"
import { Container, Subject, DateField, Info } from "./styles"
import { RichText } from "../RichText"

export const BlogPost = ({ subject, text, date, info }: IBlogPost) => {
  return (
    <>
      {text &&
        <Container>
          {subject && <Subject>{subject}</Subject>}
          {date && <DateField>{date}</DateField>}
          <RichText text={text} />
          {info && <Info>{info}</Info>}
        </Container>}
    </>
  )
}