import React,{useState} from 'react';
import './App.css';
import './index.css';
import ClientLayout from './pages/layout/ClientLayout';
import AdminLayout from './pages/layout/AdminLayout';
import Product from './pages/productsPage/productsList';
import ProductDetails from './pages/productsPage/productDetails';
import Homepage from './pages/homePage';
import ListProductsAdmin from './pages/adminHomePage/Products/listProducts';
import CreateProductsAdmin from './pages/adminHomePage/Products/createProducts';
import ThongKe from './pages/adminHomePage/thongke';
import{Routes, Route,Link} from 'react-router-dom';
import Signup from './pages/auth/signup';
import Signin from './pages/auth/signin';
import ListUsers from './pages/adminHomePage/Users/listUsers';
import CreateUser from './pages/adminHomePage/Users/createUser';
import UpdateProducts from './pages/adminHomePage/Products/updateProducts';
import ListCategories from './pages/adminHomePage/Categories/listCategories';
import Cart from './pages/cart/cart';
import CreateCategories from './pages/adminHomePage/Categories/createCate';
import UpdateCategories from './pages/adminHomePage/Categories/updateCate';
import Contact from './pages/contact';
import ListContact from './pages/adminHomePage/contact/listContact';
import CheckOut from './pages/checkout/checkOut';
import ListOrders from './pages/adminHomePage/orders/listOrders';
import ListOrdersDetails from './pages/adminHomePage/orders/ordersDetails';
import PrivateRouter from "./pages/utils/privateRouter";
function App() {
  return (
    <div className="App">
      <Routes>
          <Route path='/' element={<ClientLayout />}>
              <Route index element={<Homepage/>}/>
              <Route path={'products'}>
                  <Route index element={<Product />} />
                  <Route path={':_id'} element={<ProductDetails />} />
              </Route>
              <Route path='cart' element={<Cart/>} />
              <Route path='contact' element={<Contact/>} />
              <Route path='checkOut' element={<CheckOut/>} />
          </Route>

          <Route path='signup' element={<Signup/>} />
          <Route path='signin' element={<Signin/>} />

          <Route path='admin' element={<PrivateRouter><AdminLayout/></PrivateRouter>}>
              <Route index element={<ThongKe/>}/>
              <Route path='productsAdmin'>
                  <Route index element={<ListProductsAdmin />}/>
                  <Route path=':_id' element={<ProductDetails />}/>
                  <Route path='create' element={<CreateProductsAdmin />}/>
                  <Route path='edit/:id' element={<UpdateProducts/>}/>
              </Route>
              <Route path='categories'>
                  <Route index element={<ListCategories />}/>
                  <Route path='create' element={<CreateCategories />}/>
                  <Route path='edit/:id' element={<UpdateCategories/>}/>
              </Route>
              <Route path={'users'}>
                  <Route index element={<ListUsers />} />
                  <Route path={'create'} element={<CreateUser />} />
              </Route>
              <Route path='contact'>
                  <Route index element={<ListContact/>}/>
              </Route>
              <Route path='orders'>
                  <Route index element={<ListOrders/>}/>
                  <Route path=':id' element={< ListOrdersDetails/>}/>
              </Route>
          </Route>
      </Routes>    
    </div>
  );
}

export default App;
