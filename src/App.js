import React from "react";
import Welcome from "./Pages/Welcome"
import Blog from "./Pages/Blog"
import BlogDetail from "./Pages/blog_detail";
import Project from "./Pages/Project"
import Contact from "./Pages/Contact"
import './App.css'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path='/' exact component={Welcome}></Route>
          <Route path='/blog' component={Blog}></Route>
          <Route path='/detail/:id' component={BlogDetail}></Route>
          <Route path='/projects' component={Project}></Route>
          <Route path='/contact' component={Contact}></Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App;
