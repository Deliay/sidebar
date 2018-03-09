import React, { Component } from "react";

export class BarListHeader extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        const deptName = this.props.deptName;
        const count = this.props.count;
        const checked = this.props.checked;

        return (
            <div className="list-header">
                <div className="check">
                <input checked={checked} 
                       onChange={this.props.onChange} 
                       id={deptName} 
                       type="checkbox" />
                <label htmlFor={deptName} className="checkbox-hack" />
            </div>
            <label htmlFor={deptName} className="dept-name">{deptName}</label>
            <p className="drop-button"></p>
            <div className="counter">
                {count}
            </div>
            </div>
        );
    }
}