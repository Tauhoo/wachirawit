import styled from "styled-components";
import Icon from "./icon";

const Container = styled.div`
  top: 97vh;
  left: 45vw;
  position: absolute;
  transform: translate(-50%, -100%);
  width: 600px;
  @media (max-width: 750px) {
    width: calc(100vw * 4 / 5);
  }
`;

export default () => (
  <Container>
    <Icon
      url="/static/profileLogo.png"
      size="150px"
      name="Profile"
      textLeft="100px"
      textLeftRes="54%"
      number={1}
    />
    <Icon
      url="/static/skillLogo.png"
      size="150px"
      name="Skill"
      textLeft="100px"
      textLeftRes="60%"
      number={2}
    />
    <Icon
      url="/static/facebookLogo.png"
      size="150px"
      name="Facebook"
      textLeft="75px"
      textLeftRes="35%"
      number={3}
    />
    <Icon
      url="/static/emailLogo.png"
      size="150px"
      name="Email"
      textLeft="75px"
      textLeftRes="42%"
      number={4}
    />
  </Container>
);
