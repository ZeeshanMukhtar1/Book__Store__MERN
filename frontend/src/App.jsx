import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import CreateBook from './pages/CreateBooks/CreateBooks';
import ShowBook from './pages/ShowBook/ShowBook';
import EditBook from './pages/EditBook/EditBook';
import DeleteBook from './pages/DeleteBook/DeleteBook';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/books/create" element={<CreateBook />} />
      <Route path="/books/details/:id" element={<ShowBook />} />
      <Route path="/books/edit/:id" element={<EditBook />} />
      <Route path="/books/delete/:id" element={<DeleteBook />} />
    </Routes>
  );
};

export default App;
