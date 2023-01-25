import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, MainContent, Banner, Footer} from "./components";

const App = () => {
  return (
    <div className="App">
      <div className="App-header">
        <div className="myNavbar">
          <Navbar></Navbar>
        </div>
        <div className="myBanner">
          <Banner></Banner>
        </div>
        <div className="myMainContent">
          <MainContent></MainContent>
        </div>
        <div className="myFooter">
          <Footer></Footer>
        </div>
      </div>
    </div>
  );
};

export default App;
