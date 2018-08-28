import * as React from 'react';
import TextField from '../Common/TextField';
import userModel from '../../models/UserModel';
import withFormManager from '../../hocs/wiithFormManager';
import userService from '../../services/userService';

export  class LogIn extends React.Component {

    render() {
        return (
            <div className="content form-container">
                <em className="section-header">Log In</em>
                <div className="borders">
                    <form className="user-form" onSubmit={this.props.handleSubmit}>
                        <table className="formtable">
                            <tr>
                                <TextField 
                                    label="Username:" 
                                    value={this.props.username } 
                                    handleChange={this.props.handleChange}
                                    type="username"
                                    name="username"
                                />
                            </tr>
                            <tr>
                                <TextField 
                                    label="Password:" 
                                    value={this.props.password} 
                                    handleChange={this.props.handleChange}
                                    type="password"
                                    name="password"
                                />
                            </tr>
                            <tr>
                                <input type="submit" value="Log In"/>
                            </tr>
                        </table>
                    </form>
                </div>
            </div>
        )
    }
}

export default withFormManager(LogIn, userModel, userService.login);