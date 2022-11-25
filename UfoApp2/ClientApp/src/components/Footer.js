﻿import React, { Component } from 'react';
import "./Footer.css";

export class Footer extends Component {
    static displayName = Footer.name;

    render() {
        return (
			<footer className="footer-distributed">

				<div className="footer-left">

					<h3>Company<span>logo</span></h3>

					<p className="footer-links">
						<a href="#">Home</a>
						.
						<a href="#">Blog</a>
						·
						<a href="#">About</a>
						·
						<a href="#">Faq</a>
						·
						<a href="#">Contact</a>
					</p>

					<p className="footer-company-name">Gruppe 7 ITPE3200 © 2022</p>

					<div className="footer-icons">

						<a href="#"><i className="fa fa-facebook"></i></a>
						<a href="#"><i className="fa fa-twitter"></i></a>
						<a href="#"><i className="fa fa-linkedin"></i></a>
						<a href="#"><i className="fa fa-github"></i></a>

					</div>

				</div>

				<div className="footer-right">

					<p>Contact Us</p>

					<form action="#" method="post">
						<input type="text" name="email" placeholder="Email"/>
						<textarea name="message" placeholder="Message"></textarea>
						<button>Send</button>
					</form>
				</div>

			</footer>
        );
    }
}



