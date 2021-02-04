import React from "react";
import styled from "styled-components";

const Container = styled.div`
  max-width: ${({ size }) => {
    switch (size) {
      case "small":
        return 60;
      case "medium":
        return 95;
      case "verysmall":
        return 51;
      default:
        return 114;
    }
  }}rem;
  margin: 0 auto;
  padding: 0 1.5rem;
  width: 100%;
`;

const Wrapper = ({ className, children, size }) => {
  return (
    <Container size={size} className={className}>
      {children}
    </Container>
  );
};

export default Wrapper;
