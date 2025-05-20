import { useState} from "react";
import PropTypes from "prop-types";

export const CounterApp =({ value }) => { 
    const titulo = 'counter App!';

    //** Hook */
    const [ counter, setCounter ] = useState( value );
    const handleAdd = (event) => {
        setCounter( counter + 1 );
    }
    const handleMin = (event) => {
        setCounter( counter - 1 );
    }
    const handleReset = (event) => {
        setCounter( value );
    }
    //** */

    //** Event Handlers */
    function handleClick(event) {
        console.log(event);
    }
    const handleClick2 = (event) => {
        console.log(event);
    }
    
    return (
        <> 
        <h1> { titulo } </h1>
        <h2> { counter } </h2>                   
        <button onClick={ handleAdd } name="+1"> +1 </button>
        <button onClick={ handleReset } name="reset"> Reset </button>
        <button onClick={ handleMin } name="-1"> -1 </button>
        </>
    );
}

CounterApp.propTypes = {
    value: PropTypes.number.isRequired
}

CounterApp.defaultProps = {
    value: 0
}