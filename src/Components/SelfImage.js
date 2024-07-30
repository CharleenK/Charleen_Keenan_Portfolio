import styled from "styled-components";
import meSelf from "../images/hatCK.jpg";
const SelfImage = () => {
  return (
    <>
      <section>
        <StyledImg src={meSelf} alt="Me wearing a top hat"></StyledImg>
        {/* <img src="./assets/tealAndGold.png"></img> */}
      </section>
    </>
  );
};
const StyledImg = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-top: 34px;
  width: 25%;
  border: 3px solid teal;
  border-radius: 50%;
`;
export default SelfImage;
