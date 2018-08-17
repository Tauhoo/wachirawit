import styled from "styled-components";
import NamePoint from "./NamePoint";

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
  border-style: solid;
  border-width: 1vw;
  border-color: transparent ${props => props.color+' '+props.color } transparent;
  border-radius: 50%;
  transform: translate(-50%, -50%) rotate(${props => props.deg*180/100 - 45}deg);
  top: calc(50% + ${props => props.isShadow*5 || 0}px);
  left: calc(50% + ${props => props.isShadow*5 || 0}px);
  @media (max-width: 600px) {
    transform: translate(-50%, -50%) scale(2)
      rotate(${props => props.deg*180/100 - 45}deg);
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
  z-index: 1000px;
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
      <Aura color="black" size={1} deg={0} isShadow={1} />
      <Aura color="black" size={1} deg={props.percent} isShadow={1}/>
      <Aura color="#27ae60" size={1} deg={0} />
      <Aura color="#27ae60" size={1} deg={props.percent} />
    </AuraGroup>
    <NamePoint deg={props.deg} name={props.name} />
    <Img src={props.src} />
  </Container>
);
