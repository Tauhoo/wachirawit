import styled from "styled-components";

const Img = styled.img`
  height: 150px;
  width:  150px;
  @media (max-width: 750px) {
    height: calc(100vw/5);
    width:  calc(100vw/5);
  }

`

export default props => (
  <Img src={props.url} height={props.size} width={props.size} />
);
