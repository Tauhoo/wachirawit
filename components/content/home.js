import Container from "./container";
import styled from "styled-components";

const Name = styled.span`
  font-family: "Passion One";
  font-size: 10vw;
  text-shadow: 8px 8px black;
  display: inline-block;
  color: #f1c40f;
  -webkit-text-stroke: 1px black;
  transition: 0.6s;
  @media (max-width: 1000px) {
    font-size: 14vw;
  }
  &:hover {
    transform: scale(1.1);
  }
`;

const NameContainer = styled.div`
  position: absolute;
  transform: translate(-50%, -50%);
  text-align: center;
  top: 45vh;
  left: 50vw;
`;

export default () => (
  <Container>
    <NameContainer>
      <Name>WACHIRAWIT</Name>
      <br />
      <Name>WACHARAK</Name>
    </NameContainer>
  </Container>
);
