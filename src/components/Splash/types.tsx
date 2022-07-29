import { ILink } from "../Link";
import { ISocial } from "../Socials";

export interface ISplash {
    profilePic?: any;
    subtitle?: string;
    title?: string;
    oneliner?: string;
    socials?: ISocial[];
    bgImage?: string;
    bgColor?: string;
    onwardLink?: ILink;
}