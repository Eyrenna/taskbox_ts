import React, { FC } from 'react'
import { IconType } from 'react-icons';
import { StarDiv,StarAnchor, StarSpan } from '../../../styles/StyledIcon';

interface StarProps {
}

export const Star : FC<StarProps> = ({}) =>
    <StarDiv>
        <StarAnchor>
            <StarSpan/>
        </StarAnchor>
    </StarDiv>;