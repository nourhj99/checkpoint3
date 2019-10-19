import React from 'react';
import logo from './logo.svg';
import './App.css';
import myImage from "./imageInSrc.png";
import './style.css';
import Cont from './Container';


function App() {
  return (
    
      
      <div className="check" style={{ border: 'solid 1px black', maxWidth: "100%" }} >

        <h1 className="title red"> Welcome </h1>

        <br />
        <br />

        <img className="image1" src={myImage} />

        <br/>
        
        <img className="image1" src="/imageInPublic.jpg" />
      <Cont/>
      </div>
    
  );
}

export default App;
