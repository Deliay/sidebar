import React, { Component } from "react";

export class BarListHeader extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        const deptName = this.props.deptName;
        const count = this.props.count;
        return (
            <div className="list-header">
                <div className="check">
                <input id={deptName} type="checkbox" />
                <label for={deptName} className="checkbox-hack" />
            </div>
            <label for={deptName} className="dept-name">{deptName}</label>
            <p className="drop-button"></p>
            <div className="counter">
                {count}
            </div>
            </div>
        );
    }
}