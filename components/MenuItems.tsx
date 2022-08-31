import Link from "next/link"
import React from "react"

const links = [
  { name: "About", to: "/about", id: 1 },
  { name: "Projects", to: "/projects", id: 2 },
  { name: "Blog", to: "/blog", id: 3 },
]

const MenuItems = () => {
  return (
    <div className="flex flex-col align-center h-full w-full space-y-5 py-28">
      {links.map(({ name, to, id }) => (
        <div
          key={id}
          className="flex text-7xl sm:text-9xl justify-end hover:line-through"
        >
          <Link href={to}>{name}</Link>
        </div>
      ))}
    </div>
  )
}

export default MenuItems
