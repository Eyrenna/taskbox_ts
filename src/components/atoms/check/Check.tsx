import React from 'react'
import { StyledCheck } from '../../../styles/StyledCheck';

interface CheckProps {   //Interface REQUIRED --> we can declare handle 'controls' (Storybook)
    checked : boolean
}

export const Check = ({checked} : CheckProps) => React.createElement(   // createElement (element, attributes, content/children)
    StyledCheck ,{
        type : 'checkbox',
        name : 'archived',
        disabled : false, 
        checked : checked,
        onClick : () => {}
    }
);