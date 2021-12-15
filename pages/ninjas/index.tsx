import { NextPage } from "next"
import Link from "next/link"
import styles from "../../styles/Ninjas.module.css"
interface indexProps {
  ninjas: any
}

const List: NextPage<indexProps> = ({ ninjas }) => {
  return (
    <div>
      <h1>All Ninjas</h1>
      {ninjas.map((ninja: any) => (
        <Link href={'/ninjas/' + ninja.id} key={ninja.id}>
          <a className={styles.single}>
            <h2>
              {ninja.name}
            </h2>
          </a>
        </Link>
      ))}
    </div>
  )
}
export default List


export const getStaticProps = async () => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users`)
  const data = await res.json()

  if (!data) {
    return {
      notFound: true,
    }
  }

  return {
    props: { ninjas: data }
  }
}