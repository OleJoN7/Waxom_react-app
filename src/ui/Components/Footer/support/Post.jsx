import React from 'react';

function Post ({children, ...rest}) {

    return (
        <li {...rest}>
            {children}
        </li>
    )
}
export default Post;