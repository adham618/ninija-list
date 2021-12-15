import Head from "next/head"
import Footer from "./Footer"
import Navbar from "./Navbar"
interface LayoutProps {
  children: any
}
const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Head>
        <title>NinjaList | {children.type.name}</title>
      </Head>
      <main className="content">
        <Navbar />
        {children}
        <Footer />
      </main>
    </>
  )
}
export default Layout