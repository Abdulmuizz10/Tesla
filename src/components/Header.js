import React from "react";
import styled from "styled-components";
import { useState } from "react";
import { Link } from "react-router-dom";

function Header() {
  const [BurgerStatus, SetBurgerStatus] = useState(false);

  return (
    <Container>
      <Link to="/">
        <Icon src="/img/logo.svg" />
      </Link>
      <MenuBar>
        <Link to="/modelS">MODEL S</Link>
        <Link to="/model3">MODEL 3</Link>
        <Link to="/modelX">MODEL X</Link>
        <Link to="/modelY">MODEL Y</Link>
      </MenuBar>

      <RightMenu>
        <Link to="/#">SHOP</Link>
        <Link to="/#">TESLA ACCOUNT</Link>
        <i className="bx bx-menu" onClick={() => SetBurgerStatus(true)}></i>
      </RightMenu>

      <BurgerNav show={BurgerStatus}>
        <Close>
          <i className="bx bx-x" onClick={() => SetBurgerStatus(false)}></i>
        </Close>
        <li onClick={() => SetBurgerStatus(false)}>
          <Link to="/modelS">MODEL S</Link>
        </li>
        <li onClick={() => SetBurgerStatus(false)}>
          <Link to="/model3">MODEL 3</Link>
        </li>
        <li onClick={() => SetBurgerStatus(false)}>
          <Link to="/modelX">MODEL X</Link>
        </li>
        <li onClick={() => SetBurgerStatus(false)}>
          <Link to="/modelY">MODEL Y</Link>
        </li>
        <li onClick={() => SetBurgerStatus(false)}>
          <a href="#">Existing Inventory</a>
        </li>
        <li onClick={() => SetBurgerStatus(false)}>
          <a href="#">Used Inventory</a>
        </li>
        <li onClick={() => SetBurgerStatus(false)}>
          <a href="#">Trade-in</a>
        </li>
        <li onClick={() => SetBurgerStatus(false)}>
          <a href="#">cyber Truck</a>
        </li>
        <li onClick={() => SetBurgerStatus(false)}>
          <a href="#">Roadaster</a>
        </li>
        <li onClick={() => SetBurgerStatus(false)}>
          <a href="#">Existing Inventory</a>
        </li>
        <li onClick={() => SetBurgerStatus(false)}>
          <a href="#">Existing Inventory</a>
        </li>
        <li onClick={() => SetBurgerStatus(false)}>
          <Link to="/">Home</Link>
        </li>
      </BurgerNav>
    </Container>
  );
}

export default Header;

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  padding: 10px 17px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 1;
`;
const Icon = styled.img`
  width: 100px;
  height: 28px;

  @media (max-width: 568px) {
    width: 70px;
    height: 18px;
  }
`;

const MenuBar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;

  a {
    font-size: 1rem;
    font-weight: bold;
    padding: 0 5px;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const RightMenu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  a {
    font-size: 1rem;
    font-weight: bold;
    padding: 0 3.5px;
  }

  i {
    font-size: 27px;
    align-self: center;
    cursor: pointer;
  }
`;

const BurgerNav = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  background: white;
  width: 300px;
  padding: 15px;
  display: flex;
  flex-direction: column;
  text-align: start;
  justify-content: flex-start;
  transform: ${(props) => (props.show ? "translateX(0)" : "translateX(100%)")};
  transition: 0.2s;

  li {
    padding: 13px 0;
    border-bottom: 2px solid rgba(0, 0, 0, 0.2);
    transition: 0.5s ease-in-out;

    &:hover {
      transform: translateX(5px);
    }

    a {
      font-weight: 600;
    }
  }
  z-index: 1000;
`;

const Close = styled.div`
  display: flex;
  justify-content: flex-end;

  i {
    font-size: 30px;
    cursor: pointer;
  }
`;
