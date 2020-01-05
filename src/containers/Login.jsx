import React,{useState} from 'react';
import {connect} from 'react-redux'
import {Link}  from 'react-router-dom'

import {loginRequest} from '../actions'

import '../assets/styles/components/Login.scss'
import Twitter from '../assets/static/twitter-icon.png'
import Google from '../assets/static/google-icon.png'

const Login =(props) => {
  const [form, setValues] = useState({
    email:''
  });

  const handleInput = e =>{
    setValues({
      ...form,
      [e.target.name]: e.target.value
    })
  }
  const handleSubmit = e => {
    props.loginRequest(form)
    props.history.push('/')
    e.preventDefault();
  }
  return(
    <section className="login">
      <section className="login__container">
        <h2>Inicia sesión</h2>
        <form className="login__container--form" onSubmit={handleSubmit}>

          <input className="input" 
                 name='email'
                 type="text" 
                 placeholder="Correo"
                 onChange = {handleInput}
          />
          <input className="input"
                 name='password' 
                 type="password" 
                 placeholder="Contraseña"
                 onChange = {handleInput}
          />

          <button className="button">Iniciar sesión</button>
          <div className="login__container--remember-me">
            <label>
              <input type="checkbox" id="cbox1" value="first_checkbox"/>Recuérdame {' '}
            </label>
            <a href="/">Olvidé mi contraseña</a>
          </div>
        </form>
        <section className="login__container--social-media">
          <div><img src={Twitter}/> Inicia sesión con Google</div>
          <div><img src={Google}/> Inicia sesión con Twitter</div>
        </section>
        <p className="login__container--register">No tienes ninguna cuenta {''}
        <Link to="/register">Regístrate</Link>
        </p>
      </section>
    </section>
)}
// const mapStateToProps
const mapDispatchToProps = {
  loginRequest
}
export default connect(null, mapDispatchToProps)(Login);