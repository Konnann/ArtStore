import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Utility from '../../common/Utility'

export default class HeaderAuthLinks extends Component {
    render() {
        let userName = Utility.getUserName();
        return(
            <div className="header-anon-links">              
                <table>
                    <tbody>
                        <tr>
                            <td>
                                <p className="pink-text">Hello, {userName ? userName : ""}!</p>
                            </td>
                            <td>
                                <Link to="/user/profile" className="account-header-link" name="profile">
                                    <img src="https://image.flaticon.com/icons/png/512/74/74472.png" className="profile-icon" alt="profile-icon"/>
                                </Link>                               
                            </td>
                            <td>
                                <Link to='/user/settings' className="account-header-link" name="Settings">
                                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Cog_font_awesome.svg/2000px-Cog_font_awesome.svg.png" className="profile-icon" alt="profile-icon-settings"/>
                                </Link>
                            </td>
                        </tr>
                    </tbody>
                </table>                
            </div>
        )
    }
}