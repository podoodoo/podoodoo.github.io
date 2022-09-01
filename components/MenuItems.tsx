import Link from "next/link"
import React from "react"
import { motion } from "framer-motion"

const links = [
  { name: "About", to: "/about", id: 1 },
  { name: "Projects", to: "/projects", id: 2 },
  { name: "Blog", to: "/blog", id: 3 },
]

const MenuItems = () => {
  return (
    <div className="flex flex-col h-full w-full space-y-5 pt-28">
      {links.map(({ name, to, id }, i) => (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: i * 0.2 }}
          key={id}
          className="text-7xl sm:text-9xl text-right hover:line-through"
        >
          <a href={to}>{name}</a>
        </motion.div>
      ))}
    </div>
  )
}

export default MenuItems
