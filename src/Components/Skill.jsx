import React from 'react';
import '../Style/Skill.css';

const skills = [
    { name: "HTML5", img: "https://img.icons8.com/color/48/000000/html-5--v1.png" },
    { name: "CSS3", img: "https://img.icons8.com/color/48/000000/css3.png" },
    { name: "JavaScript", img: "https://img.icons8.com/color/48/000000/javascript--v1.png" },
    { name: "jQuery", img: "https://img.icons8.com/ios-filled/50/4a90e2/jquery.png" },
    { name: "Bootstrap", img: "https://img.icons8.com/color/48/000000/bootstrap.png" },
    { name: "React.js", img: "https://img.icons8.com/plasticine/100/000000/react.png" },
    { name: "Java", img: "https://img.icons8.com/color/48/java-coffee-cup-logo--v1.png" },
    { name: "MySQL", img: "https://img.icons8.com/external-those-icons-flat-those-icons/24/external-MySQL-programming-and-development-those-icons-flat-those-icons.png" }
];

function Skill() {
    return (
        <section className="skills-section py-5 text-light" id='skills'>
            <div className="container">
                <h2 className="section-title text-center pb-4" data-aos="fade-up" data-aos-duration="500">Skills</h2>
                <div className="row g-4 justify-content-center">
                    {skills.map((skill, index) => (
                        <div key={index} className="col-12 col-sm-6 col-md-4 col-lg-3 d-flex justify-content-center">
                            <div className="card text-center text-light p-3 bg-dark classCard" style={{ width: "15rem" }}>
                                <img src={skill.img} className="card-img-top w-25 mx-auto" alt={skill.name} />
                                <div className="card-body">
                                    <h3 className="card-title">{skill.name}</h3>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Skill;
