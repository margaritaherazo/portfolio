import React from 'react';

function Hero() {
    return (
        <section className="hero bg-primary text-white text-center py-5">
            <div className="container">
                <h1>Welcome to My Portfolio</h1>
                <p className="lead">I’m a Front-End Developer specializing in building beautiful, responsive websites.</p>
                <a href="#portfolio" className="btn btn-light mt-3">View My Work</a>
            </div>
        </section>
    );
}

export default Hero;
