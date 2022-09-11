import React from 'react'
import EachStory from './EachStory'
const Stories = () => {
  return (
    <div className="flex p-2 space-x-2">
        <EachStory props="First"/>
        <EachStory/>
        <EachStory/>
        <EachStory/>
        <EachStory/>
    </div>
  )
}

export default Stories