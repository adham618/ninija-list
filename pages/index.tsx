import type { NextPage } from 'next'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div>
      <h1 className={styles.title}>Homepage</h1>
      <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas repudiandae eligendi ad similique quod id quis sapiente sint autem blanditiis error voluptates, eius, libero dolorum soluta inventore! Nostrum, obcaecati magni.</p>
      <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas repudiandae eligendi ad similique quod id quis sapiente sint autem blanditiis error voluptates, eius, libero dolorum soluta inventore! Nostrum, obcaecati magni.</p>
      <Link href="/ninjas">
        <a className={styles.btn}> see Ninja Listing</a>
      </Link>
    </div>
  )
}

export default Home
