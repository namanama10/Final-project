import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import {
  NavbarMenu,
  MainContent,
  Banner
} from './components'


function App() {
  return (
    <>
      <div className="App">
        <div className='myBanner'>
          <Banner></Banner>
        </div>
        <div className='containerUtama'>
          <div className='myNavbar'>
          <NavbarMenu></NavbarMenu>
          </div>
        <MainContent ></MainContent> 
        </div>
        </div>
      </>
  );
}

export default App;
