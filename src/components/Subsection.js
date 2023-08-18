import React from "react";
import styled from "styled-components";

function Subsection({ title, description, backgroundImg, rightBtnText }) {
  return (
    <Wrap bgImage={backgroundImg}>
      <HomeText>
        <h1> {title} </h1>
        <p>{description}</p>
      </HomeText>

      <Buttons>
        <ButtonGroup>
          <Specs>
            <div>
              <h3>390 mi</h3>
              <p>Range (est.)</p>
            </div>
            <div>
              <h3>1.99 s</h3>
              <p>0-80mph</p>
            </div>
            <div>
              <h3>200 mph</h3>
              <p>Top Speed</p>
            </div>
            <div>
              <h3>1,020 hp</h3>
              <p>Peak power</p>
            </div>
          </Specs>
          <RightButton>{rightBtnText}</RightButton>
        </ButtonGroup>
      </Buttons>
    </Wrap>
  );
}

export default Subsection;

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
    @media (max-width: 568px) {
      font-size: 8vw;
    }
  }

  p {
    @media (max-width: 568px) {
      font-size: 4vw;
    }
  }
`;
const Buttons = styled.div`
  margin-bottom: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 4rem;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Specs = styled.div`
  display: flex;
  gap: 5.5rem;
  align-items: center;
  justify-content: center;

  @media (max-width: 968px) {
    display: none;
  }

  div {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    h3 {
      color: white;
    }

    p {
      position: absolute;
      color: white;
      font-size: 0.7rem;
      top: 30px;
    }
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

// const DownArrow = styled.img`
//   height: 40px;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   animation: animateDown infinite 1.5s;
//   margin-top: 5px;
// `;
