import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

export default function Home() {
    const dispatch = useDispatch()
    const data = useSelector(state => state)
    return (
        <>
            <h1>Home</h1>
            <nav>
                <Link to='/login'>log in</Link>{'    '}
                <Link to='/signup'>sign up</Link>{'    '}
                <Link to='/allproduct'>allproduct</Link>{'    '}
            </nav>

            {data?.product?.category?.map((item, key) => (
                <div key={key} style={{ display: 'inline-block', margin: '2cm' }}>
                    <img 
                        src={require(`../assets/${data?.product?.products?.find(item2 => item2.categoryId == item.categoryId).name}1.jpg`)} width={200}></img>
                    <br />
                    {item.name}
                </div>
            ))}
        </>
    )
}

