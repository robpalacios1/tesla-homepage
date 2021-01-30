import React from 'react'

/***** CSS *****/
import './Button.css'

const Button = ({ imp, text, link }) => {
    return (
        <div
            className={`button ${imp === 'secondary' ? 'button__white' : ''}`}
        >
            <a href={link}>
                {text}
            </a>
        </div>
    )
}

export default Button
