import type { NextPage } from 'next'
import Head from 'next/head'
import Quiz from './quiz'

const Home: NextPage = () => {

  return (
    < >
      <Head>
        <title>React Quiz App</title>
        <meta name="description" content="React interview questions Quiz" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Quiz />
    </>
  )
}

export default Home
