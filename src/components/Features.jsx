import React from "react";
import styled from "styled-components";
import Container from "../helpers/Container";
import { useMediaQuery } from "react-responsive";

const Section = styled.section``;

const FeaturesList = styled.ul`
  display: flex;
  list-style: none;
  justify-content: space-between;
  @media only screen and (max-width: 770px) {
    flex-direction: column;
    align-items: center;
  }
`;
const Feature = styled.li`
  display: flex;
  flex-direction: column;
  width: 23%;
  transition: 0.2s all;

  &:nth-of-type(even) {
    margin-top: 5rem;
    @media only screen and (max-width: 770px) {
      margin-top: 0;
    }
  }

  &:hover {
    transform: scale(1.05);
    box-shadow: 15px 10px 10px rgba(9, 63, 104, 0.25);
  }
  @media only screen and (max-width: 770px) {
    width: 90.35%;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    &:nth-of-type(odd) {
      margin-left: 5.5rem;
      @media only screen and (max-width: 420px) {
        margin-left: 0;
      }
    }
    &:not(:last-child) {
      margin-bottom: 4rem;
    }
  }
  @media only screen and (max-width: 420px) {
    flex-direction: column;
    width: 100%;
  }
`;

const FeatureImgBox = styled.div`
  border-radius: 4.5rem;
  background-color: ${({ theme }) => theme.colors.darkblue};
  margin-bottom: 4.8rem;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 62.7%;
  min-height: 16rem;

  @media only screen and (max-width: 770px) {
    width: 23.3%;
    min-height: 12rem;

    margin-bottom: 0;
  }
  @media only screen and (max-width: 420px) {
    width: 32%;
    margin-bottom: 3.2rem;
  }
`;
const FeatureImg = styled.img.attrs({ alt: "" })`
  max-width: 100%;
  height: auto;
  @media only screen and (max-width: 770px) {
    max-width: 50%;
  }
  @media only screen and (max-width: 770px) {
    max-width: 60%;
  }
`;

const FeatureTitle = styled.h3`
  font-weight: 800;
  font-size: 1.8rem;
  line-height: 2.5rem;
  color: ${({ theme }) => theme.colors.white};
  margin-bottom: 2.3rem;
  @media only screen and (max-width: 970px) {
    font-size: 1.7rem;
  }
  @media only screen and (max-width: 770px) {
    font-size: 1.8rem;
    margin-bottom: 1.1rem;
  }
  @media only screen and (max-width: 470px) {
    font-size: 1.6rem;
  }
  @media only screen and (max-width: 420px) {
    text-align: center;
  }
`;

const FeatureParagraph = styled.p`
  font-weight: 400;
  font-size: 1.5rem;
  line-height: 2.5rem;
  color: ${({ theme }) => theme.colors.darkgray};
  @media only screen and (max-width: 970px) {
    font-size: 1.4rem;
  }
  @media only screen and (max-width: 770px) {
    font-size: 1.5rem;
  }
  @media only screen and (max-width: 470px) {
    font-size: 1.4rem;
  }
  @media only screen and (max-width: 420px) {
    text-align: center;
  }
`;

const ContentWrapper = styled.div`
  @media only screen and (max-width: 770px) {
    width: 66%;
  }
  @media only screen and (max-width: 420px) {
    width: 100%;
  }
`;

const Features = () => {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 770px)" });
  const small = isTabletOrMobile ? "small" : "";
  return (
    <React.Fragment>
      <Section>
        <Container size={small}>
          <FeaturesList>
            <Feature>
              <FeatureImgBox>
                <FeatureImg
                  src={require("../assets/illustration-passions.svg").default}
                />
              </FeatureImgBox>
              <ContentWrapper>
                <FeatureTitle>Indulge your passions</FeatureTitle>
                <FeatureParagraph>
                  Your passions shouldn't be just for the weekend. Earn a living
                  doing what you love.
                </FeatureParagraph>
              </ContentWrapper>
            </Feature>
            <Feature>
              <FeatureImgBox>
                <FeatureImg
                  src={
                    require("../assets/illustration-financial-freedom.svg")
                      .default
                  }
                />
              </FeatureImgBox>
              <ContentWrapper>
                <FeatureTitle>Gain financial freedom</FeatureTitle>
                <FeatureParagraph>
                  Start making money work for you. There’s nothing quite like
                  earning while you sleep.
                </FeatureParagraph>
              </ContentWrapper>
            </Feature>
            <Feature>
              <FeatureImgBox>
                <FeatureImg
                  src={require("../assets/illustration-lifestyle.svg").default}
                />
              </FeatureImgBox>
              <ContentWrapper>
                <FeatureTitle>Choose your lifestyles</FeatureTitle>
                <FeatureParagraph>
                  Own your daily schedule. Fancy a lie-in? Go for it! Take
                  charge of your week.
                </FeatureParagraph>
              </ContentWrapper>
            </Feature>
            <Feature>
              <FeatureImgBox>
                <FeatureImg
                  src={
                    require("../assets/illustration-work-anywhere.svg").default
                  }
                />
              </FeatureImgBox>
              <ContentWrapper>
                <FeatureTitle>Work from anywhere</FeatureTitle>
                <FeatureParagraph>
                  Selling online means not being pinned down. Want to work AND
                  travel? Go for it!
                </FeatureParagraph>
              </ContentWrapper>
            </Feature>
          </FeaturesList>
        </Container>
      </Section>
    </React.Fragment>
  );
};

export default Features;
