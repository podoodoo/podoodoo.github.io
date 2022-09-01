import React from "react"

type Props = {}

export default function About({}: Props) {
  return (
    <div className="flex flex-col h-full md:flex-row space-y-20 md:space-x-20">
      <div className="w-full md:w-2/3 space-y-5 flex flex-col text-xl">
        <h1 className="text-6xl mb-10">About me</h1>
        <p>
          I am a <strong className="underline">software engineer</strong> with
          over two years of experience.
        </p>
        <p>
          Passionate about <strong className="underline">web3</strong> and its
          concepts, you'll often find me studying crypto, blockchain, etc.
        </p>
        <p>I like simple, clean, legible code and I strive for efficiency.</p>
        <p>
          In my free time, I'm either playing games, guitar, or golf. I like to
          volunteer and am a youth group leader at my church.
        </p>
        <p>
          <span className="underline">Languages</span>: Java,
          JavaScript/TypeScript, C/C++, C#, Solidity, Python, x86 Assembly
        </p>
        <p>
          <span className="underline">Skills</span>: HTML/CSS, ReactJS/NextJS,
          AWS, Git, NoSQL, SQL, Figma
        </p>
      </div>
      <div className="md:w-1/3 justify-center">
        <a href="/TimothyYangResume.pdf">
          <p className="text-right py-5">Click me for my resume!</p>
          <img
            src="/undraw_coding_re_iv62.svg"
            alt="undrew coding"
            className="w-full"
          />
        </a>
      </div>
    </div>
  )
}
