import React, { useState } from "react"
import Image from "next/future/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { sanityClient, urlFor } from "../../sanity"
import { Post } from "../../typings"
import { groq } from "next-sanity"
import type { NextPage, GetServerSideProps } from "next"
import Card from "../../components/Card"

type Props = {
  posts: [Post]
}

const Projects: NextPage<Props> = ({ posts }) => {
  const [projectPosts, setProjectPosts] = useState<Post[]>(posts)
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 object-cover">
      {projectPosts.map((post, i) => (
        <div key={post._id}>
          <Link href={`/projects/${post.slug.current}`}>
            <Card post={post} index={i} />
          </Link>
        </div>
      ))}
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const query = groq`*[_type == 'post' && category[0]._ref in *[_type == 'category' && title == "Project"]._id]`
  const posts = await sanityClient.fetch(query)
  return {
    props: {
      posts,
    },
  }
}

export default Projects
