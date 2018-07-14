import React, { Component } from 'react';

export default class HeaderAnonLinks extends Component {
    render() {
        return(
            <div className="header-anon-links">              
                <table>
                    <tbody>
                        <tr>
                            <td>
                                <a className="account-header-link" name="register">
                                    Register
                                </a>
                            </td>
                            <td>
                                <a className="account-header-link account-header-link-button" name="sign-in">
                                    Sign in
                                </a>
                            </td>
                        </tr>
                    </tbody>
                </table>                
            </div>
        )
    }
}