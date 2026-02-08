import React, { useState } from "react";
import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap-icons/font/bootstrap-icons.css";

function Journey() {
    const journeyItems = [
        {
            id: 1,
            actual: true,
            title: "Junior Developer",
            date: "September 2025",
            company: "VerdanaTech",
            description: ""
        },
        {
            id: 2,
            title: "Junior Development Analyst",
            date: "February 2025 / September 2025",
            company: "HCP Gestão",
            description:
                "Full Stack Developer responsible for the end-to-end development and maintenance of web applications, working across both back-end and front-end layers. I developed user interfaces and implemented all application functionalities, ensuring complete system delivery. On the back end, I worked with PHP and Python using the Laravel framework to build robust APIs and systems, while on the front end I used JavaScript and Bootstrap to create intuitive and responsive interfaces. I also handled SQL-based database modeling, optimization, and management. A major professional challenge was independently designing and developing a complete training and course platform, which significantly enhanced my technical skills, problem-solving abilities, and understanding of full-cycle software development."
        },
        {
            id: 3,
            title: "Development Trainee",
            date: "January 2024 / January 2025",
            company: "HCP Gestão",
            description:
                "Started my professional journey as a Trainee developer in HCP Gestão, learning and growing in a collaborative environment."
        }
    ];

    const [visibleItems, setVisibleItems] = useState(1);

    const loadMore = () => {
        setVisibleItems(prev => prev + 1);
    };

    return (
        <section className="journey" id="journey">
            <div className="journey-img">
                <img src="img/professional-journey.png" alt="img-journey" />
            </div>

            <div className="journey-inner">
                <h2 className="title-journey">Professional Journey</h2>

                <div className="professional-journey-list">
                    {journeyItems.slice(0, visibleItems).map(item => (
                        <div
                            key={item.id}
                            className={
                                item.actual
                                    ? "professional-journey-item-actual"
                                    : "professional-journey-item"
                            }
                        >
                            <h4>
                                {item.title} - <span>{item.date}</span>
                            </h4>
                            <h6>Company: {item.company}</h6>
                            <p>{item.description}</p>
                        </div>
                    ))}
                </div>

                {visibleItems < journeyItems.length && (
                    <button
                        className="btn btn-outline-light load-more-btn"
                        onClick={loadMore}
                    >
                        Load More
                    </button>
                )}
            </div>
        </section>
    );
}

export default Journey;
