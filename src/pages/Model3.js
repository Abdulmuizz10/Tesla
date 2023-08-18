import React from "react";
import styled from "styled-components";
import Subsection from "../components/Subsection";
import Interior from "../components/Interior";
import Cardsection from "../components/Cardsection";

const Model3 = () => {
  return (
    <Container>
      <Subsection
        title="Model 3"
        description="Order Online for Touchless Delivery"
        backgroundImg="model-3.jpg"
        rightBtnText="ORDER NOW"
      />
      <Interior title="All-New Interior" backgroundImg="new-interior.jpg" />
      <Cardsection />
    </Container>
  );
};

export default Model3;

const Container = styled.div`
  background: black;
`;
