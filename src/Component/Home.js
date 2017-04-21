import React from 'react';
import ReactDom from 'react-dom';
import Button from 'antd/lib/button';
import  Modal from 'antd/lib/modal';
class Home extends React.Component{
  constructor(){
    super();
    this.state={
        visible: false,
    }
  }
  showModal () {
    this.setState({
      visible: true,
    });
  }
  handleOk () {
    this.setState({
      visible: false,
    });
  }
  render(){
    return(
      <div className='home-wrap'>
        <div className='home-cover'>
          <div className='home-style'>
            <h1>HI,I'M <span>CHENDONGXUE</span></h1>
            <p>WEB DEVELOPER</p>
            <Button type='primary'　onClick={this.showModal.bind(this)}>INFO</Button>
            <Modal title="关于我的信息" visible={this.state.visible}
          onOk={this.handleOk.bind(this)} onCancel={this.handleOk.bind(this)}
        >
          <p>我的名字：陈冬雪</p>
          <p>我的性别：女</p>
          <p>现住址：北京昌平</p>
        </Modal>
          </div>
        </div>
      </div>
    )
  }
}
export default Home;
