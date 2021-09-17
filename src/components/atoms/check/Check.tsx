import { FC } from 'react'
import { CheckLabel, CheckSpan, StyledCheck } from '../../../styles/StyledCheck';

interface CheckProps {
    checked : boolean
    onChange? : void // Requerido -> porque sino entiende que el check es inmutable (read-only)
}

export const Check : FC<CheckProps> = ({checked}) => 
    <CheckLabel>
        <StyledCheck checked={checked} />
        <CheckSpan/>
    </CheckLabel>
