import React from 'react';
import { Container } from 'react-bootstrap';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Aboutme.css'

const Aboutme = () => {
    AOS.init({
        offset: 100,
        duration: 1000,
        easing: "ease"
    })

    return (
        <div>
            <Container className="intro mb-5 pb-5">
                <div className="line-sec w-25 "></div>
                <h1 id="about" className className="mt-3">About Me</h1>
                <div  className="mt-4">
                    <p data-aos="fade-right" className="aboutfont">Hi, I'm Mahmudul Hasan. Enthusiastic web developer eager to contribute to team success through hard work, attention to detail, and excellent organizational skills. A clear understanding of coding and web development. I wake up every morning excited to be as productive every day as I can.
                    I'm quietly confident, naturally curious, and perpetually working on improving my chops one design problem at a time. I am passionate about coding and solving problems through code, and I am excited to work alongside other amazing programmers and learn so much more!</p>
                    <div data-aos="fade-down">
                        <h3 data-aos="fade-down">Skills</h3>
                        <div className="d-flex flex-wrap slkillsw">
                            <p className="skilss">Javascript</p>
                            <p className="skilss">React JS</p>
                            <p className="skilss">Node JS</p>
                            <p className="skilss">React Router</p>
                            <p className="skilss">Mongo DB</p>
                            <p className="skilss">Firebase</p>
                            <p className="skilss">Rest API</p>
                            <p className="skilss">Express JS</p>
                            <p className="skilss">HTML</p>
                            <p className="skilss">CSS</p>
                            <p className="skilss">Bootstrap</p>
                            <p className="skilss">Tailwind</p>
                            <p className="skilss">Material UI</p>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Aboutme;