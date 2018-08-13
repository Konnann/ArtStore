import React, { Component } from 'react';
import Logo from './Logo'
import SearchBar from './Search';
import HeaderAnonLinks from '../Header/HeaderAnonLinks';

export default class Header extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className="header">
                <table className="header-table">
                    <tbody>
                        <tr>
                            <td>
                                <table>
                                    <tbody>
                                        <tr>
                                            <td><Logo/></td>
                                            <td><SearchBar/></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </td>
                            <td className="header-account-section">
                                <HeaderAnonLinks/>
                            </td>
                        </tr>
                    </tbody>
                </table>              
            </div>
        )
    }
}