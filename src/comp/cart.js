
import React from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { emptyCart } from '../Redux/actions'

export default function AllProduct() {
    const data = useSelector(state => state)
    const navigate = useNavigate()
    const dispatch = useDispatch()
    let categoryId = 5
    const cart = data?.user?.users?.find(user => user?.userId == data?.user?.currentUserId).cart
    return (
        <>
            <h1>my cart</h1>
            <nav>
                <Link to='/login'>log in</Link>{'    '}
                <Link to='/signup'>sign up</Link>{'    '}
                <Link to='/'>home</Link>{'    '}
            </nav>
            <section>
                {cart.map((item, key) => (
                    <div key={key} style={{ display: 'inline-block', margin: '2cm' }}>
                        <Link to={{ pathname: `/product-detail/${item.productName}` }}>
                            <img
                                src={require(`../assets/${item.productName}1.jpg`)}
                                width={100}></img>
                        </Link>
                        <br />
                        {item.productName}
                    </div>
                ))}
                <Link to='/buy'>
                    <button onClick={() => {
                        dispatch(emptyCart([]))
                        navigate(`/buy`)
                        } }> buy </button>
                </Link>{'    '}
            </section>

        </>
    )
}