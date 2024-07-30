import GlobalStyles from "../GlobalStyles";
import AboutMe from "./AboutMe";
import Technologies from "./Technologies";
import Projects from "./Projects";

const Main = () => {
  return (
    <>
      <GlobalStyles />
      <main>
        <div>
          <AboutMe />
          <Technologies />
          <Projects />
        </div>
      </main>
    </>
  );
};
export default Main;
