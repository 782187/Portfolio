import React, { useRef } from 'react';
import '../Style/contact.css';

function Contact() {
    const userName = useRef(null);
    const userEmail = useRef(null);
    const userQuery = useRef(null);

    const myFun = (e) => {
        e.preventDefault();

        const params = {
            name: userName.current.value,
            email: userEmail.current.value,
            query: userQuery.current.value
        };

        const serviceID = "service_n7bshay";
        const templateID = "template_bgrukbc";

        emailjs.send(serviceID, templateID, params)
            .then(res => {
                userName.current.value = "";
                userEmail.current.value = "";
                userQuery.current.value = "";
                alert("Your message has been sent successfully.");
            })
            .catch(err => console.log(err));
    };

    return (
        <div className="contact-section-container" id="contact">
            <div className="contact-section">
                <h2 className="contact-section-title" data-aos="fade-up" data-aos-duration="500">Contact Us:</h2>
                <form onSubmit={myFun}>
                    <div className="contact-section-form-group">
                        <label htmlFor="name" className="contact-section-label">Name:</label>
                        <input type="text" className="contact-section-input" ref={userName} id="name" placeholder="Enter your full name" />
                    </div>
                    <div className="contact-section-form-group">
                        <label htmlFor="email" className="contact-section-label">Email:</label>
                        <input type="email" className="contact-section-input" ref={userEmail} id="email" placeholder="Enter your email address" />
                    </div>
                    <div className="contact-section-form-group">
                        <label htmlFor="query" className="contact-section-label">Queries:</label>
                        <textarea name="query" id="query" className="contact-section-input" ref={userQuery} placeholder="Type your query here"></textarea>
                    </div>
                    <button className="contact-section-button">Submit</button>
                </form>
            </div>
            <div className="social-link">
                <iframe className="contact-section-iframe" src="https://lottie.host/embed/3bcec4b8-655e-41e7-ac15-d2b72b0d6350/UXzvO06SAp.json" title="Contact Information"></iframe>

                <div className="social-icons">
                    <a href="https://wa.me/7821879681?text=I'm%20inquiring%20about%20the%20Website%20Design%20" aria-label="Whatsapp"><i className="fab fa-whatsapp"></i></a>
                    <a href="https://www.linkedin.com/in/avinash-shinde-0940b121a" target="_blank" aria-label="LinkedIn"><i className="fab fa-linkedin"></i></a>
                    <a href="https://www.instagram.com/avinash_s_11/?igsh=OTYxNGE2bTliczlm" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
                    <a href="mailto:avinash83w@gmail.com" aria-label="Instagram"><i className="fab fa-envelope"></i></a>
                </div>
            </div>
        </div>
    );
}

export default Contact;
