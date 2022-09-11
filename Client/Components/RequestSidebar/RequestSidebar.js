import React from 'react'
import EachRequest from './EachRequest'

const RequestSidebar = () => {
  return (
    <div className='p-2 space-y-2 flex flex-col h-[100%]'>

      <div className="h-[100%] flex flex-col justify-center ">
        <EachRequest props="" />
      </div>
      {/* <EachRequest props="Name"/>
      <EachRequest props="Name"/> */}
    </div>
  )
}

export default RequestSidebar