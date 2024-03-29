import React from "react"

type Props = {
  children?: any
}

const Container = ({ children }: Props) => {
  return (
    <main className="container flex-grow p-10 mx-auto py-36">{children}</main>
  )
}

export default Container
