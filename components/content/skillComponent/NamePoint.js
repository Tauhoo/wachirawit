import styled from "styled-components";

const Container = styled.div`
  height: 100%;
  width: 100%;
  position: absolute;
`;

const Line = styled.div`
  position: absolute;
  top: ${props => props.top};
  left: ${props => props.left};
  height: 5px;
  width: ${props => props.width};
  background-color: red;
  transform-origin: top left;
  transform: rotate(${props => props.deg || 0}deg);
  border-radius: 2.5px;
  @media(max-width: 600px){
    display: ${props => props.res};
  }
`;

const NameContainer = styled.div`
  position: absolute;
  top: ${props => props.top};
  left: ${props => props.left};
  transform: translateY(-100%);
  @media(max-width: 600px){
    top: 150%;
    left: 50%;
    transform: translateX(-50%);
  }
`;

const Text = styled.span`
  font-family: "Passion One";
  font-size: 1.5em;
  color: #ecf0f1;
  padding: 2px;
`;

const getPosition = (deg, width, factor = Math.PI / 180) => ({
  y: `calc(${Math.sin(deg * factor) * width + 50}%)`,
  x: `calc(${Math.cos(deg * factor) * width + 50}%)`
});

export default props => (
  <Container>
    <Line top="50%" left="50%" width="101%" deg={props.deg}  res="none"/>
    <NameContainer top={getPosition(props.deg, 100).y} left={getPosition(props.deg, 100).x}>
      <Text>{props.name}</Text>
      <Line top="100%" left="0%" width="101%" deg={0} degres={0} res="block"/>
    </NameContainer>
  </Container>
);
