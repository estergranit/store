
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

export default function AllProduct() {
    const data = useSelector(state => state)
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const user = data.user.currentUserId;
    return (
        <>
            <h1>{user}</h1>
            <Link to='/cart'>my cart</Link>
            <h1>AllProduct</h1>
            {data?.product?.category?.map((item, key) => (
                // שכפול קוד כמו ב HOME
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