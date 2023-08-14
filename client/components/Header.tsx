import React from 'react'

interface Props {
  title: string
  link: string
}

function Header(props: Props) {
  return (
    <div>
      <h1>
        <a href="{props.link}">{props.title}</a>
      </h1>
    </div>
  )
}

export default Header
