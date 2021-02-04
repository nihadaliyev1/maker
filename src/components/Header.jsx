import React from "react";
import styled from "styled-components";
import Container from "../helpers/Container";

const Headerr = styled.header`
  padding-top: 8.5rem;
  @media only screen and (max-width: 770px) {
    padding-top: 4rem;
  }
`;
const LogoBox = styled.div`
  @media only screen and (max-width: 770px) {
    display: flex;
    justify-content: center;
  }
`;
const Logo = styled.img.attrs({
  src: require("../assets/logo.svg").default,
  alt: "Logo",
})``;

const Link = styled.a.attrs({ href: "/" })``;

const Header = () => {
  return (
    <Headerr>
      <Container size="normal">
        <LogoBox>
          <Link>
            <Logo />
          </Link>
        </LogoBox>
      </Container>
    </Headerr>
  );
};

export default Header;
