import styled from "styled-components";
import React, { Component } from "react";
const Img = styled.img`
  height: 150px;
  width: 150px;
  @media (max-width: 750px) {
    height: calc(100vw / 5);
    width: calc(100vw / 5);
  }
`;

export default class extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isHover: false
    };
  }
  render() {
    return (
      <Img
        src={this.state ? this.props.url : this.props.url}
        height={this.props.size}
        width={this.props.size}
      />
    );
  }
}
