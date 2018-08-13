import Container from "./container";
import styled from "styled-components";

const TopicContainer = styled.div`
  height: 100vh;
  width: calc(100% / 3);
  display: inline-block;
  @media (max-width: 970px) {
    height: calc(100% / 6);
    width: 100%;
    display: block;
    margin-top: 20px;
  }
`;

const Icon = styled.img`
  width: 40%;
  transform: translateX(-50%);
  margin-left: 50%;
  margin-top: 80px;
  @media (max-width: 970px) {
    width: 100px;
    transform: translateX(0%);
    margin-left: 10px;
    margin-top: 0px;
    display: inline-block;
  }
`;

const Topic = styled.span`
  font-family: "Passion One";
  font-size: 2.5em;
  width: 100%;
  display: block;
  text-align: center;
  color: #f39c12;
  -webkit-text-stroke: 1px black;
  text-shadow: 5px 5px black;
  @media (max-width: 970px) {
    width: calc(100% - 100vh / 3);
    float: left;
    text-align: left;
    margin-left: 30px;
  }
`;

const Text = styled.span`
  font-family: "Passion One";
  font-size: 2em;
  width: 100%;
  display: block;
  color: black;
  text-align: center;
  padding: 12px 30px 0px 30px;
  word-wrap: break-word;
  @media (max-width: 970px) {
    float: left;
    text-align: left;
    font-size: 1.6em;
  }
  @media (max-width: 560px) {
    float: left;
    text-align: left;
    font-size: 1.2em;
  }
`;

const Detail = styled.div`
  display: block;
  overflow: hidden;
  @media (max-width: 970px) {
    display: inline-block;
    vertical-align: top;
    width: calc(100% - 110px );
  }
`;

const PreDetail = styled.div`
  @media (max-width: 970px) {
    padding-top: 14vh;
  }
`;

const Content = props => (
  <TopicContainer>
    <Icon src={props.src} />
    <Detail>
      <Topic>{props.name}</Topic>
      <Text>{props.text}</Text>
    </Detail>
  </TopicContainer>
);

const text =
  "iiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii" +
  "iiooooooooooooooooooooooooooooo" ;

export default () => (
  <Container style={{ backgroundColor: "#C4E538" }}>
    <PreDetail>
      <Content
        src="/static/profile/education.png"
        name="Education"
        text={text}
      />
      <Content src="/static/profile/story.png" name="Story" text={text} />
      <Content src="/static/profile/passion.png" name="Passion" text={text} />
    </PreDetail>
  </Container>
);
