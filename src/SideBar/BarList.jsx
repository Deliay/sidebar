import React, { Component } from "react";
import { BarListHeader } from "./BarListHeader";
import { BarListItem } from "./BarListItem";

/**
 * 用于管理ListHeader和ListItem的容器
 * 
 * 参数列表：
 * - `onItemClick(Number, Number, Event)` 子项被点击触发的事件
 * - `onHeaderClick(Number, Event)` 列表头被点击触发的事件
 */
export class BarList extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        //用于渲染的数据，包含了子级数据
        const data = this.props.data;
        //这个列表的index
        const index = this.props.index;
        //列表子数据的合
        let count = 0;
        //用于标识子项有无被选中
        let checked = false;

        //从数据中生成子项列表
        const jobs = data.jobs.map((p, i) => {
            //统计数据
            count += p.count;
            //如果有被选中的项，则列表头也被选中
            if(p.checked) checked = true;

            //生成子项
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