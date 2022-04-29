import { Route, Routes } from 'react-router-dom';
import './App.css';
import Blogs from './Pages/Blogs/Blogs/Blogs';
import Home from './Pages/Home/Home/Home';
import CustomTitle from './Pages/Shared/CustomTitle/CustomTitle';
import Footer from './Pages/Shared/Footer/Footer';
import Header from './Pages/Shared/Header/Header';

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


        <Route path='/blogs' element={
          <CustomTitle title={"Blogs"}>
            <Blogs></Blogs>
          </CustomTitle>
        }></Route>


      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
