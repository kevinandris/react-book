import React from 'react';
import {Route, Routes} from 'react-router-dom';
import './app.css';

import CreateBook from './components/CreateBook';
import ShowBookList from './components/ShowBookList';
import ShowBookDetails from './components/ShowBookDetails';
import UpdateBookInfo from './components/UpdateBookInfo';


function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path="/" element={<ShowBookList/>} />
        <Route path="/create-book" element={<CreateBook/>} />
        <Route path="/Book-details" element={<ShowBookDetails/>} />
        <Route path="/update-info" element={<UpdateBookInfo/>} />

      </Routes>
    </div>
  )
}

export default App;