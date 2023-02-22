import React from 'react';

const Button = ( props ) => {

    let label = '';
    if ( props.label === 'Clear' ||
        props.label === 'Delete' ) {
        label = 'btn-danger';
    }
    else if ( props.label === '.' ||
        props.label === '/' ||
        props.label === '*' ||
        props.label === '-' ||
        props.label === '+' ) {
        label = 'btn-warning';
    }
    else if ( props.label === '=' ) {
        label = 'btn-success';
    }
    else {
        label = 'btn-secondary'
    }
    return (
        <input
            className={ 'col-md-1 col-sm-2 btn m-1 ' + label }
            type="button"
            value={ props.label }
            onClick={ props.handleClick }
        />
    );
}
export default Button;