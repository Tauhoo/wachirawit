import styled from "styled-components";

const Container = styled.div`
  position: absolute;
  height: ${props => props.size};
  width: ${props => props.size};
  top: ${props => props.top};
  left: calc(200vw + ${props => props.left});
  @media (max-width: 600px) {
    top: ${props => props.topres};
    left: calc(200vw + ${props => props.leftres});
  }
`;

const AuraGroup = styled.div`
  position: absolute;
  height: ${props => props.size};
  width: ${props => props.size};
`;

const Aura = styled.div`
  position: absolute;
  height: calc(100% * ${props => props.size});
  width: calc(100% * ${props => props.size});
  background-color: ${props => props.color};
  border-radius: 50%;
  transform: translate(-50%, -50%);
  top: 50%;
  left: 50%;
  @media (max-width: 600px) {
    transform: translate(-50%, -50%) scale(2);
  }
  transition: 0.1s;
`;

const Img = styled.img`
  position: absolute;
  height: 60%;
  transform: translate(-50%, -50%);
  top: 50%;
  left: 50%;
  @media (max-width: 600px) {
    height: 100%;
  }
  &:hover {
    transform: translate(-50%, -50%) scale(1.3);
  }
  transition: 0.1s;
`;

export default props => (
  <Container
    size={props.size}
    top={props.top}
    left={props.left}
    topres={props.topres}
    leftres={props.leftres}
  >
    <AuraGroup size={props.size}>
      <Aura color="#ecf0f1" size={1} />
      <Aura color="rgb(46, 204, 133)" size={props.percent} />
      <Img src={props.src} />
    </AuraGroup>
  </Container>
);
