import React from 'react';
import {Router, Route, hashHistory, IndexRoute} from 'react-router';
import App from './App.js';
import Home from './Component/Home.js';
import Blog from './Component/Blog.js';
import Work from './Component/Work.js';
import Info from './Component/Info.js';
import Post from './Component/Post.js';
function Routers(){
  return(
    <Router history={hashHistory}>
      <Route path='/' component={App}>
        <IndexRoute  component={Home} />
        <Route path='/blog' component={Blog}/>
        <Route path='/post/:title' component={Post} />
        <Route path='/work' component={Work}/>
        <Route path='/info' component={Info}/>
      </Route>
    </Router>
  )
}
export default Routers;
