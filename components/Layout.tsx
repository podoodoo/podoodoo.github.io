import React from "react"
import Container from "./Container"
import Footer from "./Footer"
import Header from "./Header"

type Props = {
  children?: any
}

export default function Layout({ children }: Props) {
  return (
    <div className="h-screen max-h-screen">
      <Header />
      <Container>{children}</Container>
      <Footer />
    </div>
  )
}
