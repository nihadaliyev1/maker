import React from "react";
import styled from "styled-components";
import { Field, ErrorMessage, Formik, Form } from "formik";
import * as Yup from "yup";
import Container from "../helpers/Container";
import Button from "../helpers/Button";

const Section = styled.section`
  padding-top: 20rem;
  padding-bottom: 5rem;
  background-image: url(${require("../assets/bg-footer-squiggle.svg").default});
  background-repeat: no-repeat;
  background-position: 0% 120%;
  background-size: contain;
`;

const Title = styled.h2`
  font-weight: 800;
  font-size: 3.2rem;
  line-height: 4.4rem;
  text-align: center;
  margin-bottom: 4.2rem;
  transition: 0.2s all;
  &:hover {
    transform: skew(4deg, 2deg);
  }
  @media only screen and (max-width: 770px) {
    font-size: 2.4rem;
  }
`;

const ContentWrapper = styled.div``;

const initialValues = {
  email: "",
};

const validationSchema = Yup.object({
  email: Yup.string().email("Oops! That doesn’t look like an email address"),
});

const EmailInput = styled(Field).attrs({
  placeholder: "Email adress",
  name: "email",
  id: "email",
})`
  border-radius: 2.4rem;
  background-color: ${({ theme }) => theme.colors.darkblue};
  padding: 1.2rem 1.8rem;
  border: none;
  outline: none;
  width: 66.6%;
  font-weight: 800;
  font-family: ${({ theme }) => theme.fonts.manrope};
  box-shadow: ${({ formik, theme }) =>
    formik.errors.email && formik.touched.email
      ? `inset 0 0 0 2px ${theme.colors.crimsonred}`
      : ""};

  @media only screen and (max-width: 420px) {
    width: 100%;
    margin-bottom: 2.4rem;
  }
`;

const FormDesign = styled(Form)`
  width: 100%;
  display: flex;
  justify-content: space-between;
  position: relative;
  @media only screen and (max-width: 420px) {
    flex-direction: column;
  }
`;

const Error = styled.p`
  color: ${({ theme }) => theme.colors.crimsonred};
  position: absolute;
  font-weight: 400;
  font-size: 1.2rem;
  line-height: 2.5rem;
  bottom: -3rem;
  left: 1.5rem;
`;

const onSubmit = (values) => console.log(values);

const Contact = () => {
  return (
    <Section>
      <Container size="verysmall">
        <ContentWrapper>
          <Title>Get notified when we launch</Title>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
          >
            {(formik) => {
              console.log(formik);
              return (
                <FormDesign>
                  <EmailInput formik={formik} name="email" id="email" />
                  <ErrorMessage name="email">
                    {(error) => {
                      return <Error>{error}</Error>;
                    }}
                  </ErrorMessage>

                  <Button text="Get Notified" />
                </FormDesign>
              );
            }}
          </Formik>
        </ContentWrapper>
      </Container>
    </Section>
  );
};

export default Contact;
