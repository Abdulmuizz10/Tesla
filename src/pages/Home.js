import React from "react";
import styled from "styled-components";
import Section from "../components/Section";

function Home() {
  const show = true;
  return (
    <Container>
      <Section
        title="Model S"
        description="Order Online For Touchless Delivery"
        backgroundImg="model-s.jpg"
        leftBtnText="CUSTOM ORDER"
        rightBtnText="EXISTING INVENTORY"
        show
      />
      <Section
        title="Model Y"
        description="Order Online For Touchless Delivery"
        backgroundImg="model-y.jpg"
        leftBtnText="CUSTOM ORDER"
        rightBtnText="EXISTING INVENTORY"
        show={false}
      />
      <Section
        title="Model 3"
        description="Order Online For Touchless Delivery"
        backgroundImg="model-3.jpg"
        leftBtnText="CUSTOM ORDER"
        rightBtnText="EXISTING INVENTORY"
        show={false}
      />
      <Section
        title="Model X"
        description="Order Online For Touchless Delivery"
        backgroundImg="model-x.jpg"
        leftBtnText="CUSTOM ORDER"
        rightBtnText="EXISTING INVENTORY"
        show={false}
      />
      <Section
        title="Lowest Cost Solar Panels In America"
        description="Money-back guarantee"
        backgroundImg="solar-panel.jpg"
        leftBtnText="CUSTOM ORDER"
        rightBtnText="EXISTING INVENTORY"
        show={false}
      />
      <Section
        title="Solar For New Roofs"
        description="Solar Roof Costs Less Than a New Roof Plus Solar Panels"
        backgroundImg="solar-roof.jpg"
        leftBtnText="CUSTOM ORDER"
        rightBtnText="EXISTING INVENTORY"
        show={false}
      />
      <Section
        title="Accessories"
        backgroundImg="accessories.jpg"
        leftBtnText="CUSTOM ORDER"
        show={false}
        copywrite="
        Copywrite ©2023 | Made by Abdul Muizz
        "
      />
    </Container>
  );
}

export default Home;

const Container = styled.div`
  height: 100vh;
  width: 100;
`;
