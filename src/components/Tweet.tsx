import { ArrowsClockwise, ChatCircle, Heart } from 'phosphor-react';
import './Tweet.css';

interface TweetProps{
  content:string,


}


export function Tweet(props:TweetProps) {
  return (
    <div className="tweet">
    
      <img src="https://github.com/edurezende10.png" alt="Eduardo rezende" />

      <div className="tweet-content">
        <div className="tweet-content-header">
          <strong>Eduardo</strong>
          <span>@edurezende10</span>
        </div>

        <p>{props.content}<br /><br />
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