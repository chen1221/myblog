import React from 'react';
import ReactDom from 'react-dom';
import Icon from 'antd/lib/icon';
import {Link} from 'react-router';
class Nav extends React.Component {
  render(){
    return(
      <div className="nav">
        <h1>CDXUE@{this.props.title.slice(1) ? this.props.title.slice(1):'home'}</h1>
        <Link to='/' activeStyle={{color:'#E91E63'}} onlyActiveOnIndex={{true}}><Icon type="home" />Home</Link>
        <Link to='/blog' activeStyle={{color:'#E91E63'}}><Icon type="book" />Blog</Link>
        <Link to='/work' activeStyle={{color:'#E91E63'}}><Icon type="file-text" />Work</Link>
        <Link to='info' activeStyle={{color:'#E91E63'}}><Icon  type="heart" />About</Link>
        <Icon />
      </div>
    )
  }
}
export default Nav;
