import React, { useState } from 'react';
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';

function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Form submitted!');
    };

    return (
        <section id="contact" className="contact py-5">
            <div className="container">
                <h2 className="text-center mb-4">Contact Me</h2>
                <div className="row align-items-center">
                    {/* Left Column: Form */}
                    <div className="col-md-6 mb-4">
                        <form onSubmit={handleSubmit}>
                            <div className="mb-3">
                                <label htmlFor="name" className="form-label">
                                    Your Name
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="email" className="form-label">
                                    Your Email
                                </label>
                                <input
                                    type="email"
                                    className="form-control"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="message" className="form-label">
                                    Your Message
                                </label>
                                <textarea
                                    className="form-control"
                                    id="message"
                                    name="message"
                                    rows="4"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                ></textarea>
                            </div>
                            <button type="submit" className="btn btn-primary">
                                Send Message
                            </button>
                        </form>
                    </div>

                    {/* Right Column: Contact Info */}
                    <div className="col-md-6">
                        <div className="d-flex align-items-center mb-3">
                            <FaEnvelope className="me-3" size={24} />
                            <p className="mb-0">your-email@example.com</p>
                        </div>
                        <div className="d-flex align-items-center mb-3">
                            <FaGithub className="me-3" size={24} />
                            <a
                                href="https://github.com/your-github"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-decoration-none"
                            >
                                GitHub
                            </a>
                        </div>
                        <div className="d-flex align-items-center">
                            <FaLinkedin className="me-3" size={24} />
                            <a
                                href="https://linkedin.com/in/your-linkedin"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-decoration-none"
                            >
                                LinkedIn
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Contact;
