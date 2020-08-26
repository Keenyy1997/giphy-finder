import React from 'react';
import { createGlobalStyle } from 'styled-components';


const GlobalStyles = createGlobalStyle`
  *, html, body {
    padding: 0;
    margin: 0;
    top: 0;
    left: 0;
    font-family: 'Arial', 'Consolas', 'Sans-serif';
  }
`;

function App(props) {

  return (
    <>
      <GlobalStyles/> 
      { props.children }
    </>
  );
}

export default App;
