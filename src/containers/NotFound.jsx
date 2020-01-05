import React from 'react';
import {Link } from 'react-router-dom'
import '../assets/styles/components/Register.scss'

const NotFound = () => (
  <>
    <h1>No encontrado</h1> 
    <Link to="/">Vuelve a home</Link>
  </>
)
export default NotFound;