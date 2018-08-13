import Container from "./container";
import styled from "styled-components";
import Skill from "./skillComponent/icon";

export default () => (
  <Container style={{ backgroundColor: "#1B1464" }}>
    <Skill size="20vw" top="100px" left="10vw" src="/static/skill/html.png" percent={80/100} />
    <Skill size="15vw" top="25vh" left="32vw" src="/static/skill/css.png" percent={60/100} />
    <Skill size="10vw" top="20vh" left="50vw" src="/static/skill/javascript.png" percent={70/100}/>
    <Skill size="12vw" top="40vh" left="60vw" src="/static/skill/react.png" percent={60/100}/>
    <Skill size="12vw" top="50vh" left="75vw" src="/static/skill/redux.png" percent={50/100}/>
  </Container>
);
