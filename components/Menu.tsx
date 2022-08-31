import React from "react"
import { motion, AnimatePresence } from "framer-motion"
import MenuItems from "./MenuItems"
import { useSelector, useDispatch } from "react-redux"
import { actions } from "../redux/store"

type Props = {}

// const menuVariants = {
//   open: { opacity: 1 },
//   closed: { opacity: 0 },
// }

const Menu = (props: Props) => {
  const isOpen = useSelector((state: any) => state.toggle)
  const dispatch = useDispatch()

  return (
    <nav
      onClick={() => dispatch(actions.toggleMenu())}
      className="cursor-pointer px-5 py-2 sm:text-3xl"
    >
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            // animate={isOpen ? "open" : "closed"}
            // variants={menuVariants}
            className="absolute bg-white w-screen h-screen top-0 bottom-0 left-0 z-40"
          >
            <MenuItems />
          </motion.div>
        )}
      </AnimatePresence>
      <span className="hover:line-through">Menu</span>
    </nav>
  )
}

export default Menu
