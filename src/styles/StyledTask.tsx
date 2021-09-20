import styled from "styled-components"

export const StyledTask = styled.div.attrs({
    state : 'TASK'
})`
    font-size: 14px;
    line-height: 20px;
    display: flex;
    flex-wrap: wrap;
    height: 3rem;
    width: 100%;
    background: white;
    transition: all ease-out 150ms;
    :hover {
        background-image: linear-gradient(to bottom, #e5f9f7 0%, #f0fffd 100%);
    }
`






 