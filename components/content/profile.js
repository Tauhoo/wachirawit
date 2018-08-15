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
  font-size: 1.7em;
  width: 100%;
  display: block;
  color: black;
  text-align: center;
  padding: 12px 30px 0px 30px;
  word-wrap: break-word;
  @media (max-width: 970px) {
    float: left;
    text-align: left;
    font-size: 1.2em;
  }
  @media (max-width: 560px) {
    float: left;
    text-align: left;
    font-size: 1em;
  }
`;

const Detail = styled.div`
  display: block;
  overflow: hidden;
  @media (max-width: 970px) {
    display: inline-block;
    vertical-align: top;
    width: calc(100% - 110px);
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

const passion =
  "I love to make the beautiful website and hope" +
  " that I will have chance to make a big cool website in some day.";

const education =
  "I'm currently studying for a bachelor's degree at Kasetsart University. " +
  "My major's computer engineering.";

const story =
  "Hello, My name's Wachirawit Wacharak. I'm 20 years old. I live with family" +
  " in outskirt of bankok in Thailand";

export default () => (
  <Container style={{ backgroundColor: "#C4E538" }}>
    <PreDetail>
      <Content
        src="/static/profile/education.png"
        name="Education"
        text={education}
      />
      <Content src="/static/profile/story.png" name="Story" text={story} />
      <Content
        src="/static/profile/passion.png"
        name="Passion"
        text={passion}
      />
    </PreDetail>
  </Container>
);
