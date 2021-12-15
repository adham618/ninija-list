import { NextPage } from "next"
import styles from "../../styles/Ninjas.module.css"
interface indexProps {
  ninjas: any
}

const List: NextPage<indexProps> = ({ ninjas }) => {
  return (
    <div>
      <h1>Ninjas</h1>
      {ninjas.map((ninja: any) => (
        <div key={ninja.id}>
          <a className={styles.single}>
            <h2>
              {ninja.name}
            </h2>
          </a>
        </div>
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