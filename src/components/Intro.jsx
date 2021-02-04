import React from "react";
import styled, { css } from "styled-components";
import { useMediaQuery } from "react-responsive";

const Section = styled.section`
  padding-top: 11.5rem;
  position: relative;
  overflow: hidden;
  padding-bottom: 20rem;
  display: flex;
  justify-content: space-around;
  @media only screen and (max-width: 770px) {
    flex-direction: column;
    align-items: center;
    padding-top: 2.5rem;
    padding-bottom: 11rem;
  }
`;

const Heading = styled.h2`
  font-weight: 800;
  font-size: 4.8rem;
  line-height: 5.6rem;
  text-align: center;
  transition: 0.2s all;
  &:hover {
    transform: skew(4deg, 2deg);
  }
  @media only screen and (max-width: 1220px) {
    font-size: 4.5rem;
  }
  @media only screen and (max-width: 1140px) {
    font-size: 4rem;
  }
  @media only screen and (max-width: 980px) {
    font-size: 3.5rem;
  }
  @media only screen and (max-width: 880px) {
    font-size: 3.2rem;
  }
  @media only screen and (max-width: 770px) {
    font-size: 4rem;
    margin-top: 5rem;
  }
  @media only screen and (max-width: 420px) {
    font-size: 3.5rem;
    margin-top: 2rem;
  }
  @media only screen and (max-width: 360px) {
    font-size: 3rem;
  }
  @media only screen and (max-width: 320px) {
    font-size: 2.6rem;
  }
  @media only screen and (max-width: 280px) {
    font-size: 2.3rem;
  }
`;

const ContentWrapper = styled.div`
  align-self: center;
  max-width: 100%;
  width: 57rem;
  padding: 0 1.5rem;
`;

const DecorationBox = styled.div`
  position: absolute;
  top: 35%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -1;
  @media only screen and (max-width: 770px) {
    display: none;
  }
`;

const Paragraph = styled.p`
  font-style: normal;
  font-weight: 500;
  font-size: 1.5rem;
  line-height: 2.5rem;
  color: ${({ theme }) => theme.colors.darkgray};
  text-align: center;
  margin-top: 2.5rem;
  transition: 0.2s all;
  @media only screen and (max-width: 980px) {
    font-size: 1.4rem;
  }
  @media only screen and (max-width: 880px) {
    font-size: 1.2rem;
    margin-top: 1.8rem;
  }
  @media only screen and (max-width: 770px) {
    font-size: 1.5rem;
  }
  @media only screen and (max-width: 360px) {
    font-size: 1.4rem;
  }

  &:hover {
    transform: scale(1.05);
  }
`;

const DecoratedText = styled.span`
  color: ${({ theme }) => theme.colors.cyan};
`;

const DecorationImage = styled.img.attrs({
  alt: "",
})`
  max-width: 100%;
  height: auto;
`;

const DecorationSideBox = styled.div`
  position: relative;
  ${(props) =>
    props.left
      ? css`
          order: 1;
          @media only screen and (max-width: 1440px) {
            right: -7rem;
          }
          @media only screen and (max-width: 1220px) {
            right: -10rem;
          }
          @media only screen and (max-width: 770px) {
            order: -1;
            right: 0;
          }
        `
      : css`
          order: -1;
          @media only screen and (max-width: 1440px) {
            left: -7rem;
          }
          @media only screen and (max-width: 1220px) {
            left: -10rem;
          }
          @media only screen and (max-width: 770px) {
            left: 0;
          }
        `}
`;

const DecorationScrollBox = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 6.5rem;
  @media only screen and (max-width: 1140px) {
    margin-top: 4rem;
  }
  @media only screen and (max-width: 980px) {
    margin-top: 3rem;
  }
  @media only screen and (max-width: 880px) {
    margin-top: 2rem;
  }
  @media only screen and (max-width: 770px) {
    margin-top: 3rem;
  }
`;

const DecorationsWrapper = styled.div`
  display: flex;
  align-items: center;
`;
const Intro = () => {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 770px)" });
  return (
    <React.Fragment>
      <Section>
        {isTabletOrMobile ? (
          <DecorationsWrapper>
            <DecorationSideBox left>
              <DecorationImage
                src={require("../assets/illustration-hero-right.svg").default}
              />
            </DecorationSideBox>
            <DecorationSideBox>
              <DecorationImage
                src={require("../assets/illustration-hero-left.svg").default}
              />
            </DecorationSideBox>
          </DecorationsWrapper>
        ) : (
          <React.Fragment>
            <DecorationSideBox left>
              <DecorationImage
                src={require("../assets/illustration-hero-right.svg").default}
              />
            </DecorationSideBox>
            <DecorationSideBox>
              <DecorationImage
                src={require("../assets/illustration-hero-left.svg").default}
              />
            </DecorationSideBox>
          </React.Fragment>
        )}

        <ContentWrapper>
          <DecorationBox>
            <DecorationImage
              src={require("../assets/bg-hero-squiggle.svg").default}
            />
          </DecorationBox>
          <div>
            <Heading>
              Get paid for the work you <DecoratedText>love</DecoratedText> to
              do.
            </Heading>
            <Paragraph>
              The 9-5 grind is so last century. We believe in living life on
              your own terms. Whether you’re looking to escape the rat race or
              set up a side hustle, we’ve got you covered.
            </Paragraph>
            <DecorationScrollBox>
              <DecorationImage
                src={require("../assets/icon-scroll.svg").default}
              />
            </DecorationScrollBox>
          </div>
        </ContentWrapper>
      </Section>
    </React.Fragment>
  );
};

export default Intro;
