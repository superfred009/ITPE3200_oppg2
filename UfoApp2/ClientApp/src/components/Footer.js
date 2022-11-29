import React from "react";
import "./Footer.css";
import logofooter from "../images/alien_transparent.png"

export const Footer = () => {
  return (
    <footer className="footer-body">
      <div className="footer-gruppenavn">
        <p>Gruppe 7 ITPE3200 © 2022</p>
          </div>
          <img src={logofooter} alt="logo-footer" className="alien-logo" />
        <div className="footer-links">
              <a href="#">Spørsmål om UFO-er?</a>
              <a href="#">Problemer med å logge inn?</a>
              <a href="#">Tips oss!</a>
        </div>
    </footer>
  );
};
