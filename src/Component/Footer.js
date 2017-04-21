import React from 'react';
import ReactDom from 'react-dom';
import Icon from 'antd/lib/icon';
import {Link} from 'react-router';
class Footer extends React.Component{
  render(){
    return(
      <footer>
      <Link to='/' activeStyle={{color:'#E91E63'}} onlyActiveOnIndex={{true}}><Icon type="home" /><br />Home</Link>
      <Link to='/blog' activeStyle={{color:'#E91E63'}}><Icon type="book" /><br />Blog</Link>
      <Link to='/work' activeStyle={{color:'#E91E63'}}><Icon type="file-text" /><br />Work</Link>
      <Link to='info' activeStyle={{color:'#E91E63'}}><Icon  type="heart" /><br />About</Link>
      </footer>
    )
  }
}
export default Footer;
