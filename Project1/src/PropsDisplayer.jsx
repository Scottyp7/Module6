import './App.css'
// Create a new file called PropsDisplayer.jsx in a components folder
function PropsDisplayer(props) {
    // convert object to string
    const stringProps = JSON.stringify(props);

    return (
        <div className="PropsDisplayer componentBox">
            <h2>Scotts Details</h2>
            <h3>{stringProps}</h3>
            {/* what happens if we try to render the object {props} ? */}
        </div>
    )
}
// export this component so we can import it elsewhere


function ScottsFunction()  {
    let x = 2
    let y = 3
    const results = x + y
return ( 

    <div className='ScottsDiv'>
        <h1>Hello World</h1>
        <h2>The Result of Scotts Function is:</h2>
        <h2>{results}</h2>
    </div>
)  }

export {PropsDisplayer, ScottsFunction}





