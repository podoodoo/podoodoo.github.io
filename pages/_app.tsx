import type { AppProps } from "next/app"
import Layout from "../components/Layout"
import { Provider } from "react-redux"
import store from "../redux/store"
import NextNProgress from "nextjs-progressbar"

import "../styles/globals.css"

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <Provider store={store}>
      <Layout>
        <NextNProgress height={5} />
        <Component {...pageProps} />
      </Layout>
    </Provider>
  )
}

export default MyApp
