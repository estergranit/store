import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
export default function ProductDetail() {
    const data=useSelector(state=>state)
    const {name}=useParams()

    const product=data?.product?.products?.find(product=>product.name==name)
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
                <p>{product.color}</p>
                <p>{product.price}</p>
            </section>
        </>
    )
}