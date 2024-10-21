import styled from "styled-components";

const Footer = () => {
  return (
    <>
      <StyledDiv>
        <section id="contact">
          <StyledH2>Contact Information</StyledH2>
        </section>
        <StyledP>
          Email:
          <StyledA href="mailto:kuchiburu@hotmail.com" target="_blank">
            Write me
          </StyledA>
        </StyledP>
        <StyledP>
          Phone Number:
          <StyledA href="(514)918-0293">Call Me</StyledA>
        </StyledP>
        <StyledP>
          Linkedin:
          <StyledA
            href="https://www.linkedin.com/in/charleen-keenan-50247a320/"
            target="_blank"
          >
            Find Me
          </StyledA>
        </StyledP>
      </StyledDiv>
    </>
  );
};
const StyledDiv = styled.div`
  background: rgba(184, 115, 51, 0.8);
  border: 3px solid #b87333;
  border-radius: 50px;
  font-size: 2em;
  font-weight: bold;
  padding: 0px;
  margin: 6%;
`;
const StyledH2 = styled.h2`
  margin: 15px;
`;
const StyledP = styled.p`
  color: black;
  display: flex;
  padding: 0px 25px;
  font-size: 0.8em;
  // &:hover {
  //   color: teal;
  // }
`;
const StyledA = styled.a`
  color: black;
  &:hover {
    color: teal;
  }
`;
export default Footer;
// import { linkedin } from "react-icons-kit/icomoon/linkedin";
