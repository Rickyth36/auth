import React from 'react'
import '../src/index.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import EmailVerify from './pages/EmailVerify'
import ResetPassword from './pages/ResetPassword'
import { ToastContainer } from 'react-toastify';

const App = () => {
  return (
    <div>
        <Routes>
          <Route path='/' element={<Home />} ></Route>
          <Route path='/login' element={<Login/>} ></Route>
          <Route path='/email-verify' element={<EmailVerify />} ></Route>
          <Route path='/reset-password' element={<ResetPassword />} ></Route>
        </Routes>
      <ToastContainer />
    </div>
  )
}

export default App