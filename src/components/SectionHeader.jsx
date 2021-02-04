import React from "react";
import Container from "../helpers/Container";
import styled from "styled-components";

const Header = styled.header``;

const Title = styled.h2`
  font-weight: 800;
  font-size: 3.2rem;
  line-height: 4.4rem;
  text-align: center;
  color: ${({ theme }) => theme.colors.white};
  margin-bottom: 2.4rem;
  transition: 0.2s all;
  &:hover {
    transform: skew(4deg, 2deg);
  }
`;

const Paragraph = styled.p`
  font-weight: 400;
  font-size: 1.5rem;
  line-height: 2.5rem;
  text-align: center;
  color: ${({ theme }) => theme.colors.darkgray};
`;

const ContentWrapper = styled.div``;

const SectionHeader = ({ title, paragraph }) => {
  return (
    <Header>
      <Container size="small">
        <ContentWrapper>
          <Title>{title}</Title>
          <Paragraph>{paragraph}</Paragraph>
        </ContentWrapper>
      </Container>
    </Header>
  );
};

export default SectionHeader;
