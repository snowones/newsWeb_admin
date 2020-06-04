import React, { Component } from 'react';
import ReactMarkdown from 'react-markdown';

const input = '# This is a header\n\nAnd this is a paragraph'
class MarkDownDemo extends Component {
    constructor(props){
        super(props);
        this.state = {
            showData:[],//需要做展示的数据
        }
    }
    render() {
       
        return (
            <div>
                <ReactMarkdown source={input} />
            </div>
        );
    }
}

export default MarkDownDemo;