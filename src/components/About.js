import React from 'react';

function About() {
    return (
        <section id="about" className="py-5">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-md-6 d-flex justify-content-center">
                        <img 
                            src="/assets/imgs/foto.png" 
                            alt="About Me" 
                            className="img-fluid custom-img" 
                        />
                    </div>
                    <div className="col-md-6">
                        <h2>Web Designer</h2>
                        <h2>Creative Developer</h2>
                        <p>
                            I am a passionate Front-End Developer with a knack for creating user-friendly and visually appealing websites.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;
