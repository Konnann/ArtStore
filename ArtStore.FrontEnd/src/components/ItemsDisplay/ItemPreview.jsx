import React, { Component } from 'react';

export default class ItemPreview extends Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <div className="item-container">
                <a className="item-preview-link" href={this.props.itemUrl}>
                    <div className="item-display-image">
                        <img src={this.props.imageUrl} />
                    </div>
                    <div className="item-details">
                        <p className="item-title">{this.props.title}</p>
                        <p>
                            <a className="item-shopName" href={this.props.shopUrl}>
                                {this.props.shopName}
                            </a>
                        </p>
                        <p className="item-price">&#36;{this.props.price}  </p>
                    </div>
                </a>
            </div>
        )
    }
}