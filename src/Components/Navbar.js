import React from 'react'
import './Navbar.css'
export default function Navbar() {
  return (
      <div className="n-wrapper">
          <div className="n-left">
              <div className="n-name">
                  Aminur
              </div>
              <span>toggle</span>
          </div>
          <div className="n-right">
              <div className="n-list">
                  <ul >
                      <li>Home</li>
                      <li>Services</li>
                      <li>Experience</li>
                      <li>Portfolio</li>
                      <li>Testimonia</li>
                  </ul>
              </div>
              <button className="button">
                Contact us
              </button>
          </div>
    </div>
  )
}
