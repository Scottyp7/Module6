import './App.css'
import { useState } from "react";

// save in MoodChanger.jsx
function MoodChanger() {
    const [mood, setMood] = useState(<p>&#129303;</p>);
    return (
        <div className="MoodChanger componentBox">
            Current Mood: {mood}
            <button className='btn1' onClick={() => setMood(<p>&#128530;</p>)}>Sad</button>
            <button className='btn1' onClick={() => setMood(<p>&#128512;</p>)}>Happy</button>
            <button className='btn1' onClick={() => setMood(<p>&#129303;</p>)}>Unsure</button>
        </div>
        
) }
export default MoodChanger;