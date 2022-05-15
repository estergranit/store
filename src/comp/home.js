import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
    return (
        <>
            <h1>Home</h1>
            <nav>
                <Link to='/login'>log in</Link>{'    '}
                <Link to='/signup'>sign up</Link>{'    '}
                <Link to='/allproduct'>allproduct</Link>{'    '}
            </nav>
        </>
    )
}

