import React from 'react';

function Keyword ({children, ...rest}) {

    return (
        <span {...rest}>
            {children}
        </span>
    )
}
export default Keyword;