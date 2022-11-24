import React, { Component } from 'react';
import validerBrukernavn from './validering';
import validerPassord from './validering';
import { FormGroup, Label, Input, Button, Container } from "reactstrap";
import { Formik, Field, Form, ErrorMessage } from "formik";
import "../custom.css";

export class Innlogging extends Component {
    static displayName = Innlogging.name;

    render() {
        return (
            <Container>
                <Formik
                    initialValues={{
                        brukernavn: "",
                        passord: "",
                    }}
                    validate={(values) => {
                        const errors = {};
                        if (!validerBrukernavn(values.brukernavn)) {
                            errors.brukernavn = "Brukernavnet er feil";
                        }
                        if (!validerPassord(values.passord)) {
                            errors.passord = "Passordet er feil";
                        }
                        return errors;
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
                                alert("Du logget inn!");
                            }
                            else {
                                alert("Du logget IKKE inn!");
                            }       
                        });
                    }}
                >
                {({ values, errors, handleChange, handleBlur, handleSubmit }) => {
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
                        <Button
                            type="submit"
                            className="btn btn-primary"
                        >
                            Logg Inn
                        </Button>

                    </Form>
                }}
            </Formik>
         </Container>
        );
    }
}