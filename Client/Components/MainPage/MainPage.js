import React from 'react'
import AddPost from './AddPost'
import Stories from './Stories'
const MainPage = () => {
  return (
    <div className="sm:w-[75%] w-[95%] justify-center flex  mx-auto relative">
      <div className="bg-white my-5 w-[100%] rounded-sm overflow-x-scroll flex absolute Scroll">
        <Stories/>
      </div>
    </div>
  )
}

export default MainPage