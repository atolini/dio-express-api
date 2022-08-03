import { createGlobalStyle } from 'styled-components';
 
const GlobalStyle = createGlobalStyle`
  *, 
  html { 
    margin: 0; 
    padding: 0; 
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
    font-size: 14px;
  }

  body { 
    display: flex; 
    flex-flow: column nowrap; 
    align-items: center;
  }
`;
 
export default GlobalStyle;