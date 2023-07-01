import React from 'react'

const NavUserImage = ({imageLink}) => {
  return (
    <span className="h-12 w-12 rounded-full">
          <img src={imageLink} alt="User" />
    </span>
  )
}

export default NavUserImage