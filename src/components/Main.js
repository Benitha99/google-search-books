import React,{useState} from 'react'
import Card from './Card'
import axios from "axios"

const Main = () => {
  const[search,setSearch]=useState("")
  const[bookData,setData]=useState([]);
  
  const searchButton=(evt)=>{
    if(evt.key==="Enter"){
      axios.get('https://www.googleapis.com/books/v1/volumes?q='+search+'&key=AIzaSyB2-prNJl0tYCByGsyzXHYJBQ7bFszEDS8'+'&maxResults=40')
      .then(res=>setData(res.data.items))
      .catch(err=>console.log(err))
    }
  }
  return (
    <>
     <div className='header'>
         <div className='row1'>
             <h1>A room wothout books is like <br/> a body without a soul.</h1>
         </div>
         <div className='row2'>
             <h2>Find your Book</h2>
             <div className='search'>
                 <input type='text' placeholder="enter your book name" value={search} onChange={(e)=>setSearch(e.target.value)} onKeyPress={searchButton}/>
                 <button><i class='fas fa-search'></i></button>
             </div>
             <img src='./image/bg.jpeg'alt=''/>
         </div>
       
     </div>
      <div className='container'>
     {
       <Card book={bookData}/>
     }
      </div>




    </>
  )
}

export default Main
