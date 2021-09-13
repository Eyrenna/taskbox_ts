import { link } from 'fs';
import React from 'react'
import { IconType } from 'react-icons';
import { Check } from '../../atoms/check/Check';
import { Icon } from '../../atoms/icon/Icon';
import { Text } from '../../atoms/text/Text';

interface TaskProps {
    checked : boolean,
    value : string,
    icon : IconType
}

export const Task = ({checked, value, icon} : TaskProps) => 
React.createElement ( 'div', null,
    React.createElement (
        Check, {checked:checked}
    ),
    React.createElement(
        Text, {value:value}
    ), 
    !checked? 
        React.createElement (
            'a', null,
            React.createElement (
                Icon, {icon : icon}
            )
        ) 
    : null
); 
