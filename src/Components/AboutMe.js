import styled from "styled-components";
const AboutMe = () => {
  return (
    <>
      <StyledDiv>
        <h2>About Me</h2>
        <p>
          Contemplations, experience, and drive has lead me to my new career
          path as a Web Developer! After working in the Research Field, and in
          Veterinary Hospitals as an Animal Health Technician for about 20
          years, I persue a change that will allow me to keep my detail oriented
          mind occupied, and my creative side fulfilled.
        </p>
      </StyledDiv>
    </>
  );
};
const StyledDiv = styled.div`
  display: flex: 30%;
  background-color: #f1f1f1;
  padding: 20px;
`;

export default AboutMe;
