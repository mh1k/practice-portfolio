import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaFacebookSquare, FaGithubSquare, FaLinkedin } from "react-icons/fa";
import { Container, Form } from 'react-bootstrap';
import "./Contact.css"
import emailjs from 'emailjs-com';

const Contact = () => {

    AOS.init({
        offset: 70,
        duration: 1000,
        easing: "ease-in-sine"
    })

    const sendEmail = e => {

        e.preventDefault();
        emailjs.sendForm('service_wrxaac9', 'template_d9z8gul', e.target, 'user_oNOYjtEoQl5gLyPRtdwop')
            .then((result) => {
                console.log(result.text);

            }, (error) => {
                console.log(error.text);
            });
    }
    return (
        <div>
            <Container className="intro pt-5">
                <div>
                    <div className="line-sec w-25 "></div>
                    <h1 id="contact" className className="mt-3">Contact Me</h1>
                    <div className="row">
                        <div data-aos="fade-right"
                             className="col mt-5 col-md-6 col-12">
                            <div>
                                <h5>Email</h5>
                                <p>mahmudulhasan1k@gmail.com</p>
                            </div>
                            <div>
                                <h5>Phone</h5>
                                <p>+88 01401 006629</p>
                            </div>
                            <div>
                                <h5>Find Me</h5>
                                <div>
                                <a  className="social-link" href=""><FaFacebookSquare/></a><a  className="social-link" href=""><FaLinkedin/></a><a className="social-link"  href=""><FaGithubSquare/></a>
                                </div>
                            </div>
                        </div>
                        <div data-aos="fade-right"
                         
                             className="col col-md-6 col-12">
                            <form onSubmit={sendEmail}>
                                <Form.Control size="lg" id="rounded-redius" required className="mt-5" type="text" name="name" placeholder="Your Name" />
                                <Form.Control size="lg " id="rounded-redius" required className="mt-3" type="email" name="email" placeholder="Your Email" />
                                <Form.Control size="lg" id="rounded-redius" required className="mt-3" type="text" name="subject" placeholder="Subject" />
                                <Form.Control required className="mt-3" as="textarea" rows={3} placeholder="Message" name="message" />
                                <button className="mt-3 btn-submit" type="submit">submit</button>
                            </form>
                        </div>

                    </div>
                    <div className="">
                        <p className="mt-4 mb-0 pb-3 pt-5 text-center">Ⓒ 2021 All rights reserved. Mahmudul Hasan</p>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Contact;