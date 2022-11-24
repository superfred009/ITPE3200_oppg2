import React, { Component } from 'react';

export function validerBrukernavn(brukernavn) {
    const regexp = /^[a-zA-ZæøåÆØÅ\.\ \-]{2,20}/;
    const ok = regexp.test(brukernavn);
    if (!ok) {
        return false;
    }
    else {
        return true;
    }
}

export function validerPassord(passord) {
    const regexp = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;
    const ok = regexp.test(passord);
    if (!ok) {
        return false;
    }
    else {
        return true;
    }
}
