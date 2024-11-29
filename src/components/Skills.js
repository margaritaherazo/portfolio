import React from 'react';

function Skills() {
    return (
        <section id="skills" className="skills bg-light py-5">
            <div className="container">
                <h2 className="text-center">Skills</h2>
                <div className="row">
                    {/* Technical Skills */}
                    <div className="col-md-4">
                        <h4>Technical Skills</h4>
                        <ul>
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>JavaScript</li>
                            <li>React</li>
                            <li>Node.js</li>
                            <li>Git</li>
                            <li>Bootstrap</li>
                        </ul>
                    </div>
                    {/* Soft Skills */}
                    <div className="col-md-4">
                        <h4>Soft Skills</h4>
                        <ul>
                            <li>Problem-solving</li>
                            <li>Communication</li>
                            <li>Time Management</li>
                            <li>Teamwork</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Skills;
