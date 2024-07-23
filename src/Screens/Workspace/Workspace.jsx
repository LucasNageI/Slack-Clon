import React from 'react'
import { useParams } from 'react-router-dom'
import { Aside, Channels, Content, DirectMessages, Header } from '/home/lucas/Slack Clon/Slack/src/Components/Workspace/index.js'

export const Workspace = () => {
    const { id } = useParams()
  return (
    <div>
        <Header />
        <Aside id={id} />
        <Channels />
        <DirectMessages />
        <Content />
    </div>
  )
}
