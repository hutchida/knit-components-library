import { IStoryBlokImage } from '../../types/ISharedTypes'
export interface ISlide {
    _uid: string;
    title?: string;
    component: any;
    description?: string;
    html?: string;
    bgImage?: IStoryBlokImage;
    bgColor?: string;
    borderColor?: string;
    size: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
    slideHeight: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
    descriptionSize: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
    spacing: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
}
