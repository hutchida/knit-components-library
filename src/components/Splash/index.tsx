import React from 'react';
import { Image } from "react-datocms";

import {
    Wrapper,
    Container,
    Left,
    Right,
    ProfilePic,
    Info,
    Subtitle,
    Title,
    Oneliner,
    SocialsContainer,
    LinkContainer,
} from './styles';
import { Link } from '../Link';
import { Socials } from '../Socials';
import { ISplash } from './types';

const downChevron =
    <svg height="3rem" width="3rem" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" className="down-chevron hashlink-hover" xmlns="http://www.w3.org/2000/svg">
        <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm184.5 353.7l-178 246a7.95 7.95 0 0 1-12.9 0l-178-246c-3.8-5.3 0-12.7 6.5-12.7H381c10.2 0 19.9 4.9 25.9 13.2L512 563.6l105.2-145.4c6-8.3 15.6-13.2 25.9-13.2H690c6.5 0 10.3 7.4 6.5 12.7z">
        </path>
    </svg>

/**
 * Splash intro hero section component 
 */
export const Splash = ({
    heroImage,
    subtitle,
    title,
    oneliner,
    socials,
    backgroundImage,
    bgColor = 'white',
    onwardLink,
}: ISplash) => {
    return (
        <Wrapper>
            <Container
                style={{
                    backgroundImage: `url(${backgroundImage?.responsiveImage?.src})`,
                    backgroundColor: `${bgColor || 'white'}`
                }}
            >
                <Left>
                    <ProfilePic>
                        {heroImage?.responsiveImage ?
                            <Image data={heroImage?.responsiveImage} /> :
                            <img src={heroImage?.url} />
                        }
                    </ProfilePic>
                </Left>
                <Right>
                    <Info>
                        {subtitle && <Subtitle>{subtitle}</Subtitle>}
                        {title && <Title>{title}</Title>}
                        {oneliner && <Oneliner>{oneliner}</Oneliner>}
                        {socials &&
                            <SocialsContainer>
                                <Socials socials={socials} />
                            </SocialsContainer>
                        }
                    </Info>
                </Right>
            </Container >
            {onwardLink && <LinkContainer>
                {onwardLink.displayName}
                <Link {...onwardLink}>{downChevron}</Link>
            </LinkContainer>
            }
        </Wrapper>
    );
};
