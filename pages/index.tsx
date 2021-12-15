import type { NextPage } from 'next'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <>
      <h1>Homepage</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas repudiandae eligendi ad similique quod id quis sapiente sint autem blanditiis error voluptates, eius, libero dolorum soluta inventore! Nostrum, obcaecati magni.</p>
      <Link href="/ninjas">
        <a> see Ninja Listing</a>
      </Link>
    </>
  )
}

export default Home
