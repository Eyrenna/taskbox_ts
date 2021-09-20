import { FC } from 'react'
import GlobalStyle from '../../../styles/GlobalStyles';
import { StyledTaskItem } from '../../../styles/StyledTaskItem';
import { Check } from '../../atoms/check/Check';
import { Star } from '../../atoms/star/Star';
import { Text } from '../../atoms/text/Text';

interface TaskProps {
    id : string,
    title : string,
    state: string
}

export const Task : FC<TaskProps> = ({id, title, state}) => 
    <>
    <GlobalStyle />
    <StyledTaskItem state={state}>

        <Check checked={(state === 'TASK_ARCHIVED')} />

        <Text value={title}></Text>

        <Star></Star>

    </StyledTaskItem>
    </>
    
;