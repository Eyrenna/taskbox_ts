import React from 'react'
import { IconType } from 'react-icons';

interface IconClickProps {
    icon : IconType
}

export const Icon = ({icon} : IconClickProps) => React.createElement (
    icon, {
        onClick : () => {}
    }
); 