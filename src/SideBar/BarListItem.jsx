import React, { Component } from "react";
import HackedCheckbox from "./HackedCheckbox";

/**
 * 列表中的子项目
 * 
 * 参数列表
 * - `onCHange` 选框状态值发生改变时触发的事件
 */
export class BarListItem extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        //被渲染的数据
        const data = this.props.data;
        //岗位名称
        const name = data.name;
        //岗位剩余
        const count = data.count;
        //回调函数
        const fnChange = this.props.onChange;
        //当前岗位index
        const index = this.props.index;
        //父级岗位index
        const parent =this.props.parent;
        //当前选中状态.
        const checked = data.checked && data.checked === true ? true : false;

        return (
            <div className="list-item">
                {/* 复选框 */}
                <HackedCheckbox  checked={checked} id={name}
                    onChange={(ev) => fnChange(parent, index, ev)}  />
                {/* 该label用for与input关联 */}
                <label htmlFor={name} className="job-name">{name}</label>
                {/* 统计数据的counter */}
                <div className="counter">
                    {count}
                </div>
            </div>
        );
    }
}