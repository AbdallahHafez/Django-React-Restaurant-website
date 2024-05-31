import Headers from './components/Headers';
import FoodPage from './pages/FoodPage';
import DetailPage from './pages/DetailPage';
import Reservation from './pages/Reservation'
import './App.css';
import { useContext } from 'react';
import { AppContext } from './ContextProvider';
import Main from './pages/Main';
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';
import SignUp from './pages/SignUp';
import Login from './pages/Login';
import ProtectedRoutes from './components/ProtectedRoutes'
function App() {
  const{modal}=useContext(AppContext)
  return (
    <Router >
      <Headers/>
      <Routes>
        <Route path='/' element={<Main/>}></Route>
        <Route path='/foods' element={<FoodPage/>} ></Route>
        <Route path='/signup' element={<SignUp/>} ></Route>
        <Route path='/login' element={<Login/>} ></Route>
        <Route path='/reservation' element={<ProtectedRoutes><Reservation/></ProtectedRoutes>}></Route>
      </Routes>
      
      {modal && <DetailPage/>}
    </Router>
  );
}

export default App;
