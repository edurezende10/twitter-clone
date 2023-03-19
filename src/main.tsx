import React from 'react'
import ReactDOM from 'react-dom/client'
import twitterLogo from './assets/twitter-logo.svg'
import './components/global.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <div className='Layout'>
      <aside className='sidebar'>
        <img className='logo' src={twitterLogo} alt="Logo" />
        <nav></nav>
        <button>Tweet</button>
      </aside>
      <div className="content">
content
      </div>

    </div>
  </React.StrictMode>,
)
