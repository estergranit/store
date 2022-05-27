import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

export default function Home() {
    const dispatch = useDispatch()
    const data = useSelector(state => state)
    return (
        <>
            <h1>Home</h1>
            

            {data?.product?.category?.map((item, key) => (
                <div key={key} style={{ display: 'inline-block', margin: '2cm' }}>
                    {/* <Link to='/all-product' params={{categoryId:item.categoryId}}> */}
                    <Link to={{pathname: `/all-product/${item.categoryId}`}}>
                        <img
                            src={require(`../assets/${data?.product?.products?.find(
                                item2 => item2.categoryId == item.categoryId).name}1.jpg`)}
                            width={200}></img>
                    </Link>
                    <br />
                    {item.name}
                </div>
            ))}
        </>
    )
}

