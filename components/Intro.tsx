import React, { useEffect, useState } from "react"
import TypeIt from "typeit-react"
import { useSelector } from "react-redux"

type Props = {}

const Intro = (props: Props) => {
  const [typeItInstance, setTypeItInstance] = useState<any>()
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
  }, [isOpen])

  return (
    <div className="w-full">
      <TypeIt
        className="text-6xl sm:text-8xl leading-relaxed"
        element={"h1"}
        options={{
          cursor: false,
          // strings: ["Hello!", "I'm Tim.", "I like to code."],
          // cursorChar: "&#9608"
          //   afterComplete: (instance: any) => {
          //     instance.destroy()
          //   },
        }}
        getBeforeInit={(instance: any) => {
          instance
            .pause(2000)
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
  )
}

export default Intro
