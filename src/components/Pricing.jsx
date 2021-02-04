import React from "react";
import SectionHeader from "./SectionHeader";
import styled from "styled-components";
import Container from "../helpers/Container";

const Section = styled.section`
  padding-top: 20.2rem;

  @media only screen and (max-width: 770px) {
    padding-top: 14.4rem;
`;

const CardList = styled.ul`
  display: flex;
  justify-content: space-between;
  list-style: none;
  margin-top: 7.2rem;
  align-items: center;
  @media only screen and (max-width: 770px) {
    flex-direction: column;
  }
`;

const Card = styled.li`
  width: 48.3%;
  background-color: ${({ theme, big }) =>
    big ? theme.colors.cyan : theme.colors.darkblue};
  padding: ${({ big }) => (big ? 6 : 4.9)}rem 3.85rem;
  border-radius: 8px;
  position: relative;
  transition: 0.3s all;

  &:hover {
    transform: scale(1.05)
      translate(${({ big }) => (big ? "2rem" : "-2rem")}, -2rem);
  }
  @media only screen and (max-width: 770px) {
    width: 60.3%;
    &:not(:last-child) {
      margin-bottom: 4rem;
    }
  }
  @media only screen and (max-width: 770px) {
    padding: ${({ big }) => (big ? 4 : 3)}rem 3.85rem;
  }
  @media only screen and (max-width: 520px) {
    width: 85.3%;
  }
  @media only screen and (max-width: 380px) {
    width: 100%;
  }
`;

const CardTitle = styled.h3`
  font-weight: 800;
  font-size: 1.8rem;
  line-height: 2.5rem;
  margin-bottom: 2.4rem;
  margin-top: 2rem;
  color: ${({ theme, big }) =>
    big ? theme.colors.verydarkblue : theme.colors.white};
  @media only screen and (max-width: 770px) {
    font-size: 1.7rem;
  }
`;

const Paragraph = styled.p`
  font-weight: 400;
  font-size: 1.5rem;
  line-height: 2.5rem;
  color: ${({ theme }) => theme.colors.darkgray};
  margin-bottom: 2.4rem;
  color: ${({ theme, big }) =>
    big ? theme.colors.verydarkblue : theme.colors.white};
  @media only screen and (max-width: 770px) {
    font-size: 1.4rem;
  }
`;

const PriceText = styled.p`
  font-weight: 800;
  font-size: 4rem;
  line-height: 5.5rem;
  margin-bottom: 1.9rem;
  color: ${({ theme, big }) =>
    big ? theme.colors.verydarkblue : theme.colors.white};
`;

const FeaturesList = styled.ul`
  list-style: none;
`;

const FeaturesListItem = styled.li`
  font-weight: 400;
  font-size: 1.5rem;
  line-height: 2.5rem;
  position: relative;
  margin-bottom: 1.2rem;
  color: ${({ theme, big }) =>
    big ? theme.colors.verydarkblue : theme.colors.white};
  &::before {
    content: "";
    position: absolute;
    width: 1.2rem;
    height: 8px;
    background-image: url(${({ big }) =>
      big
        ? require("../assets/icon-check.svg").default
        : require("../assets/icon-check-light.svg").default});
    left: -2rem;
    top: 1rem;
  }
`;

const CardDecorationBox = styled.div`
  position: absolute;
  left: 4rem;
  top: ${({ big }) => (big ? -3.4 : -2.4)}rem;
  z-index: 1;
`;
const CardDecoration = styled.img.attrs({ alt: "" })`
  max-width: 100%;
  height: 100%;
`;

const Super = styled.sup`
  font-weight: 400;
  font-size: 1.5rem;
  line-height: 2.5rem;
  margin-left: 8px;
`;

const Pricing = () => {
  return (
    <Section>
      <SectionHeader
        title="Our pricing plans"
        paragraph="We only make money when our creators make money. Our plans are always affordable, and it’s completely free to get started."
      />
      <Container size="medium">
        <CardList>
          <Card>
            <CardDecorationBox>
              <CardDecoration
                src={require("../assets/icon-free.svg").default}
              />
            </CardDecorationBox>
            <CardTitle>Dip your toe</CardTitle>
            <Paragraph>
              Just getting started? No problem at all! Our free plan will take
              you a long way.
            </Paragraph>
            <PriceText>Free</PriceText>
            <FeaturesList>
              <FeaturesListItem>Unlimited products</FeaturesListItem>
              <FeaturesListItem>Basic analytics</FeaturesListItem>
              <FeaturesListItem>Limited marketplace exposure</FeaturesListItem>
              <FeaturesListItem>10% fee per transaction</FeaturesListItem>
            </FeaturesList>
          </Card>
          <Card big>
            <CardDecorationBox big>
              <CardDecoration
                src={require("../assets/icon-paid.svg").default}
              />
            </CardDecorationBox>
            <CardTitle big>Dive right in</CardTitle>
            <Paragraph big>
              Ready for the big time? Our paid plan will help you take your
              business to the next level.
            </Paragraph>
            <PriceText big>
              $25.00<Super>/ month</Super>
            </PriceText>
            <FeaturesList>
              <FeaturesListItem big>Custom domain</FeaturesListItem>
              <FeaturesListItem big>
                Advanced analytics and reports
              </FeaturesListItem>
              <FeaturesListItem big>
                High marketplace visibility
              </FeaturesListItem>
              <FeaturesListItem big>5% fee per transaction</FeaturesListItem>
            </FeaturesList>
          </Card>
        </CardList>
      </Container>
    </Section>
  );
};

export default Pricing;
