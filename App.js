import React  from 'react';
import 'semantic-ui-css/semantic.min.css';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Signup from './Components/Signup/Signup';
import Login from './Components/Login/Login';
import GeneralMedicine from './Components/General/Generalmedicine';
import BabyMedicine from './Components/Baby/Babymedicine';
import Prescribedmedicine from './Components/Prescribed/Prescribedmedicine';
import GeneralDescription from './Components/General/Generaldescription';
import ViewCart from './Components/ViewCart/Viewcart';
import Checkout from './Components/Checkout/Checkout';
import Orderconfirmation from './Components/OrderConfirmation/OrderConfirmation';
import Maincontent from './Components/Maincontent/Maincontent';
import Headers from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Userverify from './Components/Userverify/Userverify';
import { useLocation } from 'react-router-dom';
import Loginheader from './Components/Header/Loginheader';


const App = () =>{

  const location = useLocation();

  return(
    <div className='landingpage'>

      {(location.pathname !== "/login" && location.pathname !== "/signup") ? <Headers /> : <Loginheader />}
    <Routes >
      <Route path='/' element={<Maincontent />} />
      <Route path='/signup' element={<Signup />} />
      <Route path='/login' element={<Login />} />
      <Route path='/generalmedicine' element={<GeneralMedicine />} />
      <Route path='/babymedicine' element={<BabyMedicine />} />
      <Route path='/prescribedmedicine' element={<Prescribedmedicine />} />
      <Route path='/generaldescription' element={<GeneralDescription />} />
      <Route path='/viewcart' element={<ViewCart />} />
      <Route path='/checkout' element={<Checkout />} />
      <Route path='/orderconfirmation' element={<Orderconfirmation />} />
      <Route path='/userverify' element={<Userverify />} />
    </Routes>
    <Footer />
    </div>
  );
}

export default App;