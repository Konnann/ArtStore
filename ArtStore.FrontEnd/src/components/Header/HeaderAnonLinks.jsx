import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class HeaderAnonLinks extends Component {
    render() {
        return(
            <div className="header-anon-links">              
                <table>
                    <tbody>
                        <tr>
                            <td>
                                <Link to="/register" className="account-header-link" name="register">
                                    Register
                                </Link>
                            </td>
                            <td>
                                <Link to="/logIn" className="account-header-link account-header-link-button" name="logIn">
                                    Log In 
                                </Link>
                            </td>
                        </tr>
                    </tbody>
                </table>                
            </div>
        )
    }
}