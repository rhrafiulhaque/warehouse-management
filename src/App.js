import logo from './logo.svg';
import './App.css';
import Header from './component/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './component/Home/Home';
import Blog from './component/Blog/Blog';
import Footer from './component/Footer/Footer';
import Login from './component/Login/Login';
import Register from './component/Register/Register';
import RequireAuth from './component/RequireAuth/RequireAuth';
import Update from './component/Update/Update';
import AddItem from './component/AddItem/AddItem';
import Items from './component/Items/Items';
import Inventroy from './component/Inventory/Inventory';
import { ToastContainer } from 'react-toastify';
import NotFound from './component/NotFound/NotFound';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/blog' element={<Blog></Blog>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/inventory/:id' element={<RequireAuth>
          <Update></Update>
        </RequireAuth>}></Route>
        <Route path='/additem' element={<RequireAuth>
          <AddItem></AddItem>
        </RequireAuth>}></Route>
        <Route path='/inventory' element={<RequireAuth>
          <Inventroy></Inventroy>
        </RequireAuth>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
