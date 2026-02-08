import React from "react";
import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap-icons/font/bootstrap-icons.css";

function Aboutme() {
    return (
        <section className="about-me" id="about-me">
            <div className="about-me-img">
                <img src="img/home-portfolio.png" alt="img-about-me" />
            </div>
            <div className="about-me-inner">
                <h2 className="title-about-me">About Me</h2>
                <p className="text-about-me">
                    Hello! I'm Lucas, a passionate developer with a love for creating innovative solutions. With experience in various programming languages and frameworks, I enjoy tackling challenging problems and continuously learning new technologies. When I'm not coding, I like to explore the world games and spend time with friends and family.
                </p>
            </div>
        </section>
    );
}

export default Aboutme;