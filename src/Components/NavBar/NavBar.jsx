import { Children } from 'react'
import './NavBar.css'
import { Link, useMatch, useResolvedPath } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className="nav-bar">
      <Link to="/" className="site-title">
        Alena Byckova
      </Link>
      <div className="nav-bar-ul">
        <CustomLink to="/arival-web">Arrival Web</CustomLink>
        <CustomLink to="/arival-mobile">Arrival Mobile</CustomLink>
        <CustomLink to="/vtb-bank">VTB Bank</CustomLink>
        {/* <li className="nav-bar-li">
          <Link to="/vtb-bank" className="nav-bar-a">
            VTB Bank
          </Link>
        </li>
        <li className="nav-bar-li">
          <Link to="/arival-web" className="nav-bar-a">
            Arival Web
          </Link>
        </li>
        <li className="nav-bar-li">
          <Link to="/arival-mobile" className="nav-bar-a">
            Arival Mobile
          </Link>
        </li> */}
      </div>
    </nav>
  )
}

export function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({ path: resolvedPath.pathname, end: true })
  return (
    <button
      style={{
        backgroundColor: '#ffffff00',
        borderStyle: 'hidden',
        display: 'flex',
        padding: '0',
      }}
      className={isActive ? 'active' : ''}
    >
      <Link to={to} {...props}>
        {children}
      </Link>
    </button>
  )
}

// backgroundImage: `url(${props.backgroundImage})`,
//         backgroundPosition: 'bottom',
//         backgroundSize: 'cover',
//         backgroundRepeat: 'no-repeat',
//         minHeight: `${props.minHeight}`,
