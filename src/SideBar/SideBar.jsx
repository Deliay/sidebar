import React, { Component } from "react";
import "./sidebar.css"
import { BarList } from "./BarList";
import MockData from "./../SideBarTest/MockData"

export class SideBar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            status: 0,
            data: [],
        };
        this.onHeaderClick = this.onHeaderClick.bind(this);
        this.onItemClick = this.onItemClick.bind(this);
    }

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
     * Handle header change
     * @param {Number} index 
     * @param {React.ChangeEvent<HTMLInputElement>} event 
     */
    onHeaderClick(index, event) {
        let currentState = this.state;
        for (let subIndex = 0; subIndex < currentState.data[index].jobs.length; subIndex++) {
            currentState.data[index].jobs[subIndex].checked = event.target.checked;
        }
        this.setState(currentState);
    }

    onItemClick(header, index, event) {
        let currentState = this.state;
        currentState.data[header].jobs[index].checked = event.target.checked;
        this.setState(currentState);
    }

    render() {
        //从数据中生成父级list，并将数据移交父级list处理
        const deptsList = this.state.data.map((p, i) => 
            <BarList 
                data={p} 
                onHeaderClick={this.onHeaderClick}
                onItemClick={this.onItemClick}
                key={p.deptName}
                index={i} />
        );
        return (
            <div className="sider-bar">
                <div className="header">
                    <h2 className="title">职位招聘</h2>
                    <a className="clean" onClick="">清空</a>
                </div>
                <div className="list">
                    {deptsList}
                </div>
            </div>
        );
    }
}