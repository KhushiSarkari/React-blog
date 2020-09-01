import React, { Component } from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom'
import Header from './components/Header'
import AllBlogs from './components/AllBlogs'
import AddBlog from './components/AddBlog'
import Blog from './components/Blog'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Header />
          <Switch>
            <Route exact path='/' component={AllBlogs} />
            <Route path='/add' component={AddBlog} />
            <Route path='/blog/:blog_id' component={Blog} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
