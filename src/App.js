
import NavBar from "./component/navbar/NavBar";
import './style.css'
import Header from "./component/header/Header";
import './App.css'
import {Routes, Route} from 'react-router-dom'
import Home from "./component/pages/home/Home";
import About from "./component/pages/about/About";
import Shop from "./component/pages/shop/Shop";
import Contact from "./component/pages/contact/Contact";
import Error from "./component/pages/Error/Error";
import Bakery from "./component/pages/bakery/Bakery";
import Sweet from "./component/pages/sweet/Sweet";
import Footer from "./component/footer/Footer";
import NavBar2 from "./component/navbar/NavBar2";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    AOS.init({
      once: false,
      // disable: "phone",
      duration: 700,
      easing: "ease-out-cubic",
    });
  }, []);
  AOS.init();
  return (
    <div>
         <Header/>
          <div> 
            <Routes>
              <Route path="/home" element={<Home/>}/>
              <Route path="/about" element={<About/>}/>
              <Route path="/bakery" element={<Bakery/>}/>
              {/* <Route path="/sweet" element={<Sweet/>}/> */}
              <Route path="/shop" element={<Shop/>}/>
              <Route path="/contact" element={<Contact/>}/>
              <Route path="/*" element={<Error/>}/>
            </Routes>
          </div>
          <Footer/>    
          {/* <NavBar2/> */}
    </div>
  );
}
export default App;
