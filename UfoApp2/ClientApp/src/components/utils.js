export const slettEn = async (id) => {
  await fetch("ufo/slett?id=" + id)
    .then((res) => res.json())
    .then(
      (result) => {
        if (result.status === 401) {
          window.location.href = "/logg-inn";
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

export const loggInn = async (brukernavn, passord) => {
  const bruker = JSON.stringify({
    Brukernavn: brukernavn,
    Passord: passord,
  });
  await fetch("ufo/LoggInn", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: bruker,
  })
    .then((res) => res.json())
    .then(
      (result) => {
        if (result=== true) {
          window.location.href = "/admin";
        } else {
          alert("Feil brukernavn eller passord");
        }
      },
      (error) => {
        console.log("Errors", error);
      }
    );
};

export const endreEn = async (id, tittel, sted, dato, beskrivelse) => {
  const observasjon = JSON.stringify({
    id: parseInt(id),
    tittel: tittel,
    sted: sted,
    dato: dato,
    beskrivelse: beskrivelse,
  });
  await fetch("ufo/endre", {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: observasjon,
  })
    .then(
      (result) => {
        if (result.status === 401) {
          window.location.href = "/logg-inn";
        } else {
          window.location.href = "/admin";
        }
      },
      (error) => {
        console.log("Errors", error);
      }
    );

}

export const lagreEn = async (tittel, sted, dato, beskrivelse) => {
  const observasjon = JSON.stringify({
    tittel: tittel,
    sted: sted,
    dato: dato,
    beskrivelse: beskrivelse,
  });
  await fetch("ufo/lagre", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: observasjon,
  })
    .then(
      (result) => {
        console.log("Resultatet", result);
        window.location.href = "/";
      },
      (error) => {
        console.log("Errors fra kallet", error);
      }
    );
}

export const hentAdminData = async (setObservasjoner, setLoading) => {
  await fetch("ufo/HentAllePrivate")
    .then((res) => res.json())
    .then(
      (result) => {
        if (result.status === 401) {
          window.location.href = "/logg-inn";
        } else {
          setObservasjoner(result);
          setLoading(false);
        }
      },
      (error) => {
        console.log("Errors", error);
      }
    );
}