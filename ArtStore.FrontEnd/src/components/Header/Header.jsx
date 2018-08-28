import React, { Component } from 'react';
import Logo from './Logo'
import SearchBar from './Search';
import HeaderAnonLinks from './HeaderAnonLinks';
import Utility from '../../common/Utility';
import HeaderAuthLinks from './HeaderAuthLinks';
import observer from '../../infrastructure/observer';

export default class Header extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: ''
        }

        observer.subscribe(observer.events.loginUser, this.loggedIn)
        observer.subscribe(observer.events.logout, this.logout)
    }

    loggedIn = username =>
        this.setState({ username })

    logout = () => this.setState({ username: null })

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
                                {this.state.username ?
                                    <HeaderAuthLinks username={this.state.username} />
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