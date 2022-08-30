import React from 'react'
import { useNavigate } from 'react-router-dom';

const NoMatch = () => {
    const navigate = useNavigate();
    return (
      <div>
        <h2>I can not find your request page</h2>
        <button onClick={()=> {
          navigate('/')
        }}>
          Go Back
        </button>
      </div>
    )
}

export default NoMatch
