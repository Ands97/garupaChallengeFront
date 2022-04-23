import './App.css'
import { Login } from './pages/Login';
import {Routes, Route} from 'react-router-dom';
import { Home } from './pages/Home';
import { RequireAuth } from './contexts/Auth/RequireAuth';

function App() {
  

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/home' element={<RequireAuth><Home/></RequireAuth>}/>
      </Routes>
    </div>
  )
}

export default App
