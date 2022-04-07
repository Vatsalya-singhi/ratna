/* eslint-disable no-unreachable */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useRef } from 'react';

import Loader from 'react-loaders';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import emailjs from '@emailjs/browser';

import './footer.scss';

function Footer() {

    const {
        REACT_APP_DUMMY_LAT,
        REACT_APP_DUMMY_LNG,
        REACT_APP_EXACT_LAT,
        REACT_APP_EXACT_LNG,
        REACT_APP_SERVICE_ID,
        REACT_APP_TEMPLATE_ID,
        REACT_APP_USER_ID,
        REACT_APP_SOCIAL_FACEBOOK,
        REACT_APP_SOCIAL_MAIL,
        REACT_APP_SOCIAL_INSTAGRAM,
        REACT_APP_SOCIAL_PHONE,
    } = process.env;

    const form = useRef<any>();
    const position = [REACT_APP_DUMMY_LAT, REACT_APP_DUMMY_LNG];


    const sendEmail = (e: any) => {
        e.preventDefault();

        emailjs
            .sendForm(
                REACT_APP_SERVICE_ID ?? "",
                REACT_APP_TEMPLATE_ID ?? "",
                form.current,
                REACT_APP_USER_ID
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
            <div className="container">

                <section className="row p-4" >

                    <div className='text-center my-2'>
                        <h5 className='my-2 px-2'>Connect with us! </h5>
                    </div>

                    {/* Contact form */}
                    <div className="contact-form col-lg-6 col-md-6 col-sm-12 mb-2">

                        <div className='text-center my-2'>
                            <h5 className='my-2 px-2'>Contact Form</h5>
                        </div>

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
                    <div className="map-wrap col-lg-6 col-md-6 col-sm-12 mb-2">
                        <MapContainer center={position} zoom={13}>
                            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                            <Marker position={position}>
                            </Marker>
                        </MapContainer>
                    </div>

                </section>

            </div>

            {/* Section: Social media */}
            <section className="mb-4 d-flex align-items-center justify-content-center">
                {/* Facebook */}
                <a className="btn btn-outline-light btn-floating m-1 my-2 social-btn" href={REACT_APP_SOCIAL_FACEBOOK} target='_blank' role="button" rel="noreferrer">
                    <i className="fab fa-facebook-f" />
                </a>
                {/* Google */}
                <a className="btn btn-outline-light btn-floating m-1 my-2 social-btn" href={REACT_APP_SOCIAL_MAIL} target='_blank' role="button" rel="noreferrer">
                    <i className="fab fa-google" />
                </a>
                {/* Instagram */}
                <a className="btn btn-outline-light btn-floating m-1 my-2 social-btn" href={REACT_APP_SOCIAL_INSTAGRAM} target='_blank' role="button" rel="noreferrer">
                    <i className="fab fa-instagram" />
                </a>
                {/* Phone */}
                <a className="btn btn-outline-light btn-floating m-1 my-2 social-btn" href={REACT_APP_SOCIAL_PHONE} target='_blank' role="button" rel="noreferrer">
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