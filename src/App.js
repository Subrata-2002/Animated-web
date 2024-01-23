import React from 'react';
import Home from './component/Home';
import { Route ,Routes} from 'react-router-dom';
import About from './component/About';
import Contact from './component/Contact';
import Services from './component/Services';
import Navbar from './component/Navbar';
import Footer from './component/Footer'

const App = () => {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route  path='/' Component={Home}></Route>
      <Route path='/about' Component={About}></Route>
      <Route path='/services' Component={Services}></Route>
      <Route path='/contact' Component={Contact}></Route>
      <Route path="*" Component={Home}></Route>
    </Routes>
    <Footer/>

    </>
  );
}

export default App;