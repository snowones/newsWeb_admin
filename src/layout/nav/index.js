import React,{ Component } from 'react';

import { Menu, Icon } from 'antd';

// 引入子菜单组件
const SubMenu = Menu.SubMenu; 

class Nav extends Component {
    render(){
        return(
            <Menu
                id = "home_nav"
                mode = "inline" 
                theme = "dark"  
                defaultSelectedKeys={['1']}
             >
                <SubMenu
                        key="sub1"
                        title={<span><Icon type="pie-chart" /><span>用户模块</span></span>}
                    >
                        <Menu.Item key="1"><a href="#/main">用户信息</a></Menu.Item>
                    </SubMenu>
                    <SubMenu
                        key="sub2"
                        title={<span><Icon type="dashboard" /><span>疾病防治知识</span></span>}
                    >
                        <Menu.Item key="2"><a href="#/articleType/1">呼吸道疾病</a></Menu.Item>
                        <Menu.Item key="3"><a href="#/articleType/2">传染类疾病</a></Menu.Item>
                        <Menu.Item key="4"><a href="#/articleType/3">口腔疾病</a></Menu.Item>
                        <Menu.Item key="5"><a href="#/articleType/4">皮肤疾病</a></Menu.Item>
                        <Menu.Item key="6"><a href="#/articleType/5">肠道疾病</a></Menu.Item>
                    </SubMenu>
                    <SubMenu
                        key="sub3"
                        title={<span><Icon type="dashboard" /><span>疾病防治交流</span></span>}
                    >
                        <Menu.Item key="7"><a href="#/tieziList">疾病交流帖</a></Menu.Item>
                    </SubMenu>
                    <SubMenu
                        key="sub4"
                        title={<span><Icon type="dashboard" /><span>MarkDown</span></span>}
                    >
                        <Menu.Item key="8"><a href="#/markDownDemo">测试markdown</a></Menu.Item>
                    </SubMenu>
            </Menu>
        )
    }

}

export default Nav;