import React, { useState, useEffect } from "react";
import { FormGroup, Label, Button, Container } from "reactstrap";
import { Formik, Field, Form, ErrorMessage } from "formik";
import "../custom.css";
import { useParams } from "react-router-dom";

export const EditUfoForm = () => {
  const [observasjon, setObservasjon] = useState([]);
  const [loading, setLoading] = useState(true);
  const params = useParams();

  window.scrollTo(0, 0);

  useEffect(() => {
    const ac = new AbortController();
    async function fetchData() {
      const response = await fetch("ufo/hentEn?id=" + params.id);
      const data = await response.json();
      setObservasjon(data);
      setLoading(false);
    }
    fetchData();
    ac.abort();
  }, []);

  if (loading) {
    return (
      <p>
        <em>Laster inn...</em>
      </p>
    );
  } else {
    return (
      <Container>
        <Formik
          initialValues={{
            tittel: observasjon.tittel,
            sted: observasjon.sted,
            dato: observasjon.dato,
            beskrivelse: observasjon.beskrivelse,
          }}
          validate={(values) => {
            const errors = {};
            if (values.tittel.trim().length < 1) {
              errors.tittel = "Required";
            }
            if (values.sted.trim().length < 1) {
              errors.sted = "Required";
            }
            if (values.dato.trim().length < 1) {
              errors.dato = "Required";
            }
            if (values.beskrivelse.trim().length < 1) {
              errors.beskrivelse = "Required";
            }
            return errors;
          }}
          onSubmit={(values) => {
            const observasjon = {
              tittel: values.tittel,
              sted: values.sted,
              dato: values.dato,
              beskrivelse: values.beskrivelse,
            };
            fetch("ufo/lagre", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(observasjon),
            })
              .then(fetch("ufo/slett?id=" + params.id))
              .then((window.location.href = "/admin"));
          }}
        >
          {({ values, errors, handleChange, handleBlur, handleSubmit }) => (
            <Form onSubmit={handleSubmit}>
              <FormGroup>
                <Label htmlFor="tittel">Tittel</Label>
                <Field
                  name="tittel"
                  type="text"
                  className="form-control"
                  id="tittel"
                  placeholder="Tittel"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.tittel}
                />
                <ErrorMessage
                  className="error-msg"
                  name="tittel"
                  component={Label}
                />
              </FormGroup>
              <FormGroup>
                <Label htmlFor="sted">Sted</Label>
                <Field
                  name="sted"
                  type="text"
                  className="form-control"
                  id="sted"
                  placeholder="Sted"
                  onChange={handleChange}
                />
                <ErrorMessage
                  className="error-msg"
                  name="sted"
                  component={Label}
                />
              </FormGroup>
              <FormGroup>
                <Label htmlFor="dato">Dato</Label>
                <Field
                  name="dato"
                  type="date"
                  className="form-control"
                  id="dato"
                  placeholder="Dato"
                  onChange={handleChange}
                />
                <ErrorMessage
                  className="error-msg"
                  name="dato"
                  component={Label}
                />
              </FormGroup>
              <FormGroup>
                <Label htmlFor="beskrivelse">Beskrivelse</Label>
                <Field
                  as="textarea"
                  rows="3"
                  className="form-control"
                  onChange={handleChange}
                  name="beskrivelse"
                  id="beskrivelse"
                />
                <ErrorMessage
                  className="error-msg"
                  name="beskrivelse"
                  component={Label}
                />
              </FormGroup>
              <Button
                type="submit"
                className="btn btn-primary"
                disabled={
                  errors.tittel ||
                  errors.sted ||
                  errors.dato ||
                  errors.beskrivelse
                }
              >
                Submit
              </Button>
            </Form>
          )}
        </Formik>
      </Container>
    );
  }
};
