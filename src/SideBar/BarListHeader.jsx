import React, { Component } from "react";
import HackedCheckbox from "./HackedCheckbox";
import DropdownButton from "./DropdownButton";
/**
 * 用于列表的头部项目（父级）
 * 
 * 参数列表
 * - `onChange` 列表选框被勾选，值发生改变时的事件
 */
export class BarListHeader extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        //部门名称
        const deptName = this.props.deptName;
        //子岗位统计数量
        const count = this.props.count;
        //勾选状态
        const checked = this.props.checked;

        return (
            <div className="list-header">
                <HackedCheckbox checked={checked} onChange={this.props.onChange} id={deptName} />
                {/* 部门名称 */}
                <label htmlFor={deptName} className="dept-name">{deptName}</label>
                {/* 下拉按钮 */}
                <DropdownButton />
                {/* 总数 */}
                <div className="counter">
                    {count}
                </div>
            </div>
        );
    }
}