import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Header from '@components/portal/header'
import { getSession } from 'next-auth/react'
import Hero from "@components/sections/Hero"
// import LandingLayout from "@components/layouts/LandingLayout"

const Home = (props) => {

  return (
    <div className={styles.container}>
      <Head>
        <title>{ process.env.NEXT_PUBLIC_APP_NAME }</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>

      <Header sessions={ props.sessions }></Header>

        <h1 className={styles.title}>
          Welcome to Shaka JS Starter Pack
        </h1>

        <Hero
          title="Hello, this is sample Hero section"
          subtitle="Shaka JS Starter Pack is a free NodeJS fullstack starter pack for everyone."
          image="https://source.unsplash.com/collection/1118919/800x600"
          ctaText="Create your account now"
          ctaLink="/signup"
        />        


        <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/index.js</code>
        </p>


        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h2>Documentation &rarr;</h2>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h2>Learn &rarr;</h2>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/canary/examples"
            className={styles.card}
          >
            <h2>Examples &rarr;</h2>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h2>Deploy &rarr;</h2>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}

export async function getServerSideProps(context) {
  let session = await getSession(context)
  return {
      props: {
          sessions: session,
      }
  }
}

export default Home