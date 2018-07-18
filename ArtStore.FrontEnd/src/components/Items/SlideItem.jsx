import React, { Component } from 'react';

export default class SlideItem extends Component {
    constructor(props) {
        super(props);

        this.state = {
            classNames: [
                "carousel-item-wrapper",
                "fade",
                "show"
            ]
        }

        this.addClassNames = this.addClassNames.bind(this);
    }

    addClassNames(classNames) {
        var current = this.state.classNames;
        classNames.forEach(function(className) {
            current.push(className)
        }, this);
    }

    render() {
        return (
            <div className={this.state.classNames.join(' ')}>
                {this.props.children}
            </div>
        )
    }
}