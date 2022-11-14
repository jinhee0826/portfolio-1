import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Login from './page/Login';

import { Routes, Route } from "react-router-dom";
import Layout from "./page/Layout";
import Home from "./page/Home"
import { DataProvider } from './context/DataContext';
import ProductDress from './page/ProductDress';
import ProductDetaile from './page/ProductDetaile';
import Proflie from './page/Proflie';
import './css/style.css';
import Bouquet from './page/Bouquet';

function App() {
  return (
    <div className="App">
      <DataProvider>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path='dress' element={<ProductDress />}></Route>
            <Route path='bouquet' element={<Bouquet />}></Route>
            <Route path='loginform' element={<Login />} />
            <Route path='product/:id' element={<ProductDetaile />}></Route>
            <Route path='/mypage' element={<Proflie />}></Route>
          </Route>
        </Routes>
      </DataProvider>
    </div>
  );
}

export default App;
