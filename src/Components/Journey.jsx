import React from 'react'
import '../Style/Journey.css';

function Journey() {
    return (
        <>
            <section className='journey-section' id='journey'>
                <div className="container">
                    <h1 className="section-title text-light pt-3" data-aos="fade-up" data-aos-duration="500">My Journey</h1>
                </div>

                <div className="timeline">
                    <div className="timeline-node">
                        <div className="timeline-content">
                            <h2>Roll: Full Stack Developer</h2>
                            <p>Company: CentraLogic, Pune</p>
                            <p>Year Of Completion: 2024</p>
                        </div>
                        <div className="dot"></div>
                    </div>

                    <div className="timeline-node">
                        <div className="timeline-content">
                            <h2>Bachelor's Degree in Computer Science Engineering</h2>
                            <p>Year of Graduation : 2024</p>
                            <p>College : Sandip Institute Of Engineering and Managment, Nashik , MH-422213 </p>
                            <p>C.G.P.A : 8.54</p>
                        </div>
                        <div className="dot"></div>
                    </div>

                    <div className="timeline-node">
                        <div className="timeline-content">
                            <h2>12<sup>th</sup> Grade</h2>
                            <p>Year of Graduation : 2020</p>
                            <p>Higher Secondary School : Shree Ganesh Junior College, Korhale , MH-423605</p>
                            <p>Percentage : 73.38%</p>
                        </div>
                        <div className="dot"></div>
                    </div>

                    <div className="timeline-node">
                        <div className="timeline-content">
                            <h2>10<sup>th</sup> Grade</h2>
                            <p>Year of Graduation : 2018</p>
                            <p>Secondary School : S.D Jadhav English Medium School , Shaha MH-422104</p>
                            <p>Percentage : 84.80%</p>
                        </div>
                        <div className="dot"></div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Journey;
