import Mock from "mock";

export default class MockData {
    constructor() {
        this.send = this.send.bind(this);
    }

    onloadend = () => { };
    currentRoute = "/";
    status = 200;
    responseText = "";

    open(method, url) {
        this.currentRoute = url;
    }

    send() {
        switch (this.currentRoute) {
            case "/depts":
                this.status = 200;
                this.responseText = JSON.stringify({
                    status: 200,
                    data: [
                        {
                            deptName: "工程研发部门",
                            jobs: [
                                { name: "Mac 开发工程师", count: 9 },
                                { name: "iOS App 测试工程师", count: 17 },
                                { name: "Android 远程控制工程师", count: 61 },
                                { name: "Web 前端工程师", count: 31 },
                                { name: "Android 多媒体开发工程师", count: 2 }
                            ],
                        },
                        {
                            deptName: "产品设计部门",
                            jobs: [
                                { name: "网页设计师", count: 47 },
                                { name: "ID/工业设计师", count: 39 },
                                { name: "视觉设计师/GUI 界面设计师", count: 42 },
                                { name: "平面设计师", count: 8 },
                            ],
                        },
                    ],
                });
                break;
            default:
                this.status = 404;
                break;
        }
        this.onloadend();
    }
}