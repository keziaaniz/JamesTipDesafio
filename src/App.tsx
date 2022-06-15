import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import List from './Pages/List';
import Form from './Pages/Form';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
      <div className='NavBar'>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/Form'>Form</Link>
          </li>
          <li>
            <Link to='/List'>List</Link>
          </li> 
        </ul>
      </div>
      <Routes>
        <Route path='/Form' element={<Form/>} />
        <Route path='/List' element={<List/>} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
