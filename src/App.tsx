import React,{useState} from 'react';
import './App.css';
import './index.css';
import ClientLayout from './pages/layout/ClientLayout';
import AdminLayout from './pages/layout/AdminLayout';
import Product from './pages/products/productsList';
import ProductForm from './pages/products/productForm';
import ProductDetails from './pages/products/productDetails';
import Homepage from './pages/HomePage';
import AdminHomePage from './pages/adminHomePage';
import{Routes, Route,Link} from 'react-router-dom';
function App() {
  return (
    <div className="App">
      {/* Cấu hình route */}
         <ul>
            {/* <li><Link to={'/admin'}>Admin Home</Link></li>
            <li><Link to={'/admin/product'}>Admin Product</Link></li> */}
        </ul>
      <Routes>
          <Route path='/' element={<ClientLayout />}>
              <Route index element={<Homepage/>}/>
              <Route path={'products'}>
                  <Route index element={<Product />} />
                  <Route path={':_id'} element={<ProductDetails />} />
              </Route>
          </Route>

          {/* <Route path='admin' element={<AdminLayout />}>
              <Route index element={<AdminHomePage/>}/>
              <Route path='products'>
                  <Route index element={<Product />}/>
                  <Route path=':_id' element={<ProductDetails />}/>
                  <Route path=':_id/edit' element={<ProductForm />}/>
              </Route>
          </Route> */}
      </Routes>    
    </div>
  );
}

export default App;
