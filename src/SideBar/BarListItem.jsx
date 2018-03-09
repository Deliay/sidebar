import React, { Component } from "react";

export class BarListItem extends Component {

    render() {
        const data = this.props.data;
        const name = data.name;
        const count = data.count;
        return (
            <div className="list-item">
                <div className="check">
                    <input id={name} type="checkbox" />
                    <label for={name} className="checkbox-hack" />
                </div>
                <label for={name} className="job-name">{name}</label>
                <div className="counter">
                    {count}
                </div>
            </div>
        );
    }
}