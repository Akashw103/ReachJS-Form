import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Event from './components/Event';
import Form from './components/Form';
import DocumentEditor from './components/DocumentEditor';





function App() {
  return (
    <Router>
      <div className="App">
     <Navbar/>
     <Event/>
     <Form/>
     <DocumentEditor/>
      
      </div>
    </Router>
  );
}

export default App;
