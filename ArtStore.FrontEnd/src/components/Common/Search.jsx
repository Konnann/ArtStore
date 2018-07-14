import React, { Component } from 'react';

export default class SearchBar extends Component {
    render() {
        return(
            <div className="search-bar">
                <form method="get" action="/search">
                    <table>
                        <tbody>
                            <tr>
                                <td><input type="text" className="search-input" placeholder="Search goodies.." name="search"/></td>
                                <td><input type="button" className="search-button"/></td>
                            </tr>
                        </tbody>
                    </table>                
                </form>
            </div>
        )
    }
}


