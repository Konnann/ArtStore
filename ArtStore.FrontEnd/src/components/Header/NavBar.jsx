import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class NavBar extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <nav>
                <div id="navbarNav">
                    <ul>
                        <li>
                            <Link to="#">Art &amp; Crafts</Link>
                        </li>
                        <li>
                            <a href="#">Clothing &amp; Shoes</a>
                        </li>
                        <li>
                            <a href="#">Jewelry &amp; Accessories</a>
                        </li>
                        <li>
                            <a href="#">Home &amp; Living</a>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}