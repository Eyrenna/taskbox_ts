import React from 'react'
import { StyledInput } from '../../../styles/StyledInput';

interface TextProps {
    value : string
}

export const Text  = ({value} : TextProps) => React.createElement (
    StyledInput ,{
        type : 'text',
        value : value
    }
);