import React from "react";
import styled from "styled-components";
import Fade from "react-reveal/Fade";

const Cardsection = () => {
  return (
    <Container>
      <Cards>
        <Fade bottom>
          <div className="card">
            <div className="card__img">
              <img src="/img/game.jpg" alt="" />
            </div>
            <div className="card__text">
              <h4>Game from Anywhere</h4>
              <p>
                Up to 10 teraflops of processing power enables in-car gaming
                on-par with today's newest consoles. Wireless controller
                compatibility lets you game from any seat.
              </p>
            </div>
          </div>
        </Fade>
        {/* <div className="card">
          <div className="card__img">
            <img src="/img/connected.jpg" alt="" />
          </div>
          <div className="card__text">
            <h4>Stay Connected</h4>
            <p>
              Multi-device Bluetooth, wireless and USB-C charging for every
              passenger. with enough power to fast charge your tablets and
              laptop.
            </p>
          </div>
        </div> */}
        <Fade bottom>
          <div className="card">
            <div className="card__img">
              <img src="/img/connected.jpg" alt="" />
            </div>
            <div className="card__text">
              <h4>Stay Connected</h4>
              <p>
                Up to 10 teraflops of processing power enables in-car gaming
                on-par with today's newest consoles. Wireless controller
                compatibility lets you game from any seat.
              </p>
            </div>
          </div>
        </Fade>
        <Fade bottom>
          <div className="card">
            <div className="card__img">
              <img src="/img/connected.jpg" alt="" />
            </div>
            <div className="card__text">
              <h4>Your Best Audio System</h4>
              <p>
                Up to 10 teraflops of processing power enables in-car gaming
                on-par with today's newest consoles. Wireless controller
                compatibility lets you game from any seat.
              </p>
            </div>
          </div>
        </Fade>
      </Cards>
    </Container>
  );
};

export default Cardsection;

const Container = styled.div`
  padding: 100px 10%;
`;

const Cards = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .card {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 3rem;

    @media (max-width: 768px) {
      flex-direction: column;
      margin: 30px auto;
      gap: 2rem;
    }

    &:nth-child(2) {
      .card__img {
        order: 2;
      }

      @media (max-width: 768px) {
        .card__img {
          order: 0;
        }
      }
    }

    .card__img {
      max-width: 420px;

      @media (max-width: 768px) {
        max-width: 400px;
      }
      img {
        width: 100%;
      }
    }

    .card__text {
      width: 380px;
      @media (max-width: 768px) {
        max-width: 370px;
      }

      @media (max-width: 568px) {
        max-width: 100%;
      }

      @media (max-width: 468px) {
        max-width: 300px;
      }

      h4 {
        color: white;
        font-weight: bold;
      }
      p {
        color: #f5f5f5;
        font-size: 0.8rem;
        line-height: 18px;
        margin: -15px 0;
      }
    }
  }
`;
