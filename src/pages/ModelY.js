import React from "react";
import styled from "styled-components";
import Subsection from "../components/Subsection";
import Interior from "../components/Interior";
import Cardsection from "../components/Cardsection";

const ModelY = () => {
  return (
    <Container>
      <Subsection
        title="Model Y"
        description="Order Online for Touchless Delivery"
        backgroundImg="model-y.jpg"
        rightBtnText="ORDER NOW"
      />
      <Interior title="All-New Interior" backgroundImg="new-interior.jpg" />
      <Cardsection />
    </Container>
  );
};

export default ModelY;

const Container = styled.div`
  background: black;
`;
