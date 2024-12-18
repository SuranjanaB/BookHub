import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import Card from './Card'
import axios from "axios";

const Main = () => {
  const [search,setSearch]=useState("");
  const[bookData,setData]=useState([]);
  const searchBook=(evt)=>{
    if(evt.key==="Enter"){
      axios.get('https://www.googleapis.com/books/v1/volumes?q='+search+'&key=AIzaSyARW5xrHcgwxqmNv5N-loXRPokJuMfDDeg'+'&maxResults=40')
      .then(res=>setData(res.data.items))
      .catch(err=>console.log(err))
    }
  }
  return (
    <>
      <div className='header'>
      <img src='./images/hub.png' alt='' className='bliss'/>
        <div className='row1'>
            <h1>Books are a uniquely portable magic.<br/> – Stephen King</h1>
        </div>
        <div className='row2'>
            <h2>Find Your Book</h2>
            <div className='search'>
                <input type='text' placeholder='Enter Your Book Name' value={search} onChange={e=>setSearch(e.target.value)}
                onKeyPress={searchBook}/>
                <button><FontAwesomeIcon icon={faMagnifyingGlass} /></button>
            </div>
            <img src='./images/bg2.png' alt='img-1'/>
        </div>
      </div>
      <div className='container'>
            <Card book={bookData}/>
        </div>
    </>
  )
}

export default Main
