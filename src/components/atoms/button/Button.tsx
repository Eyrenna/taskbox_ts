import React from 'react'

interface ButtonProps {
}

export const Button = ({} : ButtonProps) => React.createElement (
    'button', {
        type : 'button'
    },
    'Click Me'
); 