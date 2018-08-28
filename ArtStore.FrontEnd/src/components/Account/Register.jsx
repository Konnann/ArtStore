import * as React from 'react';
import TextField from '../Common/TextField'
import withFormManager from '../../hocs/wiithFormManager'
import registerModel from '../../models/Register'
import userService from '../../services/userService'

export class Register extends React.Component {
    render() {
        return (
            <div className="content form-container">
                <em className="section-header">Register</em>
                <div className="borders">
                    <form className="user-form" onSubmit={this.props.handleSubmit}>
                        <table className="formtable">
                            <tr>
                                <TextField 
                                    label="Username:" 
                                    value={this.props.username} 
                                    handleChange={this.props.handleChange}
                                    name="username"
                                />
                            </tr>
                            <tr>
                                <TextField 
                                    label="Password:" 
                                    value={this.props.password} 
                                    handleChange={this.props.handleChange}
                                    name="password"
                                    type="password"
                                />
                            </tr>
                            <tr>
                                <TextField 
                                    label="Confirm Password:" 
                                    value={this.props.confirmPassword} 
                                    handleChange={this.props.handleChange}
                                    name="confirmPassword"
                                    type="password"
                                />
                            </tr>
                            <tr>
                                <input id="btnRegister" type="submit" value="Register" handleSubmit={this.props.handleSubmit}/>
                            </tr>
                        </table>
                    </form>
                </div>
            </div>
        )
    }

}

export default withFormManager(Register, registerModel, userService.register);