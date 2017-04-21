import React from 'react';
import ReactDom from 'react-dom';
import Button from 'antd/lib/button';
import {hashHistory} from 'react-router'
class Header extends React.Component{
  handleGo(num){
    hashHistory.go(num)
  }
  render(){
    return(
      <header>
          <Button shape="circle" icon="left" onClick={this.handleGo.bind(this,-1)}/>
          <h2>CDXUE@{this.props.title.slice(1) ? this.props.title.slice(1):'home'}</h2>
          <Button shape="circle" icon="right" onClick={this.handleGo.bind(this,1)} />
      </header>
    )
  }
}
export default Header;
