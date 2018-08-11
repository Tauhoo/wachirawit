import React, { Component } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { changePage } from "../redux/action";

const Container = styled.div`
  position: absolute;
  overflow: hidden;
  padding: 15px;
  width: 100vw;
  box-sizing: border-box;
`;

class TopBar extends Component {
  onClick = () => {
    this.props.changePage(0)
  }

  render = () => (
    <Container>
      <img src="/static/logo.png" height="60px" width="60px" onClick={this.onClick}/>
      <img
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
