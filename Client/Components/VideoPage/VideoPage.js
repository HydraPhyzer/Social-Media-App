import React from 'react'
import EachVideo from './EachVideo'

const VideoPage = () => {
  return (
    <div className="p-2 space-y-2 flex flex-col h-[100%]">
      <div className="h-[100%] flex flex-col justify-center ">
        <EachVideo props="" />
      </div>
      {/* <EachVideo props="Name"/>
      <EachVideo props="Name"/> */}
    </div>
  )
}

export default VideoPage