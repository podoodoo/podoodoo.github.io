import Image from "next/future/image"
import React, { useState } from "react"
import { sanityClient, urlFor } from "../../sanity"
import { Post } from "../../typings"
import { motion } from "framer-motion"
import Link from "next/link"
import { groq } from "next-sanity"
import type { NextPage, GetServerSideProps } from "next"

type Props = {
  posts: [Post]
}

const Blog: NextPage<Props> = ({ posts }) => {
  const [blogPosts, setBlogPosts] = useState(posts)
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-5 object-cover">
      {blogPosts.map((post, i) => (
        <Link key={post._id} href={`/projects/${post.slug.current}`}>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: i * 0.2 }}
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
      ))}
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const query = groq`*[_type == 'post' && category[0]._ref in *[_type == 'category' && title == "Blog"]._id]`
  const posts = await sanityClient.fetch(query)
  return {
    props: {
      posts,
    },
  }
}

export default Blog
