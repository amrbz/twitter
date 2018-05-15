import Link from 'next/link'

const linkStyle = {
  marginRight: '3em'
}

const containerStyle = {
  paddingTop: '2em'
}

const Header = () => (
  <div style={containerStyle}>
    <Link href="/">
      <a style={linkStyle}>Home</a>
    </Link>
    <Link href="/join">
      <a style={linkStyle}>Join</a>
    </Link>
  </div>
)

export default Header