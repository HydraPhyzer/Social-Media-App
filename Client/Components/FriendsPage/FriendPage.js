import React from 'react'
import EachFriend from './EachFriend'

const FriendPage = () => {
  return (
    <div className="p-2 space-y-2 flex flex-col h-[100%]">
      <div className="h-[100%] flex flex-col justify-center ">
        <EachFriend props="" />
      </div>
      {/* <div className="grid grid-cols-3 gap-2 text-center">
        <EachFriend props="Name"/>
        <EachFriend props="Name"/>
        <EachFriend props="Name"/>
        <EachFriend props="Name"/>
      </div> */}
    </div>
  )
}

export default FriendPage