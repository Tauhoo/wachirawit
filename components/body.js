import TopBar from "./topBar";
import styled from "styled-components";
import BottomBar from "./bottomBar";

const Container = styled.div`
  position: absolute;
  height: 100vh;
  width: 100vw;
  top: 0px;
  left: 0px;
`;

export default () => (
  <Container>
    <TopBar />
    <BottomBar />
  </Container>
);
