import { useState } from "react";

function LoginForm({setCats}) {
    // input state values always need to be strings - empty initially
    const [currentCatName, setCatName] = useState('');
    const [currentLatinName, setLatinName] = useState('');
    const [currentImage, setImage] = useState('');


    function submit() {

        const newCats = {name: currentCatName , latinName: currentLatinName, image: currentImage}
        
        setCats(currentCats => {
            const clonedCats = [...currentCats] 
            clonedCats.push(newCats)
            return clonedCats
        })  
        document.getElementById('catName').value = ""
    }


    return (

        <div className="LoginForm componentBox">
            <div className="formRow">
                <label>Cat Name:
                    <input id="catName" type="text" value={currentCatName} name="catName"
                        onChange={(event) => setCatName(event.target.value)} />
                </label>
            </div>
            <div className="formRow">
                <label>Cat Latin Name:
                    <input id="catLatinName" type="text" value={currentLatinName} name="catLatinName"
                        onChange={(event) => setLatinName(event.target.value)} />
                </label>
            </div>
            <div className="formRow">
                <label>Cat Image:
                    <input id="catImage" type="text" value={currentImage} name="catImage"
                        onChange={(event) => setImage(event.target.value)} />
                </label>
            </div>
            <button className="btn1" onClick={submit}>Submit</button>
        </div>  
        
    )  }

export default LoginForm