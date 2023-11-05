import { Children } from 'react'
import './NavBar.css'
import { Link, useMatch, useResolvedPath } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className="nav-bar">
      <Link to="/" className="site-title">
        Alena Byckova
      </Link>
      <ul className="nav-bar-ul">
        <CustomLink to="/vtb-bank">VTB Bank</CustomLink>
        <CustomLink to="/arival-web">Arival Web</CustomLink>
        <CustomLink to="/arival-mobile">Arival Mobile</CustomLink>
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
      </ul>
    </nav>
  )
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({ path: resolvedPath.pathname, end: true })
  return (
    <li className={isActive ? 'active' : ''}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  )
}
