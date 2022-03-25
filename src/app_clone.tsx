import React,{useState} from 'react';
import './App.css';
import{Routes, Route,Link} from 'react-router-dom';
import Dashboard from './pages/LayoutClone/dasdboard';
import Products from './pages/LayoutClone/products';
import ProductsFrom from './pages/LayoutClone/productsFrom';
import ProductsDetails from './pages/LayoutClone/productsDetails';
import ClientLayout from './pages/LayoutClone/client_page'
function AppClone() {
  return (
    <div className="App">
      <Routes>
                <Route path={'/'} element={<ClientLayout />}>
                    <Route index element={<Dashboard />} />
                    <Route path={'products'}>
                        <Route index element={<Products />} />
                        <Route path={':_id'} element={<ProductsDetails />} />
                        <Route path={'create'} element={<ProductsFrom />} />
                        <Route path={'edit/:_id'} element={<ProductsFrom />} />
                    </Route>
                </Route>
      </Routes>    
    </div>
  );
}

export default AppClone;
