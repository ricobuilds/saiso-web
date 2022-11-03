import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { Header } from '../components/Header'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Saiso - Low-Code Feedback Widget Powered by Notion</title>
        <meta name="description" content="Saiso - a low-code feedback widget for quick feedback gathering powered by Notion." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header/>
      <div className="wrapper">
        <main className='main'></main>
     </div>
    </div>
  )
}

export default Home
