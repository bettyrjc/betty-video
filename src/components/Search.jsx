import React from 'react'
import {connect} from 'react-redux'
import {searchVideo} from '../actions'
import '../assets/styles/components/Search.scss'


 const Search = props => {
  const {  searchVideo  } = props

  const handleSearch =(e)=>{
   console.log(searchVideo(e.target.value))
  }
  return (
    <section className="main">
    <h2 className="main__title">¿Qué quieres ver hoy?</h2>
    <input 
          type="text" 
          className='input isHome' 
          placeholder="Buscar..." 
          onChange={handleSearch}/>
  </section>
  )
}

const mapDispatchToProps = {
  searchVideo}
export default connect(null, mapDispatchToProps)(Search);