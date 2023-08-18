import React from "react";
import styled from "styled-components";
import Fade from "react-reveal/Fade";

function Interior({
  title,
  description,
  backgroundImg,
  leftBtnText,
  rightBtnText,
}) {
  return (
    <Wrap bgImage={backgroundImg}>
      <Fade bottom>
        <HomeText>
          <h1> {title} </h1>
          <p>{description}</p>
        </HomeText>
      </Fade>
      <Fade bottom>
        <Buttons>
          <ButtonGroup>
            {leftBtnText && <LeftButton>{leftBtnText}</LeftButton>}
            {rightBtnText && <RightButton>{rightBtnText}</RightButton>}
          </ButtonGroup>
        </Buttons>
      </Fade>
    </Wrap>
  );
}

export default Interior;

const Wrap = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background: ${(props) => `url("img/${props.bgImage}")`};
  background-size: cover;
  background-position: center;
`;

const HomeText = styled.div`
  padding-top: 15vh;
  text-align: center;

  h1 {
    margin: 0 0 -20px 0;
    @media (max-width: 1024px) {
      color: white;
    }
    @media (max-width: 568px) {
      font-size: 6vw;
    }
    color: #8b8b8b;
  }

  p {
    @media (max-width: 568px) {
      font-size: 4vw;
    }
  }
`;
const Buttons = styled.div`
  margin-bottom: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ButtonGroup = styled.div`
  display: flex;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const LeftButton = styled.div`
  background: rgba(23, 26, 32, 0.8);
  height: 40px;
  width: 256px;
  color: white;
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
  border-radius: 100px;
  opacity: 0.85;
  font-size: 12px;
  cursor: pointer;
  margin: 8px;
`;

const RightButton = styled(LeftButton)`
  background: white;
  opacity: 0.65;
  color: black;
`;
