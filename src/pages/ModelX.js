import React from "react";
import styled from "styled-components";
import Subsection from "../components/Subsection";
import Interior from "../components/Interior";
import Cardsection from "../components/Cardsection";

const ModelX = () => {
  return (
    <Container>
      <Subsection
        title="Model X"
        description="Order Online for Touchless Delivery"
        backgroundImg="model-x.jpg"
        rightBtnText="ORDER NOW"
      />
      <Interior title="All-New Interior" backgroundImg="new-interior.jpg" />
      <Cardsection />
    </Container>
  );
};

export default ModelX;

const Container = styled.div`
  background: black;
`;
