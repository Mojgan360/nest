import React from 'react'

const Error = ({ msg }) => {
  return (
    <div className='section section-center text-center'>
      <h2>there was an error... {msg}</h2>
    </div>
  )
}

export default Error
