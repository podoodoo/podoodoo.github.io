import React, { useState } from "react"
import { Post } from "../typings"
import { motion } from "framer-motion"
import Image from "next/image"
import { urlFor } from "../sanity"
import Link from "next/link"

type Props = {
  post: Post
  index: number
}

const Card = (props: Props) => {
  const { post, index } = props
  return (
    <Link href={`/projects/${post.slug.current}`}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: index * 0.2 }}
        className="border space-y-5 cursor-pointer h-full w-full hover:scale-105 ease-in-out transition-transform duration-200 p-5"
      >
        <Image
          src={urlFor(post.mainImage).url()}
          height="480"
          width="640"
          className="w-full h-3/4 object-scale-down"
          sizes="(min-width: 75em) 33vw,
    (min-width: 48em) 50vw,
    100vw"
          alt="post img"
        />
        <div className="p-5">
          <h3 className="text-lg">{post.title}</h3>
          <span className="text-xs" suppressHydrationWarning={true}>
            {new Date(post._createdAt).toDateString()}
          </span>
        </div>
      </motion.div>
    </Link>
  )
}

export default Card
