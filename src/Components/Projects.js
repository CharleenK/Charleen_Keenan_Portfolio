import styled from "styled-components";
const Projects = () => {
  return (
    <>
      <StyledDiv>
        <section id="projects">
          <StyledH2>Projects</StyledH2>
        </section>
        <StyledA href="https://charleenk.github.io/NyanCat/" target="_blank">
          Nyan Cat
        </StyledA>
        <p> More to come... </p>
      </StyledDiv>
    </>
  );
};
const StyledDiv = styled.div`
  background: rgba(0, 128, 128, 0.8);
  border: 5px solid teal;
  border-radius: 50px;
  font-size: 2em;
  padding: 0px;
  margin: 6%;
`;
const StyledH2 = styled.h2`
  margin: 15px;
`;
const StyledA = styled.a`
  color: black;
  &:hover {
    color: rgba(184, 115, 51);
  }
`;
export default Projects;
