import React, { Component } from "react";
import { BarListHeader } from "./BarListHeader";
import { BarListItem } from "./BarListItem";

export class BarList extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        const data = this.props.data;
        const index = this.props.index;
        let count = 0;
        let checked = false;
        //从数据中生成子项列表
        const jobs = data.jobs.map((p, i) => {
            count += p.count;
            if(p.checked) checked = true;
            return <BarListItem 
                        index={i} 
                        parent={this.props.index} 
                        onChange={this.props.onItemClick} 
                        data={p} 
                        key={p.name} />
        });

        return (
            <div className="bar-list">
                <BarListHeader 
                    onChange={(event) => this.props.onHeaderClick(index, event)} 
                    deptName={data.deptName} 
                    count={count}
                    checked={checked} />
                {jobs}
            </div>
        );
    }
}