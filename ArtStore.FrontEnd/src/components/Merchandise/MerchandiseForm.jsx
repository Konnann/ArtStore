import React, { Component } from 'react';
import MerchandiseModel from '../../models/MerchandiseModel';
import TextField from '../Common/TextField';
import Utility from '../../common/Utility';
import merchService from '../../services/merchService';

export default class MerchandiseForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            model: null
        }

        this.saveItem = this.saveItem.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    async componentDidMount() {
        if (this.props.id) {
            let rawData = await this.getItemData(this.props.id);
            this.setState({ model: new MerchandiseModel(rawData) });
        } else {
            debugger;
            this.setState({ model: new MerchandiseModel() });
        }

    }

    render() {
        let model = this.props.model ? this.state.model : {};
        return (
            <div className="content form-container">
                <em className="section-header">Create Shop Item</em>
                <div className="borders">
                    <form className="user-form">
                        <table className="formtable">
                            <tbody>
                                <tr>
                                    <TextField
                                        label="Title"
                                        value={model.title}
                                        handleChange={this.handleChange}
                                        type="Title"
                                        name="Title"
                                    />
                                </tr>
                                <tr>
                                    <TextField
                                        label="Description"
                                        value={model.descrription}
                                        handleChange={this.handleChange}
                                        type="Description"
                                        name="Description"
                                        isMultiline={true}
                                    />
                                </tr>
                                <tr>
                                    <br />
                                    {!Utility.isDisplayForm() ?
                                        <input type="button" value="Save" onClick={this.saveItem} />
                                        :
                                        null
                                    }
                                </tr>
                            </tbody>
                        </table>
                    </form>
                </div>
            </div>
        )
    }

    handleChange(event) {
        console.log(event.target);
        let fieldValue = event.target.value;
        let fieldName = event.target.name;
        //this.props.handleChange(fieldValue);
        let model = this.state.model;
        model[fieldName] = fieldValue;
        this.setState({ model: model });
    }

    getItemData(id) {

    }

    saveItem() {
        merchService.create.send(this.state.model);
    }
}