import { Container, Skewed } from './styles';
/**
 * Simple section component that can create a diagonal coloured background effect
 * Children are any components that sit within it
 */
export const Section = (
    { bgColor = 'pink', tilt = 2, children }: any) => {
    return (
        <Container $bgColor={bgColor} $tilt={tilt}>
            <Skewed $tilt={tilt}>
                {children}
            </Skewed>
        </Container>
    );
};
