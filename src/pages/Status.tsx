import { Header } from '../components/Header'
import { Separator } from '../components/Separator'
import { Tweet } from '../components/Tweet'
import './Status.css'

const answers = [
    'concordo',
    'Olha,faz sentido',
    'Parabens pelo progresso'

]

export function Status(){
    return(
        <main className='status'>
     
        <Header title='Tweet' />
        <form className='answer-tweet-form'>
          <label htmlFor='tweet'>
            <img src="https://github.com/edurezende10.png" alt="Eduardo Rezende" />
            <textarea name="" id="" placeholder="Tweet your answer" />

          </label>
          <button type='submit'>Answer</button>

        </form>
        <Separator />
         {
          answers.map((answer, index) => { return <Tweet content={answer} key={index} /> } )
        } 



      </main>
    )
}