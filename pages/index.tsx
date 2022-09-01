import type { NextPage } from "next"
import Head from "next/head"
import Intro from "../components/Intro"

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Timothy Yang</title>
        <meta
          name="description"
          content="Timothy Yang's portfolio. A software engineer who is passionate about web3. Uses Java, JavaScript, Python, React.js, Next.js, AWS, SQL, NoSQL, Solidity."
        ></meta>
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>☺️</text></svg>"
        />
      </Head>
      <Intro />
    </>
  )
}

export default Home
