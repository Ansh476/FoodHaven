import React, { useState } from 'react'

const User = (props) => {
    const [count1] = useState(0);
    const [count2] = useState(1);
  return (
    <div className='user-card'>
        <h1>Count1:{count1}</h1>
        <h1>Count2:{count2}</h1>
        <h1>Name: {props.name}</h1>
        <h2>Location: {props.location}</h2>
        <h3>Age</h3>
    </div>
  )
}

export default User