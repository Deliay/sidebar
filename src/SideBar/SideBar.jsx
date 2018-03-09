import React, { Component } from "react";
import "./sidebar.css"
import { BarList } from "./BarList";
export class SideBar extends Component {
    render() {
        return (
            <div className="sider-bar">
                <div className="header">
                    <h2 className="title">职位招聘</h2>
                    <a className="clean" onClick="">清空</a>
                </div>
                <div className="list">
                    <BarList />
                </div>
            </div>
        );
    }
}