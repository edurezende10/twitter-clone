import { Header } from "../components/Header"
import { Separator } from "../components/Separator"
import { Tweet } from "../components/Tweet"
import './Timeline.css'

const tweets = [
    'meu primeiro tweet',
    'teste',
    'deu certo tweetar'
]
export function Timeline() {
    return (
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
                tweets.map((tweet, index) => { return <Tweet content={tweet} key={index} /> })
            }



        </main>
    )
}