import styled from "styled-components";

const Container = styled.div`
  position:absolute;
  overflow: hidden;
  padding: 15px;
  width: 100vw;
  box-sizing: border-box;
`;

export default () => (
  <Container>
    <img src="/static/logo.png" height="60px" width="60px" />
    <img
      src="/static/topic.png"
      height="30px"
      style={{ float: "right", margin: '15px 0px 0px 0px' }}
    />
  </Container>
);
