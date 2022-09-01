import type { AppProps } from "next/app"
import Layout from "../components/Layout"
import { Provider } from "react-redux"
import store from "../redux/store"
import NextNProgress from "nextjs-progressbar"

import "../styles/globals.css"

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <Provider store={store}>
      <NextNProgress height={5} />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  )
}

export default MyApp
