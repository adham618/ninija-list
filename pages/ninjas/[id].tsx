const Details: React.FC = ({ ninja }) => {
  return (
    <div>
      <h1>Details Page</h1>
      <h2>{ninja.name}</h2>
      <p>{ninja.email}</p>
      <p>{ninja.website}</p>
      <p>{ninja.address.city}</p>
    </div>
  )
}
export default Details


export const getStaticProps = async (context) => {
  const id = context.params.id
  const res = await fetch('https://jsonplaceholder.typicode.com/users/' + id)
  const data = await res.json()

  return {
    props: {
      ninja: data,
    },
    revalidate: 10
  }
}


export const getStaticPaths = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users')
  const data = await res.json()

  const paths = data.map((ninja: { id: any }) => ({
    params: { id: ninja.id.toString() },
  }))

  return { paths, fallback: 'blocking' }
}
