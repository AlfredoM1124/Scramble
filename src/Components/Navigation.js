import React, { Component } from 'react';

class Explore extends Component {
    render() {
        return (
            <div className="Explore">
                <div className="navbar-fixed">
                    <nav>
                        <div className="nav-wrapper blue darken-4">
                            <a href="#!" className="brand-logo">Logo</a>
                            <a href="#!" data-activates="mobile-demo" className="button-collapse"><i className="material-icons">menu</i></a>
                            <ul className="right hide-on-med-and-down">
                                <li><a href="#!">Top</a></li>
                                <li><a href="#!">Trending</a></li>
                                <li><a href="#!">Search</a></li>
                                <a href="#!" data-activates="login-modal" className="button-collapse"><i className="material-icons">menu</i></a>
                            </ul>
                            <ul className="side-nav" id="mobile-demo">
                                <li><a href="#!">Top</a></li>
                                <li><a href="#!">Trending</a></li>
                                <li><a href="#!">Search</a></li>
                                <a href="#!" data-activates="login-modal" className="button-collapse"><i className="material-icons">menu</i></a>
                            </ul>
                        </div>
                    </nav>
                </div>
            </div>
        );
    }
}

export default Explore;
