import { ReactChild } from "react";

export interface ISection {
    bgColor?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
    tilt?: 'soft' | 'medium' | 'hard';
    children?: ReactChild
}
