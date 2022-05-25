import React, { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart } from '../Redux/actions'

import Slider from './Slider'
export default function ProductDetail() {
    const dispatch = useDispatch()
    const data = useSelector(state => state)
    const { productName } = useParams()
    const path = '../assets/'
    const product = data?.product?.products?.find(product => product.name == productName)
    const [quantity, setQuantity] = useState(1)
    function add() {
        //console.log(data.user.currentUserId)
        //user1 = data?.user?.users.filter(user => user.userId == data.user.currentUserId)[0]            
        dispatch(addToCart({ productName: productName, quantity: quantity }))
    }

    return (
        <>
            <h1>ProductDetail</h1>
            <nav>
                <Link to='/login'>log in</Link>{'    '}
                <Link to='/signup'>sign up</Link>{'    '}
                <Link to='/' >home</Link>
            </nav>
            <section>
                <h1>{productName}</h1>
                <Slider>
                    {/* איך לעשות בלולאה */}
                    <img src={require(`../assets/${productName}1.jpg`)} width={400}></img>
                    <img src={require(`../assets/${productName}2.jpg`)} width={400}></img>
                    <img src={require(`../assets/${productName}3.jpg`)} width={400}></img>
                    <img src={require(`../assets/${productName}4.jpg`)} width={400}></img>
                    {/* <img
                        src={require(`../assets/${productName}1.jpg`)}
                        width={200}></img> */}
                    {/* <img src={require(`${path}${productName}1.jpg`)} ></img> */}

                </Slider>
                <p>{`color: ${product.color}`}</p>
                <p>{`price: ${product.price}`}</p>
                <label>{'quantity: '}
                    <input type={'number'} onChange={e => setQuantity(e.target.value)}></input></label>
                <button onClick={() => dispatch(addToCart({ productName: productName, quantity: quantity }))}>הוסף לסל</button>
                {console.log(data?.user?.users.filter(user => user.userId == data.user.currentUserId)[0])}
            </section>
        </>
    )
}