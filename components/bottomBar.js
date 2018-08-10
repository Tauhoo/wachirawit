import styled from "styled-components";
import Icon from "./icon";

const Container = styled.div`
  top: 100vh;
  position: relative;
  transform: translateY(-165%);
`;

export default () => (
  <Container>
    <Icon url="/static/profileLogo.png" size="150px" />
    <Icon url="/static/skillLogo.png" size="150px" />
    <Icon url="/static/facebookLogo.png" size="150px" />
    <Icon url="/static/emailLogo.png" size="150px" />
  </Container>
);
