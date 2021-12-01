import React from 'react';
import Particles from 'react-particles-js';
import Aboutme from '../../Aboutme/Aboutme';
import Contact from '../../Contact/Contact';
import NavigationBar from '../../Home/NavigationBar/NavigationBar';
import ProjectsDetails from '../../ProjectDetails/ProjectsDetails';
import Projects from '../../Projects/Projects';

import Header from '../Header/Header';
import './Home.css'


const Home = () => {
    return (
        <div className="home-background">
            <NavigationBar></NavigationBar>
            <Header></Header>
            <Aboutme></Aboutme>
            <Projects></Projects>
            <Contact></Contact>
            
        </div>
    );
};

export default Home;