import * as React from 'react';
import TextField from '../Common/TextField'

export default class Register extends React.Component {

    constructor(props) {
        super(props);

        this.handleChange = this.handleChange.bind(this);
    }

    render() {
        return (
            <div className="content form-container">
                <em className="section-header">Register</em>
                <div className="borders">
                    <form className="user-form">
                        <table className="formtable">
                            <tr>
                                <TextField 
                                    label="Username:" 
                                    value={this.props.model.username} 
                                    handleChange={(e) => this.handleChange(e, 'username')}
                                />
                            </tr>
                            <tr>
                                <TextField 
                                    label="Password:" 
                                    value={this.props.model.password} 
                                    handleChange={(e) => this.handleChange(e, 'password')}
                                />
                            </tr>
                            <tr>
                                <TextField 
                                    label="Confirm Password:" 
                                    value={this.props.model.confirmPassword} 
                                    handleChange={(e) => this.handleChange(e, 'confirmPassword')}
                                />
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