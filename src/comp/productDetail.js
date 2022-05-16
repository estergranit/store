import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import Slider from './Slider'
export default function ProductDetail() {
    const data=useSelector(state=>state)
    const {name}=useParams()
    const path = '../assets/'
    const product=data?.product?.products?.find(product=>product.name==name)
    function addToBasket(){
        if(data.user.currentUser!='0'){
            
        }
    }
    return (
        <>
            <h1>ProductDetail</h1>
            <nav>
                <Link to='/login'>log in</Link>{'    '}
                <Link to='/signup'>sign up</Link>{'    '}
                <Link to='/allproduct' >all products</Link>
            </nav>
            <section>
                <h1>{name}</h1>
                <Slider>
                    {/* איך לעשות בלולאה */}
                    <img src ={`${path}${name}1.jpg`} width={'200'}></img>
                    <img src ={`${path}${name}2.jpg`}></img>
                    <img src ={`${path}${name}3.jpg`}></img>
                    <img src ={`${path}${name}4.jpg`}></img>
                </Slider>
                <p>{product.color}</p>
                <p>{product.price}</p>
                <button onClick = {addToBasket()}>הוסף לסל</button>
            </section>
        </>
    )
}