import React from 'react';
import { Route, Routes } from 'react-router-dom';
//  importing all required components for routing purpose
import Home from './Screens/Home/Home';
import DeleteBooks from './Screens/DeleteBooks/DeleteBooks';
import UpdateBooks from './Screens/UpdateBooks/UpdateBooks';
import CreateBooks from './Screens/CreateBooks/CreateBooks';
import ShowBooks from './Screens/ShowBooks/ShowBooks';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/books/create" element={<CreateBooks />} />
      <Route path="/books/details/:id" element={<ShowBooks />} />
      <Route path="/books/edit/:id" element={<UpdateBooks />} />
      <Route path="/books/delete/:id" element={<DeleteBooks />} />
    </Routes>
  );
};

export default App;
