import React from "react"
import { motion } from "framer-motion"
import { AiFillGithub, AiOutlineTwitter, AiFillMail } from "react-icons/ai"

type Props = {}

const Socials = (props: Props) => {
  return (
    <motion.div className="flex space-x-5 text-3xl">
      <a href="https://github.com/podoodoo" aria-label="github.com/podoodoo">
        <AiFillGithub />
      </a>
      <a
        href="https://twitter.com/timonyang"
        aria-label="twitter.com/timonyang"
      >
        <AiOutlineTwitter />
      </a>
      <a
        href="mailto:timonyang@gmail.com"
        aria-label="email: timonyang@gmail.com"
      >
        <AiFillMail />
      </a>
    </motion.div>
  )
}

export default Socials
