import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, MainContent, AboutUs, Footer, PilihKami} from "./components";

const App = () => {
  return (
    <div className="App">
      <div className="App-header">
        <div className="myNavbar">
          <Navbar></Navbar>
        </div>
        <div className="myMainContent">
          <MainContent></MainContent>
        </div>
        <div className="myPilihKami">
          <PilihKami></PilihKami>
        </div>
        <div className="myAbout">
        <AboutUs></AboutUs>
        </div>
        <div className="myFooter">
          <Footer></Footer>
        </div>
      </div>
    </div>
  );
};

export default App;
