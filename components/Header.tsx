import Link from "next/link"
import React from "react"
import Menu from "./Menu"
import { motion } from "framer-motion"

const Header = () => {
  return (
    <>
      <motion.header
        initial={{ y: "-100%", opacity: 0 }}
        animate={{ y: "0", opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="p-5"
      >
        <div className="flex mx-auto justify-between sm:py-2 sm:px-4">
          <Link href="/">
            <div className="flex items-center cursor-pointer space-x-2">
              <h1 className="font-bold sm:text-3xl">$ ./TimothyYang</h1>
            </div>
          </Link>
          <Menu />
        </div>
      </motion.header>
    </>
  )
}

export default Header
