import React from "react";

const Header = () => {
  return (
    <div className="HomePage__Header">
      <div className="HomePage__Header__Left">
        <h1>Car Traders</h1>
      </div>
      <div className="HomePage__Header__Right">
        <div className="HomePage__Header__Right__Item1">
          <div className="Item1__Login" >Login</div>
          <div className="Item1__Span">Or</div>
          <div className="Item1__Login">Register</div>
        </div>
        <div className="HomePage__Header__Right__Item2">
          <div>0800 887 637</div>
        </div>
        <div className="HomePage__Header__Right__Item3">
          <div>Find Us</div>
        </div>
      </div>
    </div>
  );
};

export default Header;
