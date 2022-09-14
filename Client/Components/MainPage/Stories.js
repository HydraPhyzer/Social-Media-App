import React from 'react'
import EachStory from './EachStory'
const Stories = () => {
  return (
    <div className="flex space-x-2">
        <EachStory props="First"/>
        <EachStory/>
        <EachStory/>
        <EachStory/>
        <EachStory/>
    </div>
  )
}

export default Stories