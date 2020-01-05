import React,{useState} from 'react'
import {connect} from 'react-redux'
import {registerRequest} from '../actions'
import {Link } from 'react-router-dom'
import '../assets/styles/components/Register.scss'

const Register = (props) => {
  const [form, setValues] = useState({
    email:'',
    name:'',
    password:''
  })
  const handleInput = e =>{
    setValues({
      ...form,
      [e.target.name] : e.target.value
    })
  }
  const handleSubmit = e =>{
    props.registerRequest(form);
    props.history.push('/')
    e.preventDefault();
  }
  return(
    <section className="register">
      <section className="register__container">
        <h2>Regístrate</h2>
        <form className="register__container--form" onSubmit={handleSubmit}>
          <input
            name='name'
            className="input" 
            type="text" 
            placeholder="Nombre"
            onChange={handleInput}
          />
          <input 
            className="input"
            name='email'
            onChange={handleInput}
            type="text" 
            placeholder="Correo"
          />
          <input 
            className="input" 
            type="password"
            name='password'
            onChange={handleInput}
            placeholder="Contraseña"
          />
          <button className="button">Registrarme</button>
        </form>
        <Link to="/login">Iniciar sesión</Link>
      </section>
    </section>
  )
}
 const mapDispatchToProps={
  registerRequest
}
export default connect(null, mapDispatchToProps)(Register);