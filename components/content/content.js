import React, { Component } from "react";
import Home from "./home.js";
import styled from "styled-components";

const Container = styled.div`
  overflow: hidden;
  width: 400vw;
  position: absolute;
  left: 0px;
  top: 0px;
`;

export default class extends Component {
  render = () => (
    <Container>
      <Home />
    </Container>
  );
}
