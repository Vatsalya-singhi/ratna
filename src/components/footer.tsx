/* eslint-disable no-unreachable */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useRef } from 'react';

import Loader from 'react-loaders';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import emailjs from '@emailjs/browser';

import './footer.scss';

function Footer() {

    const form = useRef<any>();
    // const position = [13.089833, 80.244910]; // exact location
    const position = [13.087983, 80.243387]; // dummy location

    const sendEmail = (e: any) => {
        e.preventDefault();

        emailjs
            .sendForm(
                'service_bh8gy5s',
                'template_2152c7l',
                form.current,
                'tuVasZSoCGouqSOn2'
            )
            .then(() => {
                alert('Message successfully sent!');
                window.location.reload();
            }).catch((err) => {
                alert('Failed to send the message, please try again');
            })
    }

    return (
        <footer id='contact' className="bg-dark text-center text-white">
            <div className="container p-4">

                {/* Section: Form */}
                <section className="contact-page" >

                    {/* Contact form */}
                    <div className="contact-form">
                        <form ref={form} onSubmit={sendEmail}>
                            <ul>
                                <li className="half">
                                    <input placeholder="Name" type="text" name="from_name" id='from_name' required />
                                </li>
                                <li className="half">
                                    <input
                                        placeholder="Email"
                                        type="email"
                                        name="from_email"
                                        id="from_email"
                                        required
                                    />
                                </li>
                                <li>
                                    <input
                                        placeholder="Subject"
                                        type="text"
                                        name="subject"
                                        id="subject"
                                        required
                                    />
                                </li>
                                <li>
                                    <textarea
                                        placeholder="Message"
                                        name="message"
                                        id="message"
                                        required
                                    ></textarea>
                                </li>
                                <li>
                                    <input type="submit" className="flat-button" value="SEND" />
                                </li>
                            </ul>
                        </form>
                    </div>

                    {/* Maps */}
                    <div className="map-wrap">
                        <MapContainer center={position} zoom={13}>
                            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                            <Marker position={position}>
                            </Marker>
                        </MapContainer>
                    </div>

                </section>
                {/* Section: Form */}

            </div>
            {/* Grid container */}


            {/* Section: Social media */}
            <section className="mb-4 d-flex align-items-center justify-content-center">
                {/* Facebook */}
                <a className="btn btn-outline-light btn-floating m-1" href="https://www.facebook.com/vatsalya.singhi" target='_blank' role="button" rel="noreferrer">
                    <i className="fab fa-facebook-f" />
                </a>
                {/* Google */}
                <a className="btn btn-outline-light btn-floating m-1" href="mailto:vatsalya.singhi@gmail.com" target='_blank' role="button" rel="noreferrer">
                    <i className="fab fa-google" />
                </a>
                {/* Instagram */}
                <a className="btn btn-outline-light btn-floating m-1" href="https://www.instagram.com/vatsalya_singhi/" target='_blank' role="button" rel="noreferrer">
                    <i className="fab fa-google" />
                </a>
                {/* Phone */}
                <a className="btn btn-outline-light btn-floating m-1" href="tel:+91 7010961854" target='_blank' role="button" rel="noreferrer">
                    {/* <i className="fa fa-phone" /> */}
                    <i className="fas fa-phone-alt"></i>
                </a>
            </section>
            {/* Section: Social media */}

            {/* Copyright */}
            <div className="text-center p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
                © 2022 Copyright:
                <a className="text-white" href="https://mdbootstrap.com/"> Ratna Pvt Ltd</a>
            </div>

        </footer>
    )
}

export default Footer;