import { useState } from 'react'
import { Routes, Route, Link } from 'react-router-dom'

import Layout from './components/common/Layout'

import Modal from './components/common/Modal'
import Home from './pages/Home/index'
import Products from './pages/Products/index'
import Contact from './pages/Contact/index'
import Account from './pages/Account/index'
import ErrorBoundary from './components/boundaries/ErrorBoundary'
import Login from './pages/Login/index'


function App() {
  return(
    <>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home/>}/>
        </Route>
        <Route path="/products" element={<Layout/>}>
          <Route 
            index 
            element={
              <ErrorBoundary fallback="There was an issue loading the Products page. Please try again later.">
                <Products/>
                </ErrorBoundary>
                }
            />
        </Route>
        <Route path="/contact" element={<Layout/>}>
          <Route index element={<Contact/>}/>
        </Route>

        <Route path="/login" element={<Layout/>}>
          <Route index element={<Login/>}/>
        </Route>

        <Route path="/account" element={<Layout/>}>
          <Route index element={<Account/>}/>
        </Route>
        
      </Routes>
    </>
  )
  
}

export default App
