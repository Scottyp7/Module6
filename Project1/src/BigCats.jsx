import './App.css'
import React, { useState } from 'react'
import LoginForm from './LoginForm'
import ReactDom from "react-dom"

const Cats = [
    { id:1, name: 'Cheetah', latinName: 'Acinonyx jubatus' ,image:'https://cdn.sci.news/images/enlarge11/image_12760e-Cheetah.jpg' },
    { id:2, name: 'Cougar', latinName: 'Puma concolor' ,image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJKll6iSo8dbLCUXJQkMNySOVtqH2D0dr73A&s' },
    { id:3, name: 'Jaguar', latinName: 'Panthera onca' ,image:'https://www.worldanimalprotection.org/cdn-cgi/image/fit=cover,width=800,format=auto/siteassets/article/hero.jpg'},
    { id:4, name: 'Leopard', latinName: 'Panthera pardus' ,image:'https://cdn.britannica.com/30/136130-050-3370E37A/Leopard.jpg'},
    { id:5, name: 'Lion', latinName: 'Panthera leo' ,image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuLoY5Xjn8LPI7KttbHrwBqIZHxir5VzJ3fw&s'},
    { id:6, name: 'Snow leopard', latinName: 'Panthera uncia' ,image:'https://i.natgeofe.com/k/cd962d91-1791-42b2-a25b-7d56a6b23811/snow-leopard-cub_square.jpg'},
    { id:7, name: 'Tiger', latinName: 'Panthera tigris',image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDkn1gHUOC_tVUg2MZjO4dkPW__3T7-z8M3w&s'}]
  
    
function BigCats() {

    const [currentCats, setCurrentCats] = useState(Cats)

    const CatsItems = currentCats.map(cat => 
        <li key={cat.id}><span>A {cat.name}, is also known as a {cat.latinName}</span><img className="catsImages" src={cat.image} alt="cats" /><button onClick={() => removeCats(cat.id)}>Delete</button></li>  )
    
    function removeCats(id){
        
            setCurrentCats(cats => {
              return cats.filter(cat => cat.id !== id)
            }  )  }

    function ReverseCats()
    {
       let newCats = [...currentCats]
       newCats.reverse()
       setCurrentCats(newCats)
    }

    function SortCatsZ()
    {
       let sortedCats = [...currentCats];
       sortedCats.sort((a,b) => a.name < b.name ? 1 : -1 ) ; {/* sorting from z to a */}
       setCurrentCats(sortedCats);
    }

    function SortCatsA()
    {
       let sortedCats = [...currentCats];
       sortedCats.sort((a,b) => a.name > b.name ? 1 : -1 )  ;{/* sorting from a to z */}
       setCurrentCats(sortedCats);
    }

    function filterPanth()
    {
       const filterCats = currentCats.filter(cats => cats.latinName.startsWith('Panth'));
       setCurrentCats(filterCats);
    }
    

    return (
        <>
            <div className='componentBox'>
                <LoginForm setCats = {setCurrentCats}></LoginForm>
            </div>
        <div className="catsList componentBox">

            <div className='buttonDiv'>
            <ul> 
                <span>
                {CatsItems}
                </span>
            </ul> 
            
                <button onClick={()=> filterPanth()}>Filter Panthas</button>
                <button onClick={()=> ReverseCats()}>Reverse</button>
                <button onClick={()=> SortCatsZ()}>Sort Z-A</button>
                <button onClick={()=> SortCatsA()}>Sort A-Z</button>
            </div>
        </div>
        </>
)  }  

export default BigCats