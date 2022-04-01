import React,{useState} from 'react';
import './App.css';
import{Routes, Route,Link} from 'react-router-dom';
import ProductsFrom from './pages/LayoutClone/productsFrom';
import ClientAdmin from './pages/Lab3-4/ClientAdmin';
import ListBooks from './pages/Lab3-4/listBook';
import CreateBooks from './pages/Lab3-4/createBooks';
import UpdateBooks from './pages/Lab3-4/updateBooks';
import ListCategories from './pages/Lab3-4/listCategories';
import CreateCategories from './pages/Lab3-4/createCategories';
import UpdateCategories from './pages/Lab3-4/updateCategories';
function Lab3_4() {
  return (
    <div className="App">
      <Routes>
                <Route path={'/'} element={<ClientAdmin />}>
                    <Route path={'books'}>
                        <Route index element={<ListBooks />} />
                        <Route path={'create'} element={<CreateBooks />} />
                        <Route path={'edit/:id'} element={<UpdateBooks />} />
                    </Route>
                    <Route path={'categories'}>
                        <Route index element={<ListCategories />} />
                        <Route path={'create'} element={<CreateCategories />} />
                        <Route path={'edit/:id'} element={<UpdateCategories />} />
                    </Route>
                </Route>
      </Routes>    
    </div>
  );
}

export default Lab3_4;
