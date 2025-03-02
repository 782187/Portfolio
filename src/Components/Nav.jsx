import React from 'react';
import { Link } from 'react-scroll'
import '../Style/Nav.css';
function Nav() {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-dark navbar-dark fixed-top">
                <div className="container-fluid">
                    <a className="navbar-brand fw-bold" href="#">&lt;/Web&gt;<span style={{ color: 'cyan' }}>Avinash</span></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
                        <ul className="navbar-nav">
                            <li className='nav-item'>
                                <Link className="nav-link active" aria-current="page" to="intro" smooth={true} duration={100}>INTRODUCTION</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="about" smooth={true} duration={100}>ABOUT ME</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="journey" smooth={true} duration={100}>JOURNEY</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="skills" smooth={true} duration={100}>SKILLS</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="projects" smooth={true} duration={100}>PROJECTS</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="certification" smooth={true} duration={100}>Certification</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="contact" smooth={true} duration={100}>CONTACT</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}
export default Nav;