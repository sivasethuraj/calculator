import React from 'react';

const CalculatorTitle = ( props ) => {
    return (
        <div className="row bg-light text-center mb-2">
            <div className='py-4'>

                { props.value }
            </div>
        </div>
    )
}

export default CalculatorTitle;