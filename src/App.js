import React from 'react'
import Deposits from './component/dashBoradComponent/Deposits'
import Dashboard from './Layout/Dash-borad'
import Header from './Layout/Header'
import Home from './Layout/Home'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Main from './Main'
import Footer from './Layout/Footer'
import Login from "../src/Layout/Login.js"

const App = () => {
  return (
    <BrowserRouter>
      {/* <Header /> */}
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/*" element={<Main />} />
        <Route path="dashborad" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App