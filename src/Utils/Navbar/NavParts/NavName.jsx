import React from 'react'

const NavName = ({name}) => {
  return (
    <span className="hidden text-right lg:block">
          <span className="block text-sm font-medium text-white dark:text-white">
            {name}
          </span> 
        </span>
  )
}

export default NavName