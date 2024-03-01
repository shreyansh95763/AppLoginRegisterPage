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
import { ActivityMain } from './components/Activity/ActivityMain';
import { ActivityAward } from './components/Activity/ActivityAward/ActivityAward';
import { ActivityRebate } from './components/Activity/ActivityRebate.js/ActivityRebate';
import { JackpotMain } from './components/Activity/Jackpot/JackpotMain';
import { GamePage1 } from './components/Activity/ActivityGamePages.js/GamePage1';
import {  ActivityDetaile3 } from './components/Activity/ActivityGamePages.js/ActivityDetail3';
import { ActivityDetaile2 } from './components/Activity/ActivityGamePages.js/ActivityDetail2';
import { ActivityDetaile7 } from './components/Activity/ActivityGamePages.js/ActivityDetaile7';
import { ActivityDetaile5 } from './components/Activity/ActivityGamePages.js/ActivityDetaile5';
import { ActivityDetaile6 } from './components/Activity/ActivityGamePages.js/ActivityDetail6';
import { PromotionMain } from './components/Promotion/PomotionMain';
import { WalletMain } from './components/Wallet/WalletMain';
import { AccountMain } from './components/Accounts/AccountMain';
import { AccountVIPpage } from './components/Accounts/VIP/AccountVIP';

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
        <Route path='/AppLoginRegisterPage/Activity' element={<ActivityMain />} />
        <Route path='/AppLoginRegisterPage/Activity/Award' element={<ActivityAward />} />
        <Route path='/AppLoginRegisterPage/Activity/Rebate' element={<ActivityRebate />} />
        <Route path='/AppLoginRegisterPage/Activity/Jackpot' element={<JackpotMain />} />
        <Route path='/AppLoginRegisterPage/Activity/FirstRecharge' element={<GamePage1 />} />
        <Route path='/AppLoginRegisterPage/Activity/ActivityDetail2' element={<ActivityDetaile2 />} />
        <Route path='/AppLoginRegisterPage/Activity/ActivityDetail3' element={<ActivityDetaile3 />} />
        <Route path='/AppLoginRegisterPage/Activity/ActivityDetail5' element={<ActivityDetaile5 />} />
        <Route path='/AppLoginRegisterPage/Activity/ActivityDetail6' element={<ActivityDetaile6 />} />
        <Route path='/AppLoginRegisterPage/Activity/ActivityDetail7' element={<ActivityDetaile7 />} />
        <Route path="/AppLoginRegisterPage/Promotion" element={<PromotionMain /> } />
        <Route path="/AppLoginRegisterPage/Aviator" element={<MainAviator /> } />
        <Route path="/AppLoginRegisterPage/Wallet" element={<WalletMain /> } />
        <Route path="/AppLoginRegisterPage/Account" element={<AccountMain /> } />
        <Route path="/AppLoginRegisterPage/Account/VIP" element={<AccountVIPpage /> } />
        <Route path="/AppLoginRegisterPage/Deposite" element={<Deposite />} />
        <Route path="/AppLoginRegisterPage/Withdraw" element={<Withdrawal />} />
      </Routes>
    </BrowserRouter>
      {/* <Body /> */}
    </div>
  </>
  );
}

export default App;
