import styled from "styled-components"

export const CheckLabel = styled.label`
  display: inline-block;
  height: 3rem;
  position: relative;
  vertical-align: middle;
  width: 44px;
`

export const StyledCheck = styled.input.attrs({
  type : 'checkbox',
  name : 'archived'
})`
  font-size: 1em;
  visibility: hidden;
`;

export const CheckSpan = styled.span`
  ::before {
  position: absolute;
  top: 50%;
  right: auto;
  bottom: auto;
  left: 50%;
  width: 0.85em;
  height: 0.85em;
  transform: translate3d(-50%, -50%, 0);
  background: transparent;
  box-shadow: #2cc5d2 0 0 0 1px inset;
  content: '';
  display: block;
  }
`

