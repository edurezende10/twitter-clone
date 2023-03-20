import React from 'react'
import ReactDOM from 'react-dom/client'
import{Sparkle} from 'phosphor-react'
import './components/global.css'
import Sidebar from './components/Sidebar'
import { Tweet } from './components/Tweet'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <div className='Layout'>
     <Sidebar/>
      <div className="content">
          <main className='timeline'>
            <div className='timeline-header'>
              Home
              <Sparkle/>
            </div>
            <form className='new-tweet-form'>
              <label htmlFor='tweet'>
                <img src="https://github.com/edurezende10.png" alt="Eduardo Rezende" />
                <textarea name="" id=""  placeholder="What's happening"  />
              
              </label>
              <button type='submit'>Tweet</button>

            </form>
            <div className="separator"/>
            <Tweet/>
            <Tweet/>
            <Tweet/>
            <Tweet/>

          </main>
      </div>

    </div>
  </React.StrictMode>,
)
