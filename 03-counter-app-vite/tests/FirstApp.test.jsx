import { render, screen } from '@testing-library/react'; 
import { FirstApp } from '../src/FirstApp';

describe('FirstApp', () => {
    
    const title = 'Hola, soy Goku';
    test('should match snapshot', () => {
        const { container } = render( <FirstApp title={ title } /> );
        expect( container ).toMatchSnapshot();
    });
    
    test('should show the title in an h1 tag', () => {
        render( <FirstApp title={ title } /> );
        expect( screen.getByRole('heading', { level: 1 }).innerHTML ).toContain('Hola, soy Goku');
    });
    
    test('should show the subtitle in a p tag', () => {
        render( <FirstApp title="Hola, soy Goku" subtitle="Soy un subtitulo" /> );
        expect( screen.getByText('Soy un subtitulo') ).toBeTruthy();
    });
    
});