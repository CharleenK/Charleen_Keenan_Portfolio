import { createGlobalStyle } from "styled-components";
import tealAndCopper from "./images/tealAndCopper.jpg";
const GlobalStyles = createGlobalStyle`
:root {
  box-sizing: border-box;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-family: Arial, sans-serif;
}

 body { 
      margin: 0px;     
      background-color: rgb(19, 146, 146);
      background-image: url(${tealAndCopper});
      background-size: cover;
      background-position: center center;
      background-repeat: no-repeat;
      background-attachment: fixed;
    }
    
.hide{
  visibility: hidden ;
  opacity: 0;
  }

.icon:hover .hide{
  visibility: visible;
  opacity: 1;
  color: black;
  font-size: 1.25em;
  
}

@media screen and (min-width: 1000px) {
  body {
    max-width: 85%;
  }
}`;
export default GlobalStyles;
