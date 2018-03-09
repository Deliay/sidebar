import React, { Component } from "react";

export class BarListItem extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        const data = this.props.data;
        const name = data.name;
        const count = data.count;
        const fnChange = this.props.onChange;
        const index = this.props.index;
        const parent =this.props.parent;
        const checked = data.checked && data.checked === true ? true : false;

        return (
            <div className="list-item">
                <div className="check">
                    <input onChange={(ev) => fnChange(parent, index, ev)} 
                           id={name} 
                           type="checkbox"
                           checked={checked} />
                    <label htmlFor={name} className="checkbox-hack" />
                </div>
                <label htmlFor={name} className="job-name">{name}</label>
                <div className="counter">
                    {count}
                </div>
            </div>
        );
    }
}