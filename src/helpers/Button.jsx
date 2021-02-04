import React from "react";
import styled from "styled-components";

const SubmitButton = styled.button`
  padding: 1.2rem 1.8rem;
  background-color: ${({ theme }) => theme.colors.cyan};
  font-weight: 800;
  font-size: 1.5rem;
  line-height: 2.5rem;
  text-align: center;
  vertical-align: top;
  display: inline-block;
  color: ${({ theme }) => theme.colors.darkblue};
  border: none;
  outline: none;
  border-radius: 2.4rem;
  font-family: ${({ theme }) => theme.fonts.manrope};
  transition: 0.2s all;
  cursor: pointer;
  &:hover {
    color: ${({ theme }) => theme.colors.white};
    box-shadow: inset 0 0 0 2px ${({ theme }) => theme.colors.cyan};
    background-color: ${({ theme }) => theme.colors.verydarkblue};
  }
`;

const Button = ({ text }) => {
  return <SubmitButton type="submit">{text}</SubmitButton>;
};

export default Button;
