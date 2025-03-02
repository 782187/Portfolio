import React, { useEffect, useRef } from "react";
import '../Style/Introduction.css';

function Introduction() {
    const bgAnimation = useRef(null);
    const numberOfColorBoxes = 500;

    useEffect(() => {
        if (bgAnimation.current) {
            for (let i = 0; i < numberOfColorBoxes; i++) {
                const colorBox = document.createElement('div');
                colorBox.classList.add('colorBox');
                bgAnimation.current.appendChild(colorBox);
            }
        }
    }, []);

    return (
        <>
            <div className="bgAnimation" ref={bgAnimation}>
                <div className="backgroundAmim"></div>
            </div>
            <section className="introduction-section">
                <div className="intro-content" data-aos="fade-up">
                    <h1 className="name-text" id="name">Avinash Shinde</h1>
                    <p className="position-text" id="position">Full Stack Java Developer and Freelancer.</p>
                    <p className="description mt-5">
                        I build sleek and responsive digital solutions. With a focus on clean code and seamless functionality, I create intuitive and user-friendly applications. Let's turn your ideas into impactful, lasting digital experiences!
                    </p>
                </div>
            </section>
        </>
    );
}

export default Introduction;
