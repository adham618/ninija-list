import Image from "next/image"
import Link from "next/link"

const Navbar: React.FC = ({ }) => {
  return (
    <nav>
      <div className="logo">
        <Image src='/logo.png' width={128} height={77} alt='logo' draggable="false" />
      </div>
      <Link href="/"><a>Home</a></Link>
      <Link href="/about"><a>About</a></Link>
      <Link href="/ninjas"><a>Ninja Listing</a></Link>
    </nav>
  )
}
export default Navbar