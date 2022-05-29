import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './home'
import Login from './login'
import SignUp from './signUp'
import AllProduct from './allProduct'
import ProductDetail from './productDetail'
import PersonalArea from './personalArea'
import Cart from './cart'
import Buy from './buy'
import ResponsiveAppBar from './navigate';


export default function Router() {
    return (
        <BrowserRouter>
            <ResponsiveAppBar></ResponsiveAppBar>
            <Routes>
                <Route path='/' element={<Home />}></Route>
                <Route path='/login' element={<Login />}></Route>
                <Route path='/signup' element={<SignUp />}></Route>
                <Route path='/all-product/:categoryId' element={<AllProduct />}></Route>
                <Route path='/product-detail/:productName' element={<ProductDetail />}></Route>
                <Route path='/personal-area' element={<PersonalArea />}></Route>
                <Route path='/cart' element={<Cart />}></Route>
                <Route path='/buy' element={<Buy />}></Route>
            </Routes>
        </BrowserRouter>
    )
}