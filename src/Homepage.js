import React from 'react'
import { Link } from 'react-router-dom'

const Homepage = () => {
  return (
    <div>Homepage
        <Link to ="/check">
            <h2>Hello world! How are you ? </h2>
        </Link>
    </div>
  )
}

export default Homepage