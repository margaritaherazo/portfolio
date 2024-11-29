import React from 'react';

function Portfolio() {
    return (
        <section id="portfolio" className="portfolio py-5">
            <div className="container">
                <h2 className="text-center">My Work</h2>
                <div className="row">
                    {/* Example Project */}
                    <div className="col-md-4 mb-4">
                        <div className="card">
                            <img src="path/to/project-image.jpg" className="card-img-top" alt="Project" />
                            <div className="card-body">
                                <h5 className="card-title">Project Name</h5>
                                <p className="card-text">A brief description of the project.</p>
                                <a href="https://github.com/username/project" className="btn btn-primary">View Project</a>
                            </div>
                        </div>
                    </div>
                    {/* Add more projects as needed */}
                </div>
            </div>
        </section>
    );
}

export default Portfolio;
