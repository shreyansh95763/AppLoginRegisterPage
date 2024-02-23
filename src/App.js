import './App.css';
import { Login } from './components/logIn';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Register } from './components/Register';
import { Home } from "./components/Home";
import { CustomerCare } from './components/CustomerCare/CusromerService';
import { CustomerCollection } from './components/CustomerCare/CustomerCollection';
import { WinGo } from './components/LotteryGames/WinGo1Min';
import { MainAviator } from './components/Aviator/AviatorMainPage';
import { Deposite } from './components/LotteryGames/Deposite/Deposite';
import { Withdrawal } from './components/LotteryGames/Withdrawal/Withdrawal';

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
        <Route path='/AppLoginRegisterPage/WinGo' element={<WinGo />} />
        <Route path="/AppLoginRegisterPage/Aviator" element={<MainAviator /> } />
        <Route path="/AppLoginRegisterPage/Payment" element={<Deposite />} />
        <Route path="/AppLoginRegisterPage/Payment/Withdraw" element={<Withdrawal />} />
      </Routes>
    </BrowserRouter>
      {/* <Body /> */}
    </div>
  </>
  );
}

export default App;
