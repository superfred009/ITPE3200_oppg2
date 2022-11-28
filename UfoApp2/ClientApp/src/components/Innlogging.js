import React from "react";
import { FormGroup, Label, Button, Container } from "reactstrap";
import { Formik, Field, Form, ErrorMessage } from "formik";
import "../custom.css";
import { loggInn } from "./validering";

export const Innlogging = () => {
  return (
    <Container>
      <Formik
        initialValues={{
          brukernavn: "",
          passord: "",
        }}
        onSubmit={(values) => {
          loggInn(values.brukernavn, values.passord);

          // const bruker = {
          //   bruker: values.brukernavn,
          //   passord: values.passord,
          // };
          // fetch("ufo/LoggInn", JSON.stringify(bruker)).then((response) => {
          //   if (response.ok) {
          //     window.location.href = "/admin";
          //   } else {
          //     alert("Feil brukernavn eller passord");
          //   }
          // });
        }}
      >
        {({ values, handleChange, handleBlur, handleSubmit }) => (
          <Form onSubmit={handleSubmit}>
            <FormGroup>
              <Label htmlFor="brukernavn">Brukernavn</Label>
              <Field
                name="brukernavn"
                type="text"
                className="form-control"
                id="brukernavn"
                placeholder="Brukernavn"
                onChange={handleChange}
                onBlur={handleBlur}
                values={values.brukernavn}
              />
              <ErrorMessage
                className="error-msg"
                name="brukernavn"
                Component={Label}
              />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="passord">Passord</Label>
              <Field
                name="passord"
                type="password"
                className="form-control"
                id="passord"
                placeholder="Passord"
                onChange={handleChange}
                onBlur={handleBlur}
                values={values.passord}
              />
              <ErrorMessage
                className="error-msg"
                name="passord"
                Component={Label}
              />
            </FormGroup>
            <Button type="submit" className="btn btn-primary">
              Logg Inn
            </Button>
          </Form>
        )}
      </Formik>
    </Container>
  );
};
