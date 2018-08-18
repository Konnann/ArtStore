import * as React from 'react';
import TextField from '../Common/TextField';
import userModel from '../../models/UserModel';
import withFormManager from '../../hocs/wiithFormManager';
import userService from '../../services/userService';

export  class LogIn extends React.Component {

    constructor(props) {
        super(props);

        this.handleChange = this.handleChange.bind(this);
    }

    render() {
        let model = this.props.model;
        return (
            <div className="content form-container">
                <em className="section-header">Log In</em>
                <div className="borders">
                    <form className="user-form">
                        <table className="formtable">
                            <tr>
                                <TextField 
                                    label="Username:" 
                                    value={model ? model.username : '' } 
                                    handleChange={(e) => this.handleChange(e, 'username')}
                                    type="username"
                                    name="username"
                                />
                            </tr>
                            <tr>
                                <TextField 
                                    label="Password:" 
                                    value={model ? model.password : ''} 
                                    handleChange={(e) => this.handleChange(e, 'password')}
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

    handleChange(fieldValue, fieldName) {
        let model = this.props.model;
        model[fieldName] = fieldValue;
        this.setState({
            model
        });
    }

}

export default withFormManager(LogIn, userModel, userService.login);