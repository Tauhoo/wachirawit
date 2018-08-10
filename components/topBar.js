import styled from "styled-components";

const Container = styled.div`
  overflow: hidden;
  padding: 15px;
  width: calc(100vw-30px);
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
