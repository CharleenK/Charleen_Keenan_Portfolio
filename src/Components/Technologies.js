import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHtml5 } from "@fortawesome/free-brands-svg-icons";
import { faCss3 } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faReact } from "@fortawesome/free-brands-svg-icons";
import { faJs } from "@fortawesome/free-brands-svg-icons";
import { faNodeJs } from "@fortawesome/free-brands-svg-icons";
const Technologies = () => {
  return (
    <>
      <StyledTechDiv>
        <section id="tech">
          <StyledTechH2>Technologies</StyledTechH2>
        </section>
        <StyledDiv>
          <span className="icon">
            <FontAwesomeIcon icon={faHtml5} size={"2x"} />
            <p className="hide">HTML</p>
          </span>
          <span className="icon">
            <FontAwesomeIcon icon={faCss3} size={"2x"} />
            <p className="hide">CSS</p>
          </span>
          <span className="icon">
            <FontAwesomeIcon icon={faGithub} size={"2x"} />
            <p className="hide">Github</p>
          </span>
          <span className="icon">
            <FontAwesomeIcon icon={faReact} size={"2x"} />
            <p className="hide">HTML</p>
          </span>
          <span className="icon">
            <FontAwesomeIcon icon={faJs} size={"2x"} />
            <p className="hide">JavaSript</p>
          </span>
          <span className="icon">
            <FontAwesomeIcon icon={faNodeJs} size={"2x"} />
            <p className="hide">NodeJS</p>
          </span>
        </StyledDiv>
      </StyledTechDiv>
    </>
  );
};
const StyledTechDiv = styled.div`
  background: rgba(184, 115, 51, 0.8);
  border-radius:50px;
  border: 3px solid #b87333;
  display: flex: 30%;
  margin: 6%;
  padding: 15px 0 ;
  
  `;
const StyledTechH2 = styled.h2`
  font-size: 50px;
  margin: 0;
  padding: 0px 0px 15px 0px;
`;
const StyledDiv = styled.div`
  display: flex;
  justify-content: center;
  gap: 50px;
  padding: 0px 35px 15px 35px;
`;

export default Technologies;

// import { Icon } from "react-icons-kit";
// import { htmlFive } from "react-icons-kit/icomoon/htmlFive";
// import { css3 } from "react-icons-kit/icomoon/css3";
// import { git } from "react-icons-kit/icomoon/git";
{
  /* <span>
  <Icon size={"25%"} icon={htmlFive} />
  </span> */
}
{
  /* <span>
    <Icon size={"25%"} icon={css3} />
    </span> */
}
{
  /* <span>
      <Icon size={"25%"} icon={git} />
      </span> */
}
