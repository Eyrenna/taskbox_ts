import styled from "styled-components"

export const TextContainer = styled.div `
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  flex: 1;
`

export const StyledText = styled.input.attrs({
  type : 'text',
  readOnly : true,
  placeholder : "Input title"
})`
  font-size: 0.85rem;
  line-height: 1.5rem;
  font-family: 'Nunito Sans', "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-style: 400;
  padding: 0.75rem 0;
  border: none;
  border-radius: 0;
  box-sizing: border-box;
  color: #333;
  outline: none;
  background: transparent;
  width: 100%;
  margin: 0;
  vertical-align: baseline;
  ::placeholder {
    color: #778b91;
  }
  :focus {
    cursor: text;
  }
  [disabled] {
    opacity: 0.5
  }
`;
