import AddUser from './components/AddUser.js'
import NavBar from './components/NavBar.js';
import UserMngSys from './components/UserMngSys.js';
import AllUsers from './components/AllUsers.js';

import {BrowserRouter, Routes, Route} from 'react-router-dom';
import EditUser from './components/EditUser.js';


function App() {
  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path='/' element={<UserMngSys/>}/>
        <Route path='/users' element={<AllUsers/>}/>
        <Route path='/add' element={<AddUser/>}/>
        <Route path='/edit/:id' element={<EditUser/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
