import React, { Component } from "react";
import "./DropdownButton.css"
/**
 * CSS下拉按钮
 */
export default class DropdownButton extends Component {
    
    constructor(props) {
        super(props);
    }

    render() {
        return (<p className="drop-button" {...this.props}></p>);
    }
}