import React, { useState } from 'react'
import Magnifier from 'react-magnifier'

import Head from 'next/head'
import Image from 'next/image'

import styles from '../../styles/Home.module.css'

export default function Home() {
  const [imageSrc, setImageSrc] = useState('/images/beer_list.jpg')

  return (
    <div className={styles.container}>
      <Head>
        <title>hello | react-magnifier</title>
        <meta name="description" content="My hello worlds" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Hello <a href="https://ja.reactjs.org/docs/hooks-reference.html#usecontext"> useContext </a> world !!
        </h1>
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
