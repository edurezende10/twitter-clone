import { ArrowsClockwise, ChatCircle, Heart } from 'phosphor-react';
import './Tweet.css';



export function Tweet() {
  return (
    <div className="tweet">
    
      <img src="https://github.com/edurezende10.png" alt="Eduardo rezende" />

      <div className="tweet-content">
        <div className="tweet-content-header">
          <strong>Eduardo</strong>
          <span>@edurezende10</span>
        </div>

        <p>Your bones don't break, mine do. That's clear. <br /><br />
          Your cells react to bacteria and viruses differently than mine. <br /><br />
          You don't get sick, I do. That's also clear.<br /><br />
        </p>

        <div className="tweet-content-footer">
          <button type="button">
            <ChatCircle />
            20
          </button>

          <button type="button">
            <ArrowsClockwise />
            20
          </button>

          <button type="button">
            <Heart />
            20
          </button>
        </div>
      </div>
    </div>



  )
}