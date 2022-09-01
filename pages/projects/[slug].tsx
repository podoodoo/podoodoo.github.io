import { GetStaticProps } from "next"
import React from "react"
import Image from "next/image"
import { sanityClient, urlFor } from "../../sanity"
import { Post } from "../../typings"
import { PortableText } from "@portabletext/react"

type Props = {
  post: Post
}

function Post({ post }: Props) {
  return (
    <div className="w-full h-full flex flex-col md:flex-row md:space-x-20 space-y-10">
      <div className="md:w-2/3 space-y-5 -z-20">
        <h2 className="text-2xl">{post.title}</h2>
        <PortableText value={post.body} />
        <p>Technologies used: {post.technology}</p>
      </div>
      <div className="relative h-60 md:h-auto md:w-1/3 -z-20">
        <Image
          src={urlFor(post.mainImage).url()}
          layout="fill"
          objectFit="contain"
          alt="post img"
        />
      </div>
    </div>
  )
}

export default Post

export const getStaticPaths = async () => {
  const query = `*[_type == 'post'] {
    _id,
    slug {
        current
    }
  }`
  const posts = await sanityClient.fetch(query)
  const paths = posts.map((post: Post) => ({
    params: { slug: post.slug.current },
  }))
  return {
    paths,
    fallback: true,
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const query = `*[_type == 'post' && slug.current == $slug][0]`
  const post = await sanityClient.fetch(query, { slug: params?.slug })
  if (!post) {
    return {
      notFound: true,
    }
  }
  return {
    props: {
      post,
    },
  }
}
