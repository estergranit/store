
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
            <h1>AllProduct</h1>
      
        </>
    )
}