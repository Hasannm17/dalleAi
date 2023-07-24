import React from 'react'
import {BrowserRouter ,Link ,Route ,Routes} from "react-router-dom";
import { CreatePost, Home } from '../pages';
const Routerr = () => {
  return (
    <Routes >

    <Route path='/' element={<Home/>}  />
    
    <Route path='/create-post' element={<CreatePost/>}  />

    
    </Routes>
  )
}

export default Routerr;