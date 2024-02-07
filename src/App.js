import './App.css';
// import { Header } from './components/header';
import { Login } from './components/logIn';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Register } from './components/Register';

function App() {
  return (<>
    <div className="app-section">
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={<Login/>} />
        <Route path='/Register' element={<Register />} />
      </Routes>
    </BrowserRouter>
      {/* <Body /> */}
    </div>
  </>
  );
}

export default App;
