import React from 'react'

interface CheckProps {   //Interface REQUIRED --> we can declare handle 'controls' (Storybook)
    checked : boolean
}

export const Check = ({checked} : CheckProps) => React.createElement(
    'input',{
        type : 'checkbox',
        name : 'archived',
        disabled : true, 
        checked : checked
    }
);