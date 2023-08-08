import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Home from './Components/Home';
import Userlist from './Components/Userlist';
import Adduser from './Components/Adduser';
import Updateuser from './Components/Updateuser';
import { Provider } from 'react-redux';
import Store from './Redux/Strore';



function App() {
  return (
<Provider store={Store}>
<div className="App">
<BrowserRouter>
<div className='header'>
  <Link to={'/'}>Home</Link>
  <Link to={'/users'}>Users</Link>

</div>
<Routes>
<Route path='/' element={<Home></Home>}></Route>
<Route path='/users' element={<Userlist></Userlist>}></Route>
<Route path='/user/add' element={<Adduser></Adduser>}></Route>
<Route path='/user/edit/:code' element={<Updateuser></Updateuser>}></Route>
</Routes>
</BrowserRouter>
<ToastContainer></ToastContainer>
    </div>
    </Provider>
  );
}

export default App;
