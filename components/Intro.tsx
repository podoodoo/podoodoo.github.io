import React, { useEffect, useState } from "react"
import TypeIt from "typeit-react"
import { useSelector } from "react-redux"
import { motion } from "framer-motion"

type Props = {}

const Intro = (props: Props) => {
  const [typeItInstance, setTypeItInstance] = useState<any>()
  const [isDoneTyping, setIsDoneTyping] = useState<boolean>()
  const isOpen = useSelector((state: any) => state.toggle)

  useEffect(() => {
    if (typeItInstance) {
      if (isOpen) {
        typeItInstance.freeze()
      } else {
        typeItInstance.unfreeze()
      }
    }
    return () => {}
  }, [isOpen, typeItInstance])

  return (
    <div className="h-auto flex flex-col md:flex-row md:space-x-10 space-y-10 align-center md:space-between">
      <div className="h-{'90%'} md:w-2/3">
        <TypeIt
          className="text-5xl md:text-8xl leading-relaxed"
          element={"h1"}
          options={{
            cursor: false,
            // strings: ["Hello!", "I'm Tim.", "I like to code."],
            // cursorChar: "&#9608"
            afterComplete: () => {
              setIsDoneTyping(true)
            },
          }}
          getBeforeInit={(instance: any) => {
            instance
              .pause(1500)
              .type("Hello!", { delay: "1000" })
              .break()
              .type("I'm Tim.", { delay: "2000" })
              .break()
              .type("I like to code.", { delay: "2000" })
            return instance
          }}
          getAfterInit={(instance: any) => {
            setTypeItInstance(instance)
            return instance
          }}
        />
      </div>

      {isDoneTyping && (
        <motion.img
          initial={{ y: "75%", opacity: 0 }}
          animate={{ y: "0", opacity: 1 }}
          transition={{ delay: 1 }}
          src="/undraw_fireworks_re_2xi7.svg"
          alt="undraw fireworks"
          className="flex h-full w-full md:w-1/3 -z-10"
        />
      )}
    </div>
  )
}

export default Intro
