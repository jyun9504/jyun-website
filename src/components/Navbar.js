import React from 'react';
import { Link } from "react-router-dom";


class Navbar extends React.Component {
    render() {
        return (
            <ul className="navbar">
                <Link to="/">
                    <li className={this.props.nowPage === 'about' ? 'navbar-link navbar-enable' : 'navbar-link'}>
                        <h2 className="navbar-link-text">About</h2>
                    </li>
                </Link>
                <Link to="/works">
                    <li className={this.props.nowPage === 'works' ? 'navbar-link navbar-enable' : 'navbar-link'}>
                        <h2 className="navbar-link-text">Works</h2>
                    </li>
                </Link>
            </ul>
        );
    }
}

export default Navbar;