import React from 'react'

interface TextProps {
    value : string
}

export const Text = ({value} : TextProps) => React.createElement (
    'input',{
        type : 'text',
        value : value,
        onlyRead : true
    });