import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';

const Read = () => {
    const [data, setData] = useState([]);
    const {id} = useParams();
    useEffect(() => {
        axios.get(`http://localhost:3000/users/${id}`)
            .then(res => setData(res.data))
            .catch(err => console.log(err));
    }, [id]);
    
  return (
       <div className='d-flex flex-column justify-content-center
    align-items-center bg-light vh-100'>
      <h1>Details of Users</h1>
      <div className='w-75 rounded bg-white border
      shadow p-4'>
        <div className='mb-2'>
            <strong>Name: {data.name}</strong>
        </div>
        <div className='mb-2'>
            <strong>Email: {data.email}</strong>
        </div>
        <div className='mb-2'>
            <strong>Phone: {data.phone}</strong>
        </div>
        <Link to={`/update/${id}`} className='btn btn-success me-2'>Update</Link>
        <Link to='/' className='btn btn-info'>Back</Link>
      </div>
    </div>
  )
}

export default Read
