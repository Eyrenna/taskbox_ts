import { FC } from 'react'
import { TextContainer, StyledText } from '../../../styles/StyledText';

interface TextProps {
    value : string
}

export const Text : FC<TextProps> = ({value}) => 
    <TextContainer>
        <StyledText value={value}></StyledText> 
    </TextContainer>