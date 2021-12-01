import React, { useEffect, useState } from 'react';
import { Carousel, Container } from 'react-bootstrap';
import { useParams } from 'react-router';
import AOS from 'aos';
import 'aos/dist/aos.css';
import NavigationBar from '../Home/NavigationBar/NavigationBar';

const ProjectsDetails = () => {
    const [projects, setProjects] = useState([])
    const { project_id } = useParams();

    useEffect(() => {
        fetch("/projects.json")
            .then(res => res.json())
            .then(data => setProjects(data))
    }, [])

    AOS.init({
        offset: 100,
        duration: 1000,
        easing: "ease"
    })

    console.log(projects);

    const singleProject = projects?.find(packag => packag.id === project_id)
    console.log(singleProject);

    return (
        <div className="projectbackground ">
            <NavigationBar></NavigationBar>
            <Container className="d-flex justify-content-center mt-5 ">
                <div className="intro ">
                    <div data-aos="zoom-out" className="p-4 details_card">
                        <Carousel>
                            <Carousel.Item interval={1000}>
                                <img
                                    className="d-block w-100"
                                    src={singleProject?.img1}
                                    alt="First slide"
                                />
                             
                            </Carousel.Item>
                            <Carousel.Item interval={500}>
                                <img
                                    className="d-block w-100"
                                    src={singleProject?.img2}
                                    alt="Second slide"
                                />
                                
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src={singleProject?.img3}
                                    alt="Third slide"
                                />
                               
                            </Carousel.Item>
                        </Carousel>
                        <h4 className="mt-4 mb-4 ">{singleProject?.project_name}</h4>
                        <p>{singleProject?.project_summary}</p>
                        <p><span className="fw-bold">Technology Used :</span> {singleProject?.technology_used}</p>
                        <button  className="btn-proj mt-2 live-btn w-25  text-direction-none "><a target="_blank" style={{textDecoration:"none", color:"white"}} className="text-direction-none" href={singleProject?.live_Link}>Live Link</a></button>
                    </div>
                    <div>
                        <p className="mt-5 pb-2 pt-5 text-center">Ⓒ 2021 All rights reserved. Mahmudul Hasan</p>
                    </div>
                </div>

            </Container>
        </div>
    );
};

export default ProjectsDetails;