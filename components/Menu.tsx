import React from "react"
import { motion, AnimatePresence } from "framer-motion"
import MenuItems from "./MenuItems"
import { useSelector, useDispatch } from "react-redux"
import { actions } from "../redux/store"

type Props = {}

const menuVariants = {
  initial: {
    opacity: 0,
  },
  open: {
    opacity: 1,
  },
  close: { opacity: 0 },
}

const Menu = (props: Props) => {
  const isOpen = useSelector((state: any) => state.toggle)
  const dispatch = useDispatch()

  return (
    <nav
      onClick={() => dispatch(actions.toggleMenu())}
      className="cursor-pointer px-5 py-2 sm:text-3xl"
    >
      {isOpen && (
        <motion.div
          initial="initial"
          animate="open"
          // animate={isOpen ? "open" : "closed"}
          variants={menuVariants}
          className={`absolute bg-white w-screen h-screen top-0 bottom-0 left-0 ${
            isOpen ? "z-40" : "-z-20"
          }`}
        >
          <MenuItems />
        </motion.div>
      )}
      <span className="hover:line-through">Menu</span>
    </nav>
  )
}

export default Menu
