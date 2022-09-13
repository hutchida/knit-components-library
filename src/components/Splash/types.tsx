import { ILink } from "../Link";
import { ISocial } from "../Socials";

export interface ISplash {
    profilePic?: any;
    subtitle?: string;
    title?: string;
    oneliner?: string;
    socials?: ISocial[];
    backgroundImage?: any;
    bgColor?: string;
    onwardLink?: ILink;
    heroImage?: any;
}