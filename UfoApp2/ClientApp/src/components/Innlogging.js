import React from "react";
import { FormGroup, Label, Button, Container } from "reactstrap";
import { Formik, Field, Form, ErrorMessage } from "formik";
import "../custom.css";

export const Innlogging = () => {
  return (
    <Container>
      <Formik
        initialValues={{
          brukernavn: "",
          passord: "",
        }}
        onSubmit={(values) => {
          const bruker = {
            bruker: values.brukernavn,
            passord: values.passord,
          };
          fetch("ufo/LoggInn", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(bruker),
          }).then((response) => {
            if (response.ok) {
              this.props.history.push("/admin");
            } else {
              alert("Prøv på nytt!");
            }
          });
        }}
      >
        {({ values, errors, handleChange, handleBlur, handleSubmit }) => (
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
                id="brukernavn"
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
