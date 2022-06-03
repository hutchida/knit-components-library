export interface ISlide {
    title?: string;
    description?: string;
    bgImage?: string;
    bgColor?: string;
    slideWidth?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
    slideHeight?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
    descriptionSize?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
    spacing?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
}
