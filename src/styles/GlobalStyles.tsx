import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    html { 
        font-size: 100%;
        -webkit-text-size-adjust: 100%;
        -ms-text-size-adjust: 100%;
    }
    body {
        font-family: 'Nunito Sans', "Helvetica Neue", Helvetica, Arial, sans-serif;
        font-style: 400;
        color: #333;
        font-size: 16px;
        background-color: #26c6da;
    }
    label {                     /* Label-Checkbox */
        margin: 0;
        padding: 0;
        border: 0;
        font-weight: normal;
        font-style: normal;
        line-height: 1;
        font-family: inherit;
    }
    input {                      /* Checkbox , Text */
        font-size: 100%;
        margin: 0;
        vertical-align: baseline;
        *vertical-align: middle;
        line-height: normal;
        *overflow: visible;
    }
    html, body {
        margin: 0;
        padding: 0;
    }
    html, input {
        outline: none;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }
    input[type="checkbox"]:checked + span:before {
        font-size: 1.2rem;
        line-height: 1.8rem;
        box-shadow: none;
        color: red;
        margin-top: -1px;
        font-family: 'percolate';
        font-style: normal;
        font-weight: normal;
        font-variant: normal;
        text-transform: none;
        line-height: 1;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        content: "\e65e";
    }

    @font-face {
        font-family: 'Nunito Sans';
        font-style: italic;
        font-weight: 400;
        src: url(https://fonts.gstatic.com/s/nunitosans/v6/pe0oMImSLYBIv1o4X1M8cce4E9lKcw.ttf) format('truetype');
    }
    @font-face {
        font-family: 'Nunito Sans';
        font-style: normal;
        font-weight: 400;
        src: url(https://fonts.gstatic.com/s/nunitosans/v6/pe0qMImSLYBIv1o4X1M8cce9I94.ttf) format('truetype');
    }
    @font-face {
        font-family: 'Nunito Sans';
        font-style: normal;
        font-weight: 800;
        src: url(https://fonts.gstatic.com/s/nunitosans/v6/pe03MImSLYBIv1o4X1M8cc8aBc5tU1Q.ttf) format('truetype');
    }
`

export default GlobalStyle;