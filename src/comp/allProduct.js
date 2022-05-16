
import React from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

export default function AllProduct() {
    const data = useSelector(state => state)
    const {categoryId}=useParams()
    const navigate = useNavigate()
    const dispatch = useDispatch()
    return (
        <>
            <h1>AllProduct</h1>
            <nav>
                <Link to='/login'>log in</Link>{'    '}
                <Link to='/signup'>sign up</Link>{'    '}
            </nav>
            <section>
                {data?.product?.products
                ?.filter(item=>item.categoryId==categoryId)
                ?.map((item, key) => (
                    <div key={key}>{item.name}
                        <button onClick={() => navigate(`/product_detail/${item.name}`)}>לפרטים מלאים</button>
                        <button onClick={() => dispatch({type:'DELETE_PRODUCT' ,payload:key})}>מחק מוצר</button>
                        {/* השליחה לצורה השניה */}
                        </div>
                ))}
            </section>
        </>
    )
}