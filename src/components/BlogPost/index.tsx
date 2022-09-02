import React from "react"

import { IBlogPost } from "./types"
import { Container, Subject, RichText, DateField, Info } from "./styles"

export const BlogPost = ({ subject, text, date, info }: IBlogPost) => {
  return (
    <>
      {text &&
        <Container>
          {subject && <Subject>{subject}</Subject>}
          {date && <DateField>{date}</DateField>}
          <RichText dangerouslySetInnerHTML={{ __html: text }} />
          {info && <Info>{info}</Info>}
        </Container>}
    </>
  )
}