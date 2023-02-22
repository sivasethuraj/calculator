import React from 'react';
import OutputScreenRow from './OutputScreenRow';

const OutputScreen = ( props ) => {
    return (
        <div className="row align-items-center flex-column">
            <OutputScreenRow value={ props.question } />
            <OutputScreenRow value={ props.answer } />
        </div>
    )
}

export default OutputScreen;