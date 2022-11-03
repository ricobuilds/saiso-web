import type { NextPage } from 'next'
import Head from 'next/head'
import { Header } from '../components/Header'
import { Hero } from '../components/Hero'

const Home: NextPage = () => {
  return (
    <div className={'bg-sylver-200 '}>
      <Head>
        <title>Saiso - Low-Code Feedback Widget Powered by Notion</title>
        <meta name="description" content="Saiso - a low-code feedback widget for quick feedback gathering powered by Notion." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="bg-russian-600 h-[86vh] w-full wrapper">
      <Header/>
        <main className='main pt-24'>
          <Hero />
        </main>
      </div>
          <div className="py-6 px-8 text-russian-600 bottom-0 w-full border">
            &copy; Saiso 2022, All rights reserved.
          </div>
    </div>
  )
}

export default Home
