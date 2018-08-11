import TopBar from "./topBar";
import styled from "styled-components";
import BottomBar from "./bottomBar";
import Content from "./content/content";

const Container = styled.div`
  position: absolute;
  height: 100vh;
  width: 100vw;
  top: 0px;
  left: 0px;
  overflow: hidden;
`;

export default () => (
  <Container>
    <Content />
    <TopBar />
    <BottomBar />
  </Container>
);
