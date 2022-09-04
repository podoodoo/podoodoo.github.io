import React, { useState } from "react"
import { sanityClient } from "../../sanity"
import { Post } from "../../typings"
import { groq } from "next-sanity"
import type { NextPage, GetStaticProps } from "next"
import Card from "../../components/Card"

type Props = {
  posts: [Post]
}

const Blog: NextPage<Props> = ({ posts }) => {
  const [blogPosts, setBlogPosts] = useState<Post[]>(posts)
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-5 object-cover">
      {blogPosts.map((post, i) => (
        <div key={post._id}>
          <Card post={post} index={i} />
        </div>
      ))}
    </div>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const query = groq`*[_type == 'post' && category[0]._ref in *[_type == 'category' && title == "Blog"]._id]`
  const posts = await sanityClient.fetch(query)
  return {
    props: {
      posts,
    },
    revalidate: 7200,
  }
}

export default Blog
