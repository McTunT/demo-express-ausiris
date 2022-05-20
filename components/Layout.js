import Navbar from './Nav'
import Head from 'next/head'
import Footer from './Footer'

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main>
        <Head>
          <title>Express Ausiris</title>
          <link rel="icon" href="/logo.png" />
        </Head>
        {children}
      </main>
      <Footer />
    </>
  )
}
