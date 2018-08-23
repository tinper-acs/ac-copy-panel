
import { Con, Row, Col } from 'bee-layout';
import { Panel } from 'bee-panel';
import ACPanel from '../src/index';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Button from 'bee-button';
import './demo.scss';


const CARET = <i className="uf uf-arrow-down"></i>;

const CARETUP = <i className="uf uf-arrow-up"></i>;


import Demo1 from "./demolist/Demo1";
var DemoArray = [{"example":<Demo1 />,"title":"代码示例展示板","code":"/**\n *\n * @title 代码示例展示板\n * @description 可一键复制代码的展示板\n *\n */\n\nimport React, { Component } from 'react';\nimport ACPanel from '@yonyou/ac-copy-panel';\n\nconst code =`\nimport React, { Component } from 'react';\nimport Temp from '../../src/index';\n\n class Demo1 extends Component {\n    render () {\n        return (\n            <div className=\"demoPadding\">\n                <Temp >复制这段测试代码</Temp>\n            </div>\n        )\n    }\n}\n` \n\nclass Demo1 extends Component {\n\n    constructor(props){\n        super(props)\n          this.state={\n            code : code\n          }\n    }\n    render () {\n        return (\n            <div className=\"demoPadding\">\n                <ACPanel copyable code={code}></ACPanel>\n        )\n    }\n}\n\n\n","desc":" 可一键复制代码的展示板"}]


class Demo extends Component {
    constructor(props){
        super(props);
        this.state = {
            open: false
        }
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        this.setState({ open: !this.state.open })
    }

    render () {
        const { title, example, code, desc  } = this.props;
        let caret = this.state.open ? CARETUP : CARET;
        let text = this.state.open ? "隐藏代码" : "查看代码";

        const footer = (
            <Button shape="block" onClick={ this.handleClick }>
                { caret }
                { text }
            </Button>
        );
        return (
            <Col md={12} >
                <h3>{ title }</h3>
                <p>{ desc }</p>
                <ACPanel copyable code={code} collapsible expanded={ this.state.open } colors='bordered' header={ example } footer={footer} footerStyle = {{padding: 0}}></ACPanel>
            </Col>
        )
    }
}

class DemoGroup extends Component {
    constructor(props){
        super(props)
    }
    render () {
        return (
                <Row>
                    {DemoArray.map((child,index) => {

                        return (
                            <Demo example= {child.example} title= {child.title} code= {child.code} desc= {child.desc} key= {index}/>
                        )

                    })}
                </Row>
        )
    }
}

ReactDOM.render(<DemoGroup/>, document.getElementById('root'));