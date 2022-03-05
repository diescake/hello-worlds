import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

import styled from 'styled-components'

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
        <MainHeader>Hello Worlds !!</MainHeader>

        <Description>This is a web application that is the bundle of my Hello World.</Description>

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

const MainHeader = styled.h1`
  margin: 0;
  line-height: 1.15;
  font-size: 4rem;
  text-align: center;

  a {
    color: #0070f3;
    text-decoration: none;
  }

  & :hover,
  & :focus,
  & :active {
    text-decoration: underline;
  }
`

const Description = styled.p`
  text-align: center;
  line-height: 1.5;
  font-size: 1.5rem;
`
