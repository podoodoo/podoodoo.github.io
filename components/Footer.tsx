import React from "react"
import Socials from "./Socials"
import { motion } from "framer-motion"

type Props = {}

export default function Footer({}: Props) {
  return (
    <motion.footer
      initial={{ y: "100%", opacity: 0 }}
      animate={{ y: "0", opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.75 }}
      className="flex text-center justify-between p-10 gap-8"
    >
      <Socials />
      <p className="text-xs">
        Copyright © {new Date().getFullYear()} Timothy Yang
      </p>
    </motion.footer>
  )
}
