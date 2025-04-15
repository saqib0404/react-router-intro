import React from 'react'
import { useLoaderData } from 'react-router'
import User from '../User/User'
import "./Users.css"

const Users = () => {
    const users = useLoaderData()
    return (
        <div>
            <h3>Users: {users.length}</h3>
            <div className='users'>
                {
                    users.map(user => <User user={user} key={user.id} />)
                }
            </div>
        </div>
    )
}

export default Users