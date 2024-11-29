import React from 'react';

function Footer() {
    return (
        <footer className="footer bg-dark text-white py-4">
            <div className="container text-center">
                <p>Copyright © Your Name 2024</p>
                <p>
                    <a href="https://www.linkedin.com/in/your-profile" className="text-white mx-2">LinkedIn</a>
                    <a href="https://github.com/your-username" className="text-white mx-2">GitHub</a>
                    <a href="mailto:your-email@example.com" className="text-white mx-2">Email</a>
                </p>
            </div>
        </footer>
    );
}

export default Footer;
