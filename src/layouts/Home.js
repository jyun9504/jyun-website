import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import About from 'layouts/About';
import Works from 'layouts/Works';

import IconEmail from 'assets/email-icon.png';
import IconGithub from 'assets/github-icon.png';
import IconInstagram from 'assets/instagram-icon.png';

class Home extends React.Component {
    render() {
        return (
            <Router>
                <div className="home">
                    <header className="heading">
                        <ul className="heading-btnBox">
                            <li className="heading-btnBox-dot bgcolor-red"></li>
                            <li className="heading-btnBox-dot bgcolor-yellow"></li>
                            <li className="heading-btnBox-dot bgcolor-green"></li>
                        </ul>
                        <div className="heading-titleBox">
                            jyun9504.github.io
                        </div>
                    </header>
                    
                    <section className="section-content">
                        <Route exact path="/" component={About} />
                        <Route path="/works" component={Works} />
                    </section>

                    <footer className="footer">
                        <div className="link-group">
                        <a href="https://github.com/jyun9504"><img className="link-group-icon" src={IconGithub} alt="Github Icon"/></a>
                        <a href="https://instagram.com/jyun9504/"><img className="link-group-icon" src={IconInstagram} alt="Instagram Icon"/></a>
                        <a href="mailto:jyun9504@email.com"><img className="link-group-icon" src={IconEmail} alt="Email Icon"/></a>
                        </div>
                    </footer>
                </div>
            </Router>
        );
    }
}

export default Home;