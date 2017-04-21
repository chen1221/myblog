import React from 'react';
import Header from './Component/Header.js';
import Footer from './Component/Footer.js';
import Nav from './Component/Nav.js'
class App extends React.Component {
  constructor(){
    super();
    this.state={
      pathname:'/',
      mobile:true
    }
  }
  componentWillReceiveProps(){
    this.setState({pathname:this.props.location.pathname})
  }
  componentWillMount(){
    this.setState({pathname:this.props.location.pathname});
    this.setState({
      mobile:document.body.clientWidth<750 ? true : false
    })
  }
  componentDidMount(){
    let _this=this;
    window.onresize=function(){
      _this.setState({
        mobile:document.body.clientWidth<750 ? true : false
      })
    }
  }
  render () {
    return(
      <div className='wrap'>
        {this.state.mobile ? <Header title={this.state.pathname}/> : <Nav title={this.state.pathname}/>}
          <div className='main'>
            {this.props.children}
          </div>
        {this.state.mobile ? <Footer /> :null}

      </div>
    )
  }
}

export default App;
