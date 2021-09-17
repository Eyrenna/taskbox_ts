import styled from "styled-components"

const label_check = `
  font-size: 1em;
`

const label_check_span = `
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
`

const label_check_ed_span = `
  font-size: 1.2rem;
  line-height: 1.8rem;
  box-shadow: none;
  color: #2cc5d2;
  margin-top: -1px;
  font-family: 'percolate';
  speak: none;
  font-style: normal;
  font-weight: normal;
  font-variant: normal;
  text-transform: none;
  line-height: 1;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  content: "\e65e";
`

export const CheckLabel = styled.label`
  margin: 0;
  padding: 0;
  border: 0;
  font-weight: normal;
  font-style: normal;
  line-height: 1;
  font-family: inherit;
  display: inline-block;
  height: 3rem;
  position: relative;
  vertical-align: middle;
  width: 44px;
  ${label_check};
  ${label_check_span};
  ${label_check_ed_span}
`

export const StyledCheck = styled.input.attrs({
  type : 'checkbox',
  name : 'archived'
})`
  margin: 0;
  vertical-align: baseline;
  *vertical-align: middle;
  line-height: normal;
  *overflow: visible;
  outline: none;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  ${label_check};
  ${label_check_span};
  
  &::checked {
    ${label_check_ed_span}};
`;

export const CheckSpan = styled.span`
  ${label_check_ed_span};
`

