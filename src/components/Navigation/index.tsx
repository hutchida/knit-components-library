import React from "react"
import { ILink } from "../Link"
import { INavigation } from './types'
import { Container, Title, Logo, Links, LinkContainer } from "./styles"
import { Link } from "../Link"
/**
 * Navigation component that takes a title, logo, and an array of links. If the logo is present, it 
 * will show instead of the title. Links will appear on the right hand side on desktop
 */
export const Navigation = ({ title, logo, links }: INavigation) => {

  return (
    <Container>
      <a href='/'>
        {logo ? <Logo>{logo}</Logo> : <Title>{title}</Title>}
      </a>
      <Links>
        {links && links.length > 0 &&
          links.map((link: ILink, index: number) => (
            <LinkContainer>
              <Link key={index} {...link} />
            </LinkContainer>
          )
          )
        }
      </Links>
    </Container>
  )
}

export default Navigation