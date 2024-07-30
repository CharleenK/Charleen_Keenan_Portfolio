import styled from "styled-components";
import SelfImage from "./SelfImage";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Header = () => {
  return (
    <>
      <StyledDiv>
        <StyledHeaderDiv>
          <StyledAnchorLink href="#me">About Me</StyledAnchorLink>
          <StyledAnchorLink href="#tech">Technologies</StyledAnchorLink>
          <StyledAnchorLink href="#projects">Projects</StyledAnchorLink>
          <StyledAnchorLink href="#contact">
            Contact Information
          </StyledAnchorLink>
        </StyledHeaderDiv>
        <StyledH1>Charleen Keenan</StyledH1>

        <SelfImage />
        <StyledP>
          Full-Stack Web Developer with an eye for detail and a desire to create
        </StyledP>
      </StyledDiv>
    </>
  );
};
const StyledDiv = styled.div`
  margin-top: 0%;
`;
const StyledHeaderDiv = styled.div`
  display: flex;
  justify-content: space-around;
  background: rgba(184, 115, 51, 0.8);
  border: 3px solid #b87333;
  border-radius: 50px;
  font-size: 1em;
  font-weight: bold;
  margin-top: 0px 250px 0px 250px;
  margin: 6%;
`;
const StyledH1 = styled.h1`
  font-family: "Lovers Quarrel", cursive;
  font-weight: 400;
  font-style: normal;
  background: rgba(0, 128, 128, 0.8);
  border: 5px solid teal;
  border-radius:50px;
  font-size: 150px;
  line-height: 0.7em;
  margin: 6%;
  margin-top: 5px;
  margin-bottom: 5px;
  align-items: center;
  padding-top: 25px;
`;
const StyledAnchorLink = styled(AnchorLink)`
  color: black;
  display: inline-block;
  padding: 25px 2px;
`;
const StyledP = styled.p`
  background: rgba(184, 115, 51, 0.8);
  border: 3px solid #b87333;
  border-radius: 50px;
  font-size: 2em;
  padding: 25px;
  margin: 6%;
`;
export default Header;
