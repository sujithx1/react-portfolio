import React from "react";
import mock01 from '../assets/images/mock01.png';
import mock02 from '../assets/images/mock02.png';
import mock03 from '../assets/images/mock03.png';
import mock04 from '../assets/images/mock04.png';
import mock05 from '../assets/images/mock05.png';
import mock06 from '../assets/images/mock06.png';
import mock07 from '../assets/images/mock07.png';
import mock08 from '../assets/images/mock08.png';
import mock09 from '../assets/images/m2.jpeg';
import mock10 from '../assets/images/m1.png';
import '../assets/styles/Project.scss';

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Personal Projects</h1>
        <div className="projects-grid">
            <div className="project">
                <a href="https://github.com/sujithx1" target="_blank" rel="noreferrer"><img src={mock10} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/sujithx1" target="_blank" rel="noreferrer"><h2>Retro-Service</h2></a>
                <p>Location-based mechanic booking platform with chat and Map features. Integrated auto parts store similar to Instamart. Built using TypeScript, MongoDB, Express, React, Node.js, Firebase, Tailwind CSS.</p>
            </div>
            <div className="project">
                <a href="https://yujisatojr.itch.io/highspeedchase" target="_blank" rel="noreferrer"><img src={mock09} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://yujisatojr.itch.io/highspeedchase" target="_blank" rel="noreferrer"><h2>E-commerce Platform  </h2></a>
                <p>Developed a feature-rich online store with Google Authentication and Razorpay payments. Integrated cart management, and secure payment processing. Optimized for responsive design and seamless user experience.</p>
            </div>
           
        </div>
    </div>
    );
}

export default Project;