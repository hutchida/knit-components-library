import React from "react"

import { IPostMeta } from "./types"
import { Wrapper, Container, Title, DateField, Summary } from "./styles"
import { Link } from "../Link"

export const PostsRoll = ({ posts }: { posts: IPostMeta[] }) => {
  return (
    <>
      {posts && posts.length > 0 &&
        <Wrapper>
          {posts.map(({ id, title, summary, date, slug }: IPostMeta) => {
            return (<Container key={id}>
              {title &&
                <>
                  <Link url={slug || '/'}><Title>{title}</Title>
                    {summary && <Summary>{summary}</Summary>}</Link>
                  {date && <DateField>{date}</DateField>}
                </>
              }
            </Container>)
          })
          }
        </Wrapper>}
    </>
  )
}