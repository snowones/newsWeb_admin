import React, { Component } from 'react';
import './index.scss';

import {Table,Button} from 'antd';
//封装好的公共方法
import {api,host} from '../../public/until'


class Main extends Component {
    constructor(props){
        super(props);
        this.state = {
            showData:[],//需要做展示的数据
        }
    }

    componentDidMount(){
        this.onChange();
    }

    onChange = ()=>{
        api({
            url:host + 'newsSelectAllUserInfo',
          
            callback: (res) => {
                console.log(res);
                this.showData(res);
            }
        });
    }

    /**
     * 数据处理函数
     * 将返回的数据处理成数据表格需要的数据
     */
    showData = (data)=>{
        let showData = [];// 渲染的数据
        
        for(let i=0;i<data.length;i++){
            showData.push({
                id : "",
                name : "",
                account:"",
                password :"",
                avatar:"",
                create_time:"",
            })
        }
        
        for(let j=0;j<data.length;j++){
           
            showData[j].id= data[j].id;
            showData[j].name= data[j].name;
            showData[j].account= data[j].account;
            showData[j].password= data[j].password;
            showData[j].avatar= data[j].avatar;
            showData[j].create_time= data[j].create_time;
        }

        this.setState({
            showData
        })

    }


    render() {
        const columns = [
            {
                title: '姓名',
                dataIndex: 'name',
                key: 'name',
            },
            {
                title: '作者头像',
                key: 'avatar',
                render: (text, record) => (
                    <div>
                      <img style={{height:'49px'}} src={record.avatar}></img>
                     </div>
                )
            },
            {
                title: '账号',
                dataIndex: 'account',
                key: 'account',
            },
            {
                title: '密码',
                dataIndex: 'password',
                key: 'password',
            },
            {
                title: '注册时间',
                dataIndex: 'create_time',
                key: 'create_time',
            },
            // {
            //     title:'操作',
            //     key: 'action',
            //     render: (record) => (
                   
            //         <div>
            //             <Button style={{color:"#63B8FF"}} onClick = {() => {

            //             }} >编辑
            //             </Button>
            //         </div>
            //     ),
            // }
        ];
        return (
            <div>
                <Table 
                    dataSource={this.state.showData} 
                    columns={columns}
                    rowKey={record => record.id}
                />;
            </div>
        );
    }
}

export default Main;