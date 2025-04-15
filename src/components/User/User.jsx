import React from 'react'
import "./User.css"
import { Link } from 'react-router';

const User = ({ user }) => {
    const { id, name, email, phone } = user;

    return (
        <div className='user'>
            <h4>Name: {name}</h4>
            <p>Email: {email}</p>
            <p>Phone: {phone}</p>
            <Link to={`/user/${id}`}><button>Show Details</button></Link>
        </div>
    )
}

export default User