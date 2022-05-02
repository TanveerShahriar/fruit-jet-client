import { Route, Routes } from 'react-router-dom';
import './App.css';
import Blogs from './Pages/Blogs/Blogs/Blogs';
import CustomTitle from './Pages/Shared/CustomTitle/CustomTitle';
import Footer from './Pages/Shared/Footer/Footer';
import Header from './Pages/Shared/Header/Header';
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/Login/Login';
import NotFound from './Pages/NotFound/NotFound';
import Register from './Pages/Login/Register/Register';
import RequireAuth from './Pages/Login/RequireAuth/RequireAuth';
import { ToastContainer } from 'react-toastify';
import Inventory from './Pages/Inventory/Inventory/Inventory';
import FruitDetail from './Pages/Inventory/FruitDetail/FruitDetail';
import AddItem from './Pages/AddItem/AddItem';

function App() {
  return (
    <div className="App d-flex flex-column min-vh-100">
      <Header></Header>

      <Routes>
        <Route path='/' element={
          <CustomTitle title={"Home"}>
            <Home></Home>
          </CustomTitle>
        }></Route>

        <Route path='/home' element={
          <CustomTitle title={"Home"}>
            <Home></Home>
          </CustomTitle>
        }></Route>

        <Route path='/inventory' element={
          <RequireAuth>
            <CustomTitle title={"Inventory"}>
              <Inventory></Inventory>
            </CustomTitle>
          </RequireAuth>
        }></Route>

        <Route path='/inventory/:fruitId' element={
          <RequireAuth>
            <CustomTitle title={"Detail"}>
              <FruitDetail></FruitDetail>
            </CustomTitle>
          </RequireAuth>
        }></Route>

        <Route path='/additem' element={
          <RequireAuth>
            <CustomTitle title={"Add Item"}>
              <AddItem></AddItem>
            </CustomTitle>
          </RequireAuth>
        }></Route>

        <Route path='/blogs' element={
          <CustomTitle title={"Blogs"}>
            <Blogs></Blogs>
          </CustomTitle>
        }></Route>

        <Route path='/login' element={
          <CustomTitle title={"Log In"}>
            <Login></Login>
          </CustomTitle>
        }></Route>

        <Route path='/register' element={
          <CustomTitle title={"Register"}>
            <Register></Register>
          </CustomTitle>
        }></Route>

        <Route path='*' element={
          <CustomTitle title={"Not Found"}>
            <NotFound></NotFound>
          </CustomTitle>
        }></Route>

      </Routes>

      <Footer></Footer>
      <ToastContainer />
    </div>
  );
}

export default App;
