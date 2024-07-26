import { createGlobalStyle } from "styled-components";
import tealAndCopper from "./images/tealAndCopper.jpg";
const GlobalStyles = createGlobalStyle`
:root {
  box-sizing: border-box;
  font-family: Arial;
  text-align: center;
  margin: auto;
}
.main{
  }
  body {
    background-color: rgb(19, 146, 146);
    background-image: url(${tealAndCopper});
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
    background-attachment: fixed;
}
 //  div {
//    background-color: #b87333;
//   text-align: center;
// }
// p {
//   background-color: rgba(0, 128, 128, 0.986);
// }
@media screen and (min-width: 1000px) {
  body {
    max-width: 85%;
  }
}`;
export default GlobalStyles;
