import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="navbar">
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/jokes">Jokes</Link>
        </li>
        <li>
          <Link href="/jokes/add">Add Joke</Link>
        </li>
        <li>
          <Link href="/jokes/random">Random Joke</Link>
        </li>
        <li>
          <Link href="/jokes/chatbot">Chatbot</Link>
        </li>
      </ul>
    </nav>
  )
}
