import { render, screen, fireEvent } from '@testing-library/react'; 
import { CounterApp } from '../src/CounterApp';

describe('CounterApp', () => {
    const value = 100;
    test('should match snapshot', () => {
        const { container } = render( <CounterApp value={ value } /> );
        expect( container ).toMatchSnapshot();
    });
    
    test('should show the initial value of 100', () => {
        render( <CounterApp value={ value } /> );
        expect( screen.getByText(value) ).toBeTruthy();
    });
    
    test('should increment the counter by 1 when +1 button is clicked', () => {
        render( <CounterApp value={ value } /> );
        fireEvent.click( screen.getByText('+1') );
        expect( screen.getByText(value + 1) ).toBeTruthy();
        //screen.getByRole('button', { name: '+1' }).click();
    });

    test('should decrement the counter by 1 when -1 button is clicked', () => {
        render( <CounterApp value={ value } /> );
        fireEvent.click( screen.getByText('-1') );
        expect( screen.getByText(value - 1) ).toBeTruthy();
    });

    // test('should reset the counter to the initial value when reset button is clicked', () => {
    //     render( <CounterApp value={ value } /> );
    //     fireEvent.click( screen.getByText('+1') );
    //     fireEvent.click( screen.getByText('reset') );
    //     expect( screen.getByText(value) ).toBeTruthy();
    // });
    
});