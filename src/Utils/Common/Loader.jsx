import React from 'react'

const Loader = () => {
  return (
     <div className="flex h-screen items-center justify-center bg-white">
      <div className="h-20 w-20 animate-spin rounded-full border-4 border-solid border-primary border-t-transparent">   
      </div>
    </div> 
  )
}

export default Loader