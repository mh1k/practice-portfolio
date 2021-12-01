import React, { useEffect } from 'react';
import Typewriter from 'typewriter-effect';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Header.css'
import { Container } from 'react-bootstrap';

const Header = () => {

    AOS.init({
        offset: 100,
        duration: 1000,
        easing: "ease"
    })

    return (
        <Container  className="text-light d-flex align-items-center  header-section    intro">
            <div data-aos="fade-down-right">
                <h5 className="h6">HI THERE I'M</h5>
                <h1>Mahmudul Hasan</h1>
                <div className="d-md-flex">
                    <h3  >I'm Passionate </h3>
                    <h3 className="ms-md-3" style={{ color: 'tomato' }}>
                        <Typewriter
                            options={{
                                strings: ['Junior Web Developer', 'Frontend Developer', 'React Developer'],
                                autoStart: true,
                                loop: true,
                            }}
                        />
                    </h3>
                </div>
                <h5 className="intro h5">I create successful websites that are fast, easy to use, and built with best practices. I love learning and implementing according to time.</h5>
                <button className="btn-grad mt-2 text-direction-none "><a className="resume" href="https://drive.google.com/file/d/13gNJqNILtYTdQ8WU_nN6GMjzfPODnc7W/view" target="_blank">Resume</a></button>
            </div>



        </Container>
    );
};

export default Header;