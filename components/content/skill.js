import Container from "./container";
import styled from "styled-components";
import Skill from "./skillComponent/icon";

export default () => (
  <Container style={{ backgroundColor: "#e67e22" }}>
    <Skill
      name="HTML"
      size="20vw"
      top="100px"
      left="10vw"
      src="/static/skill/html.png"
      percent={80}
      topres="170px"
      leftres="20vw"
      deg={-30}
    />
    <Skill
      name="CSS"
      size="15vw"
      top="25vh"
      left="32vw"
      src="/static/skill/css.png"
      percent={70}
      topres="60vh"
      leftres="20vw"
      deg={55}
    />
    <Skill
      name="Javascript"
      size="10vw"
      top="20vh"
      left="50vw"
      src="/static/skill/javascript.png"
      percent={50}
      topres="45vh"
      leftres="70vw"
      deg={-30}
    />
    <Skill
      name="React"
      size="12vw"
      top="40vh"
      left="60vw"
      src="/static/skill/react.png"
      percent={20}
      topres="65vh"
      leftres="60vw"
      deg={-30}
    />
    <Skill
      name="Redux"
      size="12vw"
      top="50vh"
      left="75vw"
      src="/static/skill/redux.png"
      percent={0}
      topres="150px"
      leftres="60vw"
      deg={45}
    />
  </Container>
);
