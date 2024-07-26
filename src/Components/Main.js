import GlobalStyles from "../GlobalStyles";
import AboutMe from "./AboutMe";
import Technologies from "./Technologies";
import Projects from "./Projects";
import SelfImage from "./SelfImage";

const Main = () => {
  return (
    <>
      <GlobalStyles />
      <main class="main">
        <div>
          <AboutMe />
          <Technologies />
          <Projects />
          <SelfImage />
        </div>
      </main>
    </>
  );
};
export default Main;
