import './App.css'
import HelloWorld from './HelloWorld'
import Second from './Second'
import { Fifth } from './Fifth'
import Welcome from './Welcome'
import {PropsDisplayer, ScottsFunction} from './PropsDisplayer'
import ScottsGreeting from './Greeting'
import MoodChanger from './MoodState'
import BirthdayTranslator from './BirthdayStates'
import ExplodingBomb from './ExplodingBomb'
 import { useState } from 'react';
import LoginForm from './LoginForm'
import BigCats from './BigCats'

 function FilterableProductTable({ products }) {
   const [filterText, setFilterText] = useState('');
   const [inStockOnly, setInStockOnly] = useState(false);
 
   return (
     <div>
       <SearchBar 
         filterText={filterText} 
         inStockOnly={inStockOnly} 
         onFilterTextChange={setFilterText} 
         onInStockOnlyChange={setInStockOnly} />
       <ProductTable 
         products={products} 
         filterText={filterText}
         inStockOnly={inStockOnly} />
     </div>
   );
 }
 
 function ProductCategoryRow({ category }) {
   return (
     <tr>
       <th colSpan="2">
         {category}
       </th>
     </tr>
   );
 }
 
 function ProductRow({ product }) {
   const name = product.stocked ? product.name :
     <span style={{ color: 'red' }}>
       {product.name}
     </span>;
 
   return (
     <tr>
       <td>{name}</td>
       <td>{product.price}</td>
     </tr>
   );
 }
 
 function ProductTable({ products, filterText, inStockOnly }) {
   const rows = [];
   let lastCategory = null;
 
   products.forEach((product) => {
     if (
       product.name.toLowerCase().indexOf(
         filterText.toLowerCase()
       ) === -1
     ) {
       return;
     }
     if (inStockOnly && !product.stocked) {
       return;
     }
     if (product.category !== lastCategory) {
       rows.push(
         <ProductCategoryRow
           category={product.category}
           key={product.category} />
       );
     }
     rows.push(
       <ProductRow
         product={product}
         key={product.name} />
     );
     lastCategory = product.category;
   });
 
   return (
     <table>
       <thead>
         <tr>
           <th>Name</th>
           <th>Price</th>
         </tr>
       </thead>
       <tbody>{rows}</tbody>
     </table>
   );
 }
 
 function SearchBar({
   filterText,
   inStockOnly,
   onFilterTextChange,
   onInStockOnlyChange
 }) {
   return (
     <form>
       <input 
         type="text" 
         value={filterText} placeholder="Search..." 
         onChange={(e) => onFilterTextChange(e.target.value)} />
       <label>
         <input 
           type="checkbox" 
           checked={inStockOnly} 
           onChange={(e) => onInStockOnlyChange(e.target.checked)} />
         {' '}
         Only show products in stock
       </label>
     </form>
   );
 }
 
 const PRODUCTS = [
   {category: "Fruits", price: "$1", stocked: true, name: "Apple"},
   {category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit"},
   {category: "Fruits", price: "$2", stocked: false, name: "Passionfruit"},
   {category: "Vegetables", price: "$2", stocked: true, name: "Spinach"},
   {category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin"},
   {category: "Vegetables", price: "$1", stocked: true, name: "Peas"}
 ];
 
 export default function App() {
   return <FilterableProductTable products={PRODUCTS} />;
 }
 

  {/*      
  
            <ExplodingBomb></ExplodingBomb>
      <BigCats></BigCats>   
      <MoodChanger></MoodChanger>
      <ScottsGreeting >This is a Child of the Scotts Function/"Parent"</ScottsGreeting> 
  
    <BirthdayTranslator></BirthdayTranslator>

    <ComplexComment author={comment.author} text={comment.text} date={comment.date}></ComplexComment>

    <ScottsFunction>Nothing will be desplayed as the function properties defined by the parent</ScottsFunction>
                  
    <PropsDisplayer>no Children Defined</PropsDisplayer>
    <PropsDisplayer name="Scott" company="IOD"></PropsDisplayer>
    <PropsDisplayer prop1="first" prop2="second" prop3={3}/>
    <PropsDisplayer pets={["cat", "dog", "goldfish"]}/>
    <HelloWorld userName="Scott"></HelloWorld>
      <Welcome name="Students"></Welcome>
      <HelloWorld userName="Scott"></HelloWorld>
      <Second></Second>
      <Fifth></Fifth>

   

*/}


