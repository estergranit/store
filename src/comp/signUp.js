import React from 'react'
import { Link } from 'react-router-dom'
import { addUser, deleteUser } from '../Redux/actions'
import { useDispatch, useSelector } from 'react-redux'

export default function SignUp() {
    const dispatch = useDispatch()
    const data = useSelector(state => state)
    let user = {}
    return (
        <>
            <h1>SignUp</h1>
            <nav>
                <Link to='/login'>log in</Link>{'   '}
                <Link to='/'>home</Link>{'   '}
            </nav>
            <section>
                <label>enter name<input type='text' onChange={(e) => { user.name = e.target.value }}></input></label>
                <label>enter password<input type='password' onChange={(e) => { user.password = e.target.value }}></input></label>
                <button onClick={() => {
                        let maxUserId = 0
                        data?.user?.users?.forEach(element => {
                            if(element.userId>maxUserId){
                                maxUserId = element.userId 
                                //alert(maxUserId)
                            }
                        });
                        user.userId = maxUserId + 1
                        dispatch(addUser(user))
                }}>הוסף משתמש</button>
            </section>

            <h1>All Users</h1>
            <section>
                {data?.user?.users?.map((item, key) => (
                    <div key={key}>
                        {item.name}
                        {item.userId}
                        <button onClick={() => dispatch(deleteUser(key))}>מחק משתמש</button>
                    </div>
                ))}
            </section>
        </>

    )
}