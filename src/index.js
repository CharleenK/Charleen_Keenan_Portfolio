import ReactDOM from "react-dom/client";

import Header from "./Components/Header";
import Main from "./Components/Main";
import Footer from "./Components/Footer";
console.log(document.getElementById("root"));
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div>
    <Header />
    <Main />
    <Footer />
  </div>
);
