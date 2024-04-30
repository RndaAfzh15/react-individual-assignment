import React, { Component } from "react";
import NavbarComp from "./Components/NavbarComp";
import HomeContainer from "./containers/HomeContainer";
import CreateUserContainer from "./containers/CreateUserContainer";
import EditUserContainer from "./containers/EditUserContainer";
import DetailUserContainer from "./containers/DetailUserContainer";
import { BrowserRouter,
          Route, } from "react-router-dom";

export default class App extends Component {
  
  render() {
    return (
      <div className="mx-3">
        <NavbarComp />
        <BrowserRouter>
       <Route path="/" exact component={HomeContainer}/>
          
          <Route path="/create" exact component={CreateUserContainer}/>
          
          <Route path="/detail/:id" exact component={DetailUserContainer}/>

          <Route path="/edit/:id" exact component={EditUserContainer}/>
          </BrowserRouter>
      </div>
    );
  }
}
