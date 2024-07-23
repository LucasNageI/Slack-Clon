import React from 'react'
import { useParams } from 'react-router-dom'

export const Workspace = () => {
    const { id } = useParams()
  return (
    <div>
        <h1>workspace id: {id}</h1>
    </div>
  )
}
