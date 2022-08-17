import React, { useRef, useState } from "react"
import { ILink } from "../Link"
import { INavigation } from './types'
import {
  NavigationContainer,
  DesktopContainer,
  MobileContainer,
  ToggleMenu,
  MobileNavPanel,
  Title,
  Logo,
  Links,
  LinkContainer
} from "./styles"
import { Link } from "../Link"
import { Hamburger } from "./Hamburger"
import { Cross } from "./Cross"
/**
 * Navigation component that takes a title, logo, and an array of links. If the logo is present, it 
 * will show instead of the title. Links will appear on the right hand side on desktop, limited to 
 * up to 10 links. Mobile will show a hamburger in the top right, when clicked will overlay a panel
 * of links and display a cross where the hamburger was
 */
export const Navigation = ({ title, logo, links }: INavigation) => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const navRef = useRef() as React.MutableRefObject<HTMLInputElement>;
  if (typeof window !== 'undefined') {
    let prevScrollpos = window.pageYOffset;
    window.onscroll = () => {
      const currentScrollPos = window.pageYOffset;
      const navElement = navRef.current!;
      if (prevScrollpos > currentScrollPos) {
        navElement.style.top = "0";
      } else {
        navElement.style.top = "-4rem";
      }
      prevScrollpos = currentScrollPos;
    }
  }

  const onClickHandler = () => {
    if (showMobileMenu === true) {
      setShowMobileMenu(false);
      document.body.style.overflowY = "scroll";
      document.body.style.height = "auto";
    } else {
      setShowMobileMenu(true);
      document.body.style.overflowY = "hidden";
      document.body.style.height = "100vh";
    }
  }
  return (
    <NavigationContainer>
      <DesktopContainer ref={navRef}>
        <a href='/'>
          {logo ? <Logo>{logo}</Logo> : <Title>{title}</Title>}
        </a>
        <Links>
          {links && links.length > 0 &&
            links.filter((link: ILink, index: number) => index < 10)
              .map((link: ILink, index: number) => (
                <LinkContainer>
                  <Link key={index} {...link} />
                </LinkContainer>
              )
              )
          }
        </Links>
      </DesktopContainer>
      <MobileContainer>
        <ToggleMenu onClick={() => onClickHandler()}>
          {showMobileMenu ?
            <Cross /> :
            <Hamburger />}
        </ToggleMenu>
        {showMobileMenu &&
          <MobileNavPanel>
            <Links>
              {links && links.length > 0 &&
                links.filter((link: ILink, index: number) => index < 10)
                  .map((link: ILink, index: number) => (
                    <LinkContainer>
                      <Link key={index} {...link} />
                    </LinkContainer>
                  )
                  )
              }
            </Links>
          </MobileNavPanel>
        }
      </MobileContainer>
    </NavigationContainer>
  )
}

export default Navigation