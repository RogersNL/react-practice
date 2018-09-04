import React from "react";

import Navitem from "./Navitem";

function Navpage(){
  var myStyledComponentStyles = {
    backgroundColor: '#ecf0f1',
    fontFamily: 'sans-serif'


  }
  var listItems = {
    float: 'right',
    display:'inline-flex',
    paddingLeft: '40px',
    fontSize: '1px'
  }
  var logoStyle = {
    display: 'inline-flex',
    float: 'left'
  }
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light" >
      <a class="navbar-brand" href="#">Navbar</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto " >
          <li class="nav-item active">
            <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#"><Navitem name="Become A Host"/></a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#"><Navitem name=" Earn credit"/></a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#"><Navitem name="Sign up "/></a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#"><Navitem name=" Log in"/></a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#"><Navitem name=" Help"/></a>
          </li>

        </ul>

      </div>
    </nav>



  );
}

export default Navpage;
