import React from 'react'
import { Link } from 'react-router-dom'
export default function Navbar() {
  return (
    <div>
     <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand" href="/">Navbar</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-Link active" aria-current="page" href="#">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-Link" href="/">Features</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-Link" href="/">Pricing</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-Link disabled" href="/" tabIndex={-1} aria-disabled="true">Disabled</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}
