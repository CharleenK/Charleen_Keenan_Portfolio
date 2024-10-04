import styled from "styled-components";
const AboutMe = () => {
  return (
    <>
      <StyledDiv>
        <section id="me">
          <h2>About Me</h2>
        </section>
        <StyledP>
          Contemplations, experience, and drive has led me to my new career path
          as a Web Developer! After working in the Research Field, and in
          Veterinary Hospitals as an Animal Health Technician for about 20
          years, I pursue a change that will allow me to keep my detail-oriented
          mind occupied, and my creative side fulfilled.
        </StyledP>
      </StyledDiv>
    </>
  );
};
const StyledDiv = styled.div`
background: rgba(0, 128, 128, 0.8);
border: 5px solid teal;
border-radius:50px;
font-size: 2em;  
display: flex: 30%;
text-align:center;
margin:6%;
padding: 0px 5px 0px 5px;
`;
const StyledP = styled.p`
  font-size: 1em;
`;
export default AboutMe;
