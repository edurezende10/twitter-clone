interface TweetProps {
    user:string
    content:string
}
export function Tweet(props : TweetProps){
    console.log(props)
    return (
        <div>
             <strong>{props.user}</strong>
        <p>{props.content}</p>
        <button>Like</button>

        </div>
       
    )
}