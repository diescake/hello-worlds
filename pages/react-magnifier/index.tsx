import React from 'react'
import Magnifier from 'react-magnifier'

import Head from 'next/head'
import Image from 'next/image'

import styles from '../../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>hello | react-magnifier</title>
        <meta name="description" content="My hello worlds" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Hello <a href="https://github.com/samuelmeuli/react-magnifier">react-magnifier</a> world !!
        </h1>

        <h2>img elements (original image)</h2>

        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img className={styles.beerList} src="/images/beer_list.jpg" alt="beer list" />

        <h2>Magnifier</h2>

        <Magnifier
          height="480px"
          width="640px"
          zoomFactor={1.5}
          mgWidth={300}
          mgHeight={300}
          mgShape="circle"
          mgShowOverflow={false}
          mgBorderWidth={5}
          src="/images/beer_list.jpg"
        />
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
