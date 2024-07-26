import styled from "styled-components";
const Header = () => {
  return (
    <>
      <StyledDiv>
        <StyledH1>Charleen Keenan</StyledH1>
        <p>
          Full-Stack Web Developer with an eye for detail and a wish to create
        </p>
      </StyledDiv>
    </>
  );
};
const StyledDiv = styled.div`
  text-align: center;
  padding: 60px;
`;
const StyledH1 = styled.h1`
  font-size: 75px;
  margin: 30px;
  padding-top: 15px;
`;
export default Header;
