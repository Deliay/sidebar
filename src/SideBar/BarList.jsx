import React, { Component } from "react";
import { BarListHeader } from "./BarListHeader";
import { BarListItem } from "./BarListItem";

export class BarList extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        const data = this.props.data;
        let count = 0;

        const jobs = data.jobs.map(p => {
            count += p.count;
            return <BarListItem data={p} key={p.name} />
        });
        return (
            <div className="bar-list">
                <BarListHeader deptName={data.deptName} count={count} />
                {jobs}
            </div>
        );
    }
}