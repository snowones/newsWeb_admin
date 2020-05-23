import React, { Component } from 'react';
import './index.scss';

import {Table,Button,Modal} from 'antd';

//封装好的公共方法
import {api,host} from '../../public/until'


class TieziList extends Component {
    constructor(props){
        super(props);
        this.state = {
            showData:[],//需要做展示的数据
            visible:false,//详情弹窗
            content:'',//文章详情内容
        }
    }

    componentDidMount(){
        this.onChange();
    }

    onChange = ()=>{
         /**
         * zyx
         * 2020/5/19
         * 拿到数据
         */
        api({
            url:host + 'newsSelectContentByType',
            args: {
                type:2,
            },
            callback: (res) => {
                this.showData(res);
            }
        });
    }
    
    /**
     * 数据处理函数
     * 将返回的数据处理成数据表格需要的数据
     */
    showData = (data)=>{
        console.log('我是帖子数据');
        console.log(data);
        let showData = [];// 渲染的数据
        
        for(let i=0;i<data.length;i++){
            showData.push({
                id : "",
                name : "",
                avatar : "",
                title : "",
                subtitle : "",
                content : "",
                img : "",
                create_time : "",
            })
        }
        
        for(let j=0;j<data.length;j++){
            let img =  JSON.parse(data[j].img); 
            
            showData[j].id= data[j].id;
            showData[j].name= data[j].name;
            showData[j].avatar= data[j].avatar;
            showData[j].title= data[j].title;
            showData[j].subtitle= data[j].subtitle;
            showData[j].content= data[j].content;
            showData[j].img= img;
            showData[j].create_time= data[j].create_time;
        }

        this.setState({
            showData
        })

    }

    delete = (id)=>{
        api({
            url:host + 'newsDeleteContent',
            args: {
                id
            },
            callback: (res) => {
                //拿到type
                this.onChange();
            }
        });
    }

     //打开详情弹窗
     visibleHandleOk = (content)=>{
        this.setState({
            content,
            visible:true,
        })
    }

    //关闭详情弹窗
    visibleHandleCancel = ()=>{
        this.setState({
            content:'',
            visible:false,
        })
    }


    render() {
        const columns = [
            {
                title: '作者',
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
                title: '题目',
                dataIndex: 'title',
                key: 'title',
            },
            {
                title: '提纲',
                dataIndex: 'subtitle',
                key: 'subtitle',
            },
            {
                title: '文章背景',
                key: 'img',
                render: (text, record) => (
                    <div>
                      <img style={{height:'49px'}} src={record.img[0]}></img>
                     </div>
                )
            },
            {
                title: '发表时间',
                dataIndex: 'create_time',
                key: 'create_time',
            },
           
            {
                title:'操作',
                key: 'action',
                render: (record) => (
                   
                    <div>
                        <Button style={{color:"#63B8FF",marginRight:"10px"}} onClick = {() => {
                            this.delete(record.id)
                        }} >删除
                        </Button>
                        <Button style={{color:"#63B8FF"}} onClick = {() => {
                            this.visibleHandleOk(record.content)
                        }} >查看帖子详情
                        </Button>
                    </div>
                ),
            }
        ];
        return (
            <div>
                 <Modal
                    title="文章详情"
                    visible={this.state.visible}
                    onOk={this.visibleHandleCancel}
                    onCancel={this.visibleHandleCancel}
                >
                    <p>{this.state.content}</p>
                </Modal>
                <Table 
                    dataSource={this.state.showData} 
                    columns={columns}
                    rowKey={record => record.id}
                />;
            </div>
        );
    }
}

export default TieziList;