import React from "react"

type Props = {
    children?: any
}

const Container = ({ children }: Props) => {
    return <main className="container flex-grow p-10">{children}</main>
}

export default Container
