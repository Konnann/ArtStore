import * as React from 'react';

export default class TextField extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            value: "",
        }

        this.handleChange = this.handleChange.bind(this);
    }

    componentWillReceiveProps(props) {
        if (props.isFocused) {
            this.setState({ isFocused: true });
        }
    }

    render() {
        return (
            <table className="text-field">
                <tr>
                    <td className="label-col">
                        <label className="text-label">{this.props.label}</label>
                    </td>
                    <td className="input-col">
                        <div className="text-input">
                            <input type="text" value={this.props.value} onChange={this.handleChange} />
                        </div>
                    </td>
                </tr>
            </table>
        )
    }


    handleChange(event) {
        let fieldValue = event.target.value;
        this.props.handleChange(fieldValue);
        this.setState({ value: fieldValue });
    }

}