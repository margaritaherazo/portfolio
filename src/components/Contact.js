import React from 'react';
import { FaEnvelope, FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa';

function Contact() {
    return (
        <section id="contact" className="contact py-5">
            <div className="container">
                <div className="row align-items-center">
                   
                    <div className="col-md-6 text-md-start text-center">
                        <h2 className="display-4">Let's Co-create Something</h2>
                    </div>

                    
                    <div className="col-md-6 text-md-end text-center">
                        <div className="mb-3">
                            <FaEnvelope className="me-2 fs-4" />
                            <a
                                href="mailto:margarita.herazo.i@gmail.com"
                                className="text-decoration-none fs-5"
                            >
                                margarita.herazo.i@gmail.com
                            </a>
                        </div>
                        <div className="mb-3">
                            <FaGithub className="me-2 fs-4" />
                            <a
                                href="https://github.com/margaritaherazo"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-decoration-none fs-5"
                            >
                                GitHub
                            </a>
                        </div>
                        <div className="mb-3">
                            <FaLinkedin className="me-2 fs-4" />
                            <a
                                href="https://www.linkedin.com/in/maragarita-herazo/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-decoration-none fs-5"
                            >
                                LinkedIn
                            </a>
                        </div>
                        <div className="mb-3">
                            <FaWhatsapp className="me-2 fs-4" />
                            <a
                                href="https://wa.me/491776403557"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-decoration-none fs-5"
                            >
                                +49 1776403557
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Contact;
