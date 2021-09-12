import React, { VFC, createContext, useContext, useState } from 'react'

import Head from 'next/head'
import Image from 'next/image'

import styles from '../../styles/Home.module.css'

const MyContext = createContext({ count: 0 })

const Child: VFC<{ setCount: (count: number) => void }> = ({ setCount }) => {
  console.log('Child rendered.')

  const data = useContext(MyContext)

  return (
    <>
      <p className={styles.description}>Count: {data.count}</p>
      <div>
        <button type="button" onClick={() => setCount(data.count + 1)}>
          +
        </button>
        <button type="button" onClick={() => setCount(data.count - 1)}>
          -
        </button>
      </div>
    </>
  )
}

const ChildOutOfContext = () => {
  console.log('ChildOutOfContext rendered.')
  return <></>
}

const Parent = () => {
  console.log('Parent rendered.')

  const [count, setCount] = useState(0)

  return (
    <>
      <MyContext.Provider value={{ count }}>
        <Child setCount={setCount} />
      </MyContext.Provider>
      <ChildOutOfContext />
    </>
  )
}

const MyContext2 = createContext({
  count: 0,
  setCount: (_: number) => {
    /* do nothing */
  },
})

const Child2 = () => {
  console.log('Child2 rendered.')

  const { count, setCount } = useContext(MyContext2)

  return (
    <>
      <p className={styles.description}>Count: {count}</p>
      <div>
        <button type="button" onClick={() => setCount(count + 1)}>
          +
        </button>
        <button type="button" onClick={() => setCount(count - 1)}>
          -
        </button>
      </div>
    </>
  )
}
const Parent2 = () => {
  console.log('Parent2 rendered.')

  const [count, setCount] = useState(0)

  return (
    <MyContext2.Provider value={{ count, setCount }}>
      <Child2 />
    </MyContext2.Provider>
  )
}

export default function Home() {
  console.log('Home rendered.')

  return (
    <div className={styles.container}>
      <Head>
        <title>hello | react-magnifier</title>
        <meta name="description" content="My hello worlds" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Hello <a href="https://ja.reactjs.org/docs/hooks-reference.html#usecontext">useContext</a> world !!
        </h1>

        <Parent />
        <Parent2 />
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
