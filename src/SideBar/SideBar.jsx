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

    render() {
        const deptsList = this.state.data.map(p => 
            <BarList data={p} key={p.deptName} />
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