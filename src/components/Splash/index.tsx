import React from 'react';
import {
    Container,
    ProfilePic,
    Info,
    Subtitle,
    Title,
    Oneliner,
} from './styles';
import { Link } from '../Link';
import { Socials } from '../Socials';
import { ISplash } from './types';
/**
 * Splash intro hero section component 
 */
export const Splash = ({
    profilePic,
    subtitle,
    title,
    oneliner,
    socials,
    bgImage,
    bgColor = 'white',
    onwardLink,
}: ISplash) => {
    return (
        <Container $bgColor={bgColor} $bgImage={bgImage}>
            <ProfilePic>
                <img src={profilePic} />
            </ProfilePic>
            <Info>
                {subtitle && <Subtitle>{subtitle}</Subtitle>}
                {title && <Title>{title}</Title>}
                {oneliner && <Oneliner>{oneliner}</Oneliner>}
                {socials && <Socials socials={socials} />}
            </Info>
            {onwardLink && <Link {...onwardLink} />}
        </Container>
    );
};
