import React from 'react';

function Time ({children, ...rest}) {
    return (
        <p {...rest}>
            {children}
        </p>
    )
}
export default Time;