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
                <a href="https://retro-service.vercel.app/" target="_blank" rel="noreferrer"><img src={mock10} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/sujithx1/Retro-Service-Backend" target="_blank" rel="noreferrer"><h2>Retro-Service</h2></a>
                <p> Developed a platform for booking vehicle mechanics based on location and user preferences. Integrated
 real-time chat and video calls between users and mechanics. Features an auto parts e-commerce store
 with order tracking and secure payments. Built with React, TypeScript, Node.js, Express, MongoDB,
 and follows Clean Architecture principles.
 <br />
 • Implemented a location-based platform to connect users with nearby vehicle mechanics. <br />
 • Developed an auto parts e-commerce store with cart, order management, and secure payments. <br />
 • Integrated real-time chat and video calls using Socket.IO for user–mechanic communication.
 <br />
 • Designed a booking management system for tracking mechanic service status.
 <br />
 • Architected the backend using Clean Architecture with Node.js, Express, and MongoDB.
 <br />
 • Enhanced user experience with a responsive UI built with React, TypeScript, TailwindCSS.
 <br />
 • Integrated Firebase Storage and Cloudinary for handling Push Notification and user-uploaded images</p>
            </div>
            <div className="project">
                <a href="https://retro-clac.onrender.com/" target="_blank" rel="noreferrer"><img src={mock09} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/sujithx1/retro" target="_blank" rel="noreferrer"><h2>E-commerce Platform  </h2></a>

        <p>
            Built a full-featured e-commerce platform using the EJS and Express Node js Mongo DB , enabling
 users to browse, purchase, and securely pay for fashion products (dresses) . Integrated secure payment
 processing and authentication to enhance user experience. Designed scalable architecture to support
 future product categories and features. <br /> 
 • Developed responsive and dynamic frontend using EJS. and implemented a Node.js + Express.js
 backend with RESTful APIs
 <br />
 • Managed product data and user data with MongoDB <br />
 • Integrated Razorpay for seamless payment processing Google Authentication using OAuth for secure
 login <br />
 
• Implemented user-friendly shopping cart and order management system <br />
 • Built admin panel for product management and order tracking
        </p>
            </div>
           
        </div>
    </div>
    );
}

export default Project;