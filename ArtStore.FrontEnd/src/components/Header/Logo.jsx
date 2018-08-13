import React, { Component } from 'react';
import { Link } from 'react-router-dom'

export default class Logo extends Component {
    render() {
        return(
            <div className="logo">
                <h1>
                    <Link to="/">
                        <em>Heart of Art</em>
                    </Link>
                </h1>
            </div>
        )
    }
}