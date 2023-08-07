import React from 'react';
import './NavBar.css';

export default function NavBar({children}) {
  return (
    <>
    {/**instead of anchor tags, use routing */}
      <nav className='navbar'>
        <a href='/'>
          <div className="brand">
            <div className="brand-logo-container">
              <img src="../../../news-monkey-logo.png" alt="" className="brand-logo" height='130px' />
            </div>
            <h1 className="brand-name">News Monkey</h1>
          </div>
        </a>      
        <ul className="nav-items-wrapper">
          <a href='/top_headlines'><li className="nav-item top-headlines">Top Headlines</li></a>
          <a href='/About'><li className="nav-item about">About</li></a>
          <a href='/Contact'><li className="nav-item contact">Contact</li></a>
        </ul>
        {children}
      </nav>
      <hr className='line-break'/>
    </>
  )
}
