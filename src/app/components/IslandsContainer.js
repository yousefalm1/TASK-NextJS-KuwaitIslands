"use client"

import IslandForm from './IslandForm'
import IslandList from './IslandList'

function IslandsContainer({ islands }) {
  return (
    <div className="islands-container">
      <IslandList islands={islands} />
      <IslandForm island={islands[0]} />
    </div>
  )
}

export default IslandsContainer