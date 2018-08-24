import React, {Component} from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import { Panel } from 'bee-panel';
import Message from 'bee-message';
import 'bee-message/build/Message.css';
import copy from 'copy-to-clipboard';
import './style.scss';
 

const defaultProps = {
  clsPrefix: "u-panel"
};

class AcPanel extends Component {

  constructor(props) {
    super(props);
    this.copyDemo = this.copyDemo.bind(this);
  }

  copyDemo(e){
    let panelTarget = e.target.parentNode;
    let clipBoardContent = panelTarget.firstChild.innerText;
    copy(clipBoardContent);
    Message.create({content: '复制成功！', color: 'success' , duration: 2});
  }

  render() { 
    const {
      code, 
      copyable, 
      className, 
      content, 
      clsPrefix,
      ...props
    } = this.props;

    const contentClass = {
      [`${clsPrefix}-content`] : true
    }
    copyable === false ? false : true;
    return (
      <div className={`ac-clipboard-panel ${className?className:""}`}>
        <Panel {...props}>
          {code && (
            <pre>
              <code className="hljs javascript">{code}</code>
            </pre>
          )}
          {copyable &&(
            <i className="uf uf-files-o" onClick={this.copyDemo}></i>
          )}
        </Panel>
      </div>
    );
  }
}

AcPanel.propTypes = {
  //是否可复制内容
  copyable : PropTypes.bool,
  //展示板内容
  content : PropTypes.string
};

AcPanel.defaultProps = defaultProps;

export default AcPanel;