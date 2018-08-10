import styled from "styled-components";
import Icon from "./icon";

const Container = styled.div`
  top: 95vh;
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
    <Icon url="/static/profileLogo.png" size="150px" name="Profile" textLeft="100px"/>
    <Icon url="/static/skillLogo.png" size="150px" name="Skill" />
    <Icon url="/static/facebookLogo.png" size="150px" name="Facebook" />
    <Icon url="/static/emailLogo.png" size="150px" name="Email" />
  </Container>
);
