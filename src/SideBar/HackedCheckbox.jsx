import React, { Component } from "react";
import "./HackedCheckbox.css"

/**
 * 使用CSS Hack过的复选框
 */
export default class HackedCheckbox extends Component {

    render() {
        return (
            <div className="check">
                <input checked={this.props.checked}
                    onChange={this.props.onChange}
                    id={this.props.id}
                    type="checkbox" />
                <label htmlFor={this.props.id} className="checkbox-hack" />
            </div>);
    }
}