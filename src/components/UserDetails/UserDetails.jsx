import React from 'react'
import { useLoaderData } from 'react-router'

const UserDetails = () => {
    const details = useLoaderData();
    const { name, website } = details
    return (
        <div className=''>
            <span className='user'>{name}: {website}</span>
        </div>
    )
}

export default UserDetails