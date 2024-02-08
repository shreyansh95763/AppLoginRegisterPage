import './App.css';
import { Login } from './components/logIn';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Register } from './components/Register';

function App() {
  return (<>
    <div className="app-section">
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login/>} />
        <Route path='/Register' element={<Register />} />
      </Routes>
    </BrowserRouter>
      {/* <Body /> */}
    </div>
  </>
  );
}

export default App;
