import React, { Component } from "react";
import "./sidebar.css"
import { BarList } from "./BarList";
import MockData from "./../SideBarTest/MockData"

export class SideBar extends Component {

    /**
     * 绑定事件this
     * @param {any} props 
     */
    constructor(props) {
        super(props);
        this.state = {
            status: 0,
            data: [],
        };
        this.onHeaderClick = this.onHeaderClick.bind(this);
        this.onItemClick = this.onItemClick.bind(this);
        this.onCleanClick = this.onCleanClick.bind(this);
    }

    /**
     * 在组件将要mount的时候请求数据
     */
    componentDidMount() {
        var req;
        if (this.props.enableTest) {
            req = new MockData();
        }
        else {
            req = new XMLHttpRequest();
        }
        req.open("GET", "/depts");
        req.onloadend = () => {
            this.setState(JSON.parse(req.responseText));
        };
        req.send();
    }

    /**
     * 父级header被点击的事件，这里将统一子级item的选中状态
     * @param {Number} index index
     * @param {React.ChangeEvent<HTMLInputElement>} event react事件
     */
    onHeaderClick(index, event) {
        //拿一下 state
        let currentState = this.state;
        for (let subIndex = 0; subIndex < currentState.data[index].jobs.length; subIndex++) {
            currentState.data[index].jobs[subIndex].checked = event.target.checked;
        }
        //更新
        this.setState(currentState);
    }

    /**
     * 子级item被点击的事件
     * @param {Number} header 父级
     * @param {Number} index 当前项index
     * @param {React.ChangeEvent<HTMLInputElement>} event react事件
     */
    onItemClick(header, index, event) {
        let currentState = this.state;
        currentState.data[header].jobs[index].checked = event.target.checked;
        this.setState(currentState);
    }

    /**
     * 当点击按钮被选中，设置任何数据的checked皆为false
     */
    onCleanClick() {
        let currentState = this.state;
        for (let index = 0; index < currentState.data.length; index++) {
            for (let subIndex = 0; subIndex < currentState.data[index].jobs.length; subIndex++) {
                currentState.data[index].jobs[subIndex].checked = false;
            }
        }
        this.setState(currentState);
    }

    render() {
        //从数据中生成父级list，并将数据移交父级list处理
        const deptsList = this.state.data.map((p, i) => 
            <BarList 
                /* 直接数据 */
                data={p} 
                /* header被点击的事件 */
                onHeaderClick={this.onHeaderClick}
                /* item被点击的事件 */
                onItemClick={this.onItemClick}
                key={p.deptName}
                /* index */
                index={i} />
        );
        return (
            <div className="sider-bar">
                {/* 总的顶部栏 */}
                <div className="header">
                    <h2 className="title">职位招聘</h2>
                    <a className="clean" onClick={this.onCleanClick}>清空</a>
                </div>
                {/* 下方数据渲染区域 */}
                <div className="list">
                    {deptsList}
                </div>
            </div>
        );
    }
}