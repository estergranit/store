import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { changeCurrentUser } from '../Redux/actions'
export default function Login() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const data = useSelector(state => state)
    let user = {}
    let name, password
    function login() {
        user = data?.user?.users?.find(user => user.name === name)
        console.log(user)
        if (user) {
            if (user.password == password) {
                console.log('success')
                //debugger
                dispatch(changeCurrentUser(user.userId))
                console.log('change current user')                
                navigate('/personal-area')
            }
            else {
                console.log('password not valid!')
            }
        }
        //if the user not exiest
        else {
            alert('go to sign up')
            navigate('/signup')
        }
    }
    return (
        <>
            <h1>LogIn</h1>
            <nav>
                <Link to='/'>home</Link>{'   '}
                <Link to='/signup'>sign up</Link>{'   '}
            </nav>
            <section>
                <label>enter name<input type='text' onChange={(e) => { name = e.target.value }}></input></label>
                <label>enter password<input type='password' onChange={(e) => { password = e.target.value }}></input></label>
                <button onClick={() => login()}>log in !</button>
            </section>
        </>
    )
}