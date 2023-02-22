import React from 'react';

const OutputScreenRow = ( props ) => {
    const style = {
        outline: 'none',
        border: 'none',
    }
    return (
        <div>
            <input className="col-md-4 col-sm-8 p-3" type="text" readOnly value={ props.value } style={ style } />
        </div>
    )
}

export default OutputScreenRow;