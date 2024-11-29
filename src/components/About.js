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
                           Creating professional Websites with a personal and esay going touch, i have being working in different countries from branding and desing to developing and coding.   
                        </p>
                        <h5>Based in Bahia, Brazil</h5>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;
