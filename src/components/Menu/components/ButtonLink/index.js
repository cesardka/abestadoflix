import React from 'react';

function ButtonLink(props) {
    const { href, className, children } = props;

    return (
        <a  href={href} className={className}>
            {children}
        </a>
    )
}

export default ButtonLink;