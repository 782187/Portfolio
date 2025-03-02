import React from "react";
import '../Style/Project.css';
import Project1 from '../assets/project1.png';
import Project2 from '../assets/project2.png';
import Project3 from '../assets/project3.png';

function Project() {
    return (
        <section className="project-section py-5 bg-dark" id="projects">
            <div className="container">
                <h2
                    className="about-me-title text-light text-center pb-5"
                    data-aos="fade-up"
                    data-aos-duration="500"
                >
                    My Projects
                </h2>
                <div className="row g-4">
                    <div className="col-md-4">
                        <div className="card shadow-lg border-0 bg-black text-light">
                            <img
                                src={Project1}
                                className="card-img-top"
                                alt="Project 1"
                            />
                            <div className="card-body text-center">
                                <h5 className="card-title text-primary">Tutorials Website</h5>
                                <p className="card-text">
                                    A comprehensive resource dedicated to helping learners master web development. We offer in-depth tutorials and practical examples for HTML, CSS, Bootstrap, and React, from beginner to advanced levels.
                                </p>
                                <a href="https://avis-tutorial.netlify.app/" className="btn btn-primary">
                                    Explore
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className="card shadow-lg border-0 bg-black text-light">
                            <img
                                src={Project2}
                                className="card-img-top"
                                alt="Project 2"
                            />
                            <div className="card-body text-center">
                                <h5 className="card-title text-primary">React Website</h5>
                                <p className="card-text">
                                    Learn React from scratch to advanced topics. We cover everything from components and hooks to state management and performance optimization, helping you build powerful React apps step by step.
                                </p>
                                <a href="https://react-tutorial-avis.netlify.app/" className="btn btn-primary">
                                    Explore
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className="card shadow-lg border-0 bg-black text-light">
                            <img
                                src={Project3}
                                className="card-img-top"
                                alt="Project 3"
                            />
                            <div className="card-body text-center">
                                <h5 className="card-title text-primary">Wordpress Blog</h5>
                                <p className="card-text">
                                    A space where I share my thoughts, experiences, and insights on web development, technology, and more. Follow along for tutorials, tips, and personal stories that inspire and inform.
                                </p>
                                <a href="https://www.avinashprince.wordpress.com" className="btn btn-primary">
                                    Explore
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Project;
