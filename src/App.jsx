import './App.css';
import React from 'react';
import Projects from './components/projects';
import Summary from './components/Summary';
import NavBar from './components/NavBar';
import Footer from './components/Footer';

const App = () => {
  return (
    <div 
      className="app" 
    >
      <div className="content">
          <NavBar></NavBar>
          <Summary></Summary>
          <Projects></Projects>
          <Footer></Footer>
      </div>
    </div>
  );
}

export default App;

