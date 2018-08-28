import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Utility from '../../common/Utility'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faCog, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

export default class HeaderAuthLinks extends Component {
    render() {
        return (
            <div className="header-anon-links">
                <div className="username pink-text">
                    Hello, {this.props.username}!
                </div>
                <div className="actions">
                    <Link to="/user/profile" className="account-header-link" name="profile">
                        <FontAwesomeIcon icon={faUser}></FontAwesomeIcon>
                    </Link>
                    <Link to='/user/settings' className="account-header-link" name="Settings">
                        <FontAwesomeIcon icon={faCog}></FontAwesomeIcon>
                    </Link>
                    <Link to='/logout' className="account-header-link" name="Settings">
                        <FontAwesomeIcon icon={faSignOutAlt}></FontAwesomeIcon>

                    </Link>
                </div>
            </div>
        )
    }
}