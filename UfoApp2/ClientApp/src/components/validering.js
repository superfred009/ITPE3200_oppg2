import React, { Component } from "react";

export function validerBrukernavn(brukernavn) {
  const regexp = /^[a-zA-ZæøåÆØÅ\.\ \-]{2,20}/;
  const ok = regexp.test(brukernavn);
  if (!ok) {
    return false;
  } else {
    return true;
  }
}

export function validerPassord(passord) {
  const regexp = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;
  const ok = regexp.test(passord);
  if (!ok) {
    return false;
  } else {
    return true;
  }
}

export const slettEn = (id) => {
  fetch("ufo/slett?id=" + id)
    .then((res) => res.json())
    .then(
      (result) => {
        if (result.status === 401) {
          //window.location.href = "/logg-inn";
          console.log(result);
        }
      },
      (error) => {
        if (error.status === 401) {
          console.log(result);
          //window.location.href = "/logg-inn";
        }
      }
    );
};

export const loggInn = (brukernavn, passord) => {
  const bruker = JSON.stringify({
    Brukernavn: brukernavn,
    Passord: passord,
  });
  fetch("ufo/LoggInn", {
    method: `POST`,
    headers: {
      "Content-Type": "application/json",
    },
    body: bruker,
  })
    .then((res) => res.json())
    .then(
      (result) => {
        console.log("Resultatet", result);
      },
      (error) => {
        console.log("Errors fra kallet", error);
      }
    );
};
