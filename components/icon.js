import styled from "styled-components";
import React, { Component } from "react";
import { connect } from "react-redux";
import { changePage } from "../redux/action";

const Container = styled.div`
  float: left;
`;
const Img = styled.img`
  height: 150px;
  width: 150px;
  @media (max-width: 750px) {
    height: calc(100vw / 5);
    width: calc(100vw / 5);
  }
`;

const Topic = styled.span`
  font-family: "Passion one";
  display: block;
  padding-top: 10px;
  padding-left: ${props => props.textleft};
  @media (max-width: 750px) {
    padding-left: calc(${props => props.textleftres});
  }
`;
class Icon extends Component {
  constructor(props) {
    super(props);
    var url = props.url;
    var length = url.length;
    this.state = {
      isHover: false,
      urlA:
        url.substring(0, length - 4) + "A" + url.substring(length - 4, length)
    };
  }
  onMouseEnter = () => {
    this.setState({ isHover: true });
  };
  onMouseLeave = () => {
    this.setState({ isHover: false });
  };
  onClick = () => {
    console.log(this.props.page);
    this.props.changePage(this.props.number);
  };
  render() {
    return (
      <Container>
        <Img
          src={this.state.isHover ? this.state.urlA : this.props.url}
          height={this.props.size}
          width={this.props.size}
          onMouseEnter={this.onMouseEnter}
          onMouseLeave={this.onMouseLeave}
          onClick={this.onClick}
        />
        <Topic
          textleft={this.props.textLeft}
          textleftres={this.props.textLeftRes}
        >
          {this.props.name}
        </Topic>
      </Container>
    );
  }
}

const mapStateToProps = state => {
  return {
    page: state.page
  };
};

const mapDispatchToProps = dispatch => {
  return {
    changePage: number => dispatch(changePage(number))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Icon);
