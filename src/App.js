import React, {Component} from 'react';
import {BrowserRouter as  Router, Route, Link, NavLink } from 'react-router-dom'
import SignInForm from './LoginPage/SignInForm';
import SignUpForm from './SignUpPage/SignUpForm';
import Test1 from './TestPages/Test1';
import StateExample from './TestPages/StateExample';
import PropsExample from './TestPages/PropsExample';
import ConstructorExample from './TestPages/ConstructorExample';
import ComponentLifeCycle from './TestPages/ComponentLifeCycle';
import ReactList from './TestPages/ReactList';
import WithRouterExample from './TestPages/WithRouterExample';
import GetAPIExample from './TestPages/GetAPIExample';
import Tree from './TestPages/Tree';
import './App.css';

class App extends Component{


  render () {
    return (
      <Router basename="/react-auth-ui/">
        <div className="App">
          <div className="App__Aside">
            <div className="FormTitle">
              <h1><label>Practice ReactJS</label></h1>
              <ul>
                <li><Link to="/component_ex"                        className="FormField__Link">Component Example</Link></li>
                <li><Link to="/state_ex"                            className="FormField__Link">State Example</Link></li>
                <li><Link to="/props_ex"                            className="FormField__Link">Props Example</Link></li>
                <li><Link to="/constructor_ex"                      className="FormField__Link">Constructor Example</Link></li>
                <li><Link to="/lifecycle_ex"                        className="FormField__Link">Life Cycle Example</Link></li>
                <li><Link to="/reactlist_ex"                        className="FormField__Link">React List Example</Link></li>
                <li><Link to="/withrouter_ex/:id/:action"           className="FormField__Link">With Router Example (/withrouter_ex/:id/:action)</Link></li>
                <li><Link to="/getapi_ex/"                          className="FormField__Link">Get API example</Link></li>
                <li><Link to="/tree_ex/"                             className="FormField__Link">Tree example</Link></li>
                
              </ul>       
            </div>
             <Route path="/component_ex"                            component={Test1}></Route>
             <Route path="/state_ex"                                component={StateExample}></Route>
             <Route path="/props_ex"                                component={PropsExample}></Route>
             <Route path="/constructor_ex"                          component={ConstructorExample}></Route>
             <Route path="/lifecycle_ex"                            component={ComponentLifeCycle}></Route>
             <Route path="/reactlist_ex"                            component={ReactList}></Route>
             <Route path="/withrouter_ex/:id/:action"               component={WithRouterExample}></Route>
             <Route path="/getapi_ex/"                              component={GetAPIExample}></Route>
             <Route path="/tree_ex/"                                component={Tree}></Route>
             
          </div>
          <div className="App__Form">
              <div className ="PageSwitcher">
                    <NavLink to="/sign-in"                          activeClassName="PageSwitcher__Item--Active" className="PageSwitcher__Item">Sign In</NavLink>
                    <NavLink exact to="/"                           activeClassName="PageSwitcher__Item--Active" className="PageSwitcher__Item">Sign Up</NavLink>
              </div>
              <div className="FormTitle">
                  <NavLink to="/sign-in"                            activeClassName="FormTitle__Link--Active" className="FormTitle__Link">Sign In</NavLink> 
                    or 
                  <NavLink exact to="/"                             activeClassName="FormTitle__Link--Active" className="FormTitle__Link">Sign Up</NavLink>
              </div>
              <Route path="/sign-in"                                component={SignInForm}></Route>
              <Route exact path="/"                                 component={SignUpForm}></Route>
          </div>
        </div>
      </Router>
    );
  }
}

export default  App;
