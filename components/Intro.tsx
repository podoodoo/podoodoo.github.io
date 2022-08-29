import React from "react"
import TypeIt from "typeit-react"

type Props = {}

const Intro = (props: Props) => {
    return (
        <TypeIt
            className="text-6xl sm:text-8xl leading-relaxed"
            element={"h1"}
            options={
                {
                    // strings: ["Hello!", "I'm Tim.", "I like to code."],
                    // cursorChar: "&#9608"
                }
            }
            getBeforeInit={(instance: any) => {
                instance
                    .pause(2000)
                    .type("Hello!")
                    .pause(1000)
                    .break()
                    .type("I'm Tim.")
                    .pause(2000)
                    .break()
                    .type("I like to code.")
                return instance
            }}
        />
    )
}

export default Intro
