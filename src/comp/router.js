import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './home'
import Login from './login'
import SignUp from './signUp'
import AllProduct from './allProduct'
import ProductDetail from './productDetail'

export default function Router() {
    return (
        <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/login' element={<Login/>}></Route>
            <Route path='/signup' element={<SignUp/>}></Route>
            <Route path='/allproduct' element={<AllProduct/>}></Route>
            <Route path='/product_detail/:name' element={<ProductDetail/>}></Route>
        </Routes>
        </BrowserRouter>
    )
}