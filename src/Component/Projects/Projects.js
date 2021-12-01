import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Projects.css'

const Projects = () => {
    const [projects, setProjects] = useState([])
    useEffect(() => {
        fetch("./projects.json")
            .then(res => res.json())
            .then(data => setProjects(data))
    }, [])

    AOS.init({
        offset: 100,
        duration: 1000,
        easing: "ease"
    })
    console.log(projects);
    return (
        <Container style={{ color: "white" }} className="intro mt-5 mb-5">
            <div className="line-sec w-25 "></div>
            <h1 id="projects" className className="mt-4 mb-5">Projects</h1>
            <Row xs={1} md={3} className="g-4">
                {
                    projects.map(project => <Col>
                        <Card  data-aos="fade-up" className="card-section p-2 h-100">
                            <img className="img-section p-2" src={project.img1} alt="" />
                            <h5 className="my-2">{project.project_name}</h5>
                            <Link to={`/projects/details/${project.id}`}><button className="btn-proj mt-2  text-direction-none ">View Projects</button></Link>
                        </Card>
                    </Col>)
                }
            </Row>

        </Container>
    );
};

export default Projects;