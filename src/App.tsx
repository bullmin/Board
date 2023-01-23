import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
import Home from './screens/Home';
import Login from './screens/Login';
import Sign_Up from './screens/Sign_Up';
import Navbar from './components/Navbar'

function App() {
  
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path = "/" element = {<Home /> } />
        <Route path = "/login" element = {<Login /> } />
        <Route path = "/sign_up" element = {<Sign_Up /> } />
      </Routes>
    </Router>
  );
}

export default App;
