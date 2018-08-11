import React, { Component } from "react";
import Home from "./home.js";
import styled from "styled-components";
import { connect } from "react-redux";

const Container = styled.div`
  overflow: hidden;
  width: 400vw;
  position: absolute;
  transition: 0.6s;
  left: ${props => props.page * -100}vw;
  top: 0px;
`;

class Content extends Component {
  render = () => (
    <Container page={this.props.page}>
      <Home />
    </Container>
  );
}

const mapStateToProps = state => {
  return {
    page: state.page
  };
};

export default connect(mapStateToProps)(Content);
