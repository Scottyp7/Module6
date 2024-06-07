import './App.css'



function ScottsGreeting(props)
{
    return(
        <div className="componentBox">
            <h3>Hello John{props.name}!</h3>
                <p>{props.children}</p>
        </div>
    )
}
export default ScottsGreeting