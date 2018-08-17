import React, { Component } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { changePage } from "../redux/action";

const Container = styled.div`
  position: absolute;
  padding: 15px;
  width: 100vw;
  box-sizing: border-box;
`;

const Img = styled.img`
  transition: 0.6s;
  &:hover {
    transform: rotate(360deg) scale(1.5);
  }
`;
class TopBar extends Component {
  onClick = () => {
    this.props.changePage(0);
  };

  render = () => (
    <Container>
      <Img
        src="/static/logo.png"
        height="60px"
        width="60px"
        onClick={this.onClick}
      />
      <Img
        src="/static/topic.png"
        height="30px"
        style={{ float: "right", margin: "15px 0px 0px 0px" }}
      />
    </Container>
  );
}

const mapDispatchToProps = dispatch => {
  return {
    changePage: page => dispatch(changePage(page))
  };
};

export default connect(
  state => ({}),
  mapDispatchToProps
)(TopBar);
