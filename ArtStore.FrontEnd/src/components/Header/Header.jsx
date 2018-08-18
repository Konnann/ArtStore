import React, { Component } from 'react';
import Logo from './Logo'
import SearchBar from './Search';
import HeaderAnonLinks from './HeaderAnonLinks';
import Utility from '../../common/Utility';
import HeaderAuthLinks from './HeaderAuthLinks';

export default class Header extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="header">
                <table className="header-table">
                    <tbody>
                        <tr>
                            <td>
                                <table>
                                    <tbody>
                                        <tr>
                                            <td><Logo /></td>
                                            <td><SearchBar /></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </td>
                            <td className="header-account-section">
                                {Utility.isLoggedIn() ?
                                    <HeaderAuthLinks />
                                    : <HeaderAnonLinks />
                                }
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}