import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Hello</title>
        <meta name="description" content="My hello worlds" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Hello Worlds !!</h1>

        <p className={styles.description}>This is a web application that is the bundle of my many Hello Worlds.</p>

        <div className={styles.grid}>
          <Link href="/react-magnifier" passHref>
            <div className={styles.card}>
              <h2>react-magnifier &rarr;</h2>
              <p>🔍 React image zoom component.</p>
            </div>
          </Link>

          <Link href="/use-context" passHref>
            <div className={styles.card}>
              <h2>useContext &rarr;</h2>
              <p>One of the React hooks you know.</p>
            </div>
          </Link>

          <a href="https://nextjs.org/" className={styles.card}>
            <h2>Next.js &rarr;</h2>
            <p>The React Framework for Production.</p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a href="https://github.com/diescake/hello-worlds" target="_blank" rel="noopener noreferrer">
          <span className={styles.logo}>
            <Image src="/images/github_logo.png" alt="GitHub Logo" width={16} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
