import './App.css';
import { Login } from './components/logIn';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Register } from './components/Register';
import { Home } from "./components/Home";
import { CustomerCare } from './components/CustomerCare/CusromerService';
import { CustomerCollection } from './components/CustomerCare/CustomerCollection';

function App() {
  return (<>
    <div className="app-section">
    <BrowserRouter>
      <Routes>
        <Route path='/AppLoginRegisterPage' element={<Home />} />
        <Route path='/AppLoginRegisterPage/login' element={<Login/>} />
        <Route path='/AppLoginRegisterPage/Register' element={<Register />} />
        <Route path='/AppLoginRegisterPage/CustomerService' element={<CustomerCare />} />
        <Route path='/AppLoginRegisterPage/CustomerService/SeviceCollection' element={<CustomerCollection />} />
      </Routes>
    </BrowserRouter>
      {/* <Body /> */}
    </div>
  </>
  );
}

export default App;
