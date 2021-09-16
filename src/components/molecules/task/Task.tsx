import React from 'react'
import { StyledStarFill, StyledStarReg } from '../../../styles/StyledIcon';
import { Check } from '../../atoms/check/Check';
import { Text } from '../../atoms/text/Text';

interface TaskProps {
    id : string,
    title : string,
    state: string
}

export const Task = ({id, title, state} : TaskProps) => 
React.createElement ( 'div', null,
    state == 'TASK_ARCHIVED'?
        React.createElement ( Check, { checked : true } ) : React.createElement  (Check, { checked : false } ),
    React.createElement( Text, { value : title } ), 
    state != 'TASK_ARCHIVED'?
        state == 'TASK_PINNED'?
            React.createElement (
                    StyledStarFill
            ) 
        :   
        React.createElement (
            StyledStarReg
    ) 
    : null
); 