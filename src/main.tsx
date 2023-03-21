import React from 'react'
import ReactDOM from 'react-dom/client'
import './components/global.css'
import { Header } from './components/Header'
import { Separator } from './components/Separator'
import Sidebar from './components/Sidebar'
import { Tweet } from './components/Tweet'

const tweets = [
  'meu primeiro tweet',
  'teste',
  'deu certo tweetar'
]


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <div className='Layout'>
      <Sidebar />
      <div className="content">
        <main className='timeline'>
          <Header title='Home' />
          <form className='new-tweet-form'>
            <label htmlFor='tweet'>
              <img src="https://github.com/edurezende10.png" alt="Eduardo Rezende" />
              <textarea name="" id="" placeholder="What's happening" />

            </label>
            <button type='submit'>Tweet</button>

          </form>
          <Separator />
          {
            tweets.map((tweet, index) => { return <Tweet content={tweet} key={index} /> } )
          }



        </main>
      </div>

    </div>
  </React.StrictMode>,
)
