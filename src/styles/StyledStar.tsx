import styled from "styled-components"

export const StarDiv = styled.div`
  transition: all 200ms ease-in;
  padding-right: 20px;
`

export const StarAnchor = styled.a`
  display: inline-block;
  vertical-align: top;
  text-align: center;
  color: #eee;
  :hover {
    color: #2cc5d2;
  }
  :active {
    color: #555;
  }
`

export const StarSpan = styled.span`
  font-size: 16px;
  line-height: 24px;
  line-height: 3rem;
  text-align: center;
  font-family: "percolate";
  font-style: normal;
  font-weight: normal;
  font-variant: normal;
  text-transform: none;
  line-height: 1;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  @font-face {
        font-family: "percolate";
        src: url("../assets/icon/percolate.eot?-5w3um4");
        src: 
            url("../assets/icon/percolate.eot?#iefix5w3um4") format("embedded-opentype"),
            url("../assets/icon/percolate.woff?5w3um4") format("woff"),
            url("../assets/icon/percolate.ttf?5w3um4") format("truetype"),
            url("../assets/icon/percolate.svg?5w3um4") format("svg");
        font-weight: normal;
        font-style: normal;
    }
    :before {
      content: "\e608";
    }
`