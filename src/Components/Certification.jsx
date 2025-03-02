import React from 'react';
import '../Style/Certification.css';
import Cert1 from '../assets/cert1.jpg';
import Cert2 from '../assets/cert2.jpg';
import Cert3 from '../assets/cert3.jpg';

function Certification() {
    return (
        <section className='certification-section py-5 bg-dark' id='certification'>
            <div className='container'>
                <h2
                    className="about-me-title text-light text-center pb-5"
                    data-aos="fade-up"
                    data-aos-duration="500"
                >
                    Certification
                </h2>
                <div className='row g-4'>
                    <div className='col-md-4'>
                        <div className="card shadow-lg border-0 bg-black text-light">
                            <img src={Cert1} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h6 className="card-title text-center text-info">Website Development Winner</h6>
                            </div>
                        </div>
                    </div>

                    <div className='col-md-4'>
                        <div className="card shadow-lg border-0 bg-black text-light">
                            <img src={Cert2} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h6 className="card-title text-center text-info">Training Certificate(CentraLogic)</h6>
                            </div>
                        </div>
                    </div>

                    <div className='col-md-4'>
                        <div className="card shadow-lg border-0 bg-black text-light">
                            <img src={Cert3} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h6 className="card-title text-center text-info">Python Certificate(IIT Kharagpur)</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Certification;
