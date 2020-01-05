import React from 'react'
import {Link} from 'react-router-dom';
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import '../assets/styles/components/Header.scss'

import logo from '../assets/static/logo-platzi-video-BW2.png'
import icon from '../assets/static/user-icon.png'

import gravatar from '../utils/gravatar'
import {logoutRequest} from '../actions'

 const Header = (props) => {
  const { user } = props;
  const hasUser = Object.keys(user).length > 0

  const handleLogout =()=>{
    props.logoutRequest({})
  }
  return (
    <header className="header">
    <Link to="/">
      <img className="header__img" src={logo} alt="Platzi Video"/>
    </Link>
    <div className="header__menu">
      <div className="header__menu--profile">
        {
          hasUser ?
          <img src={gravatar(user.email)} alt={user.email}/> :
          <img src={icon} alt=""/>
        }
        <p>Perfil</p>
      </div>
      <ul>
        {
          hasUser ? 
          <li><Link to="/">{user.name}</Link></li>:null
        }

        {
          hasUser ? 
          <li>
            <a href="#" onClick={handleLogout}>
              Cerrar Sesion
            </a>
          </li>
          :
          <li><Link to="/login">Inicia Sesión</Link></li>
        }
      </ul>
    </div>
  </header>
  )
}

Header.prototype={
  user: PropTypes.object
}
const mapStateToProps = state =>{
  return{
    user:state.user
  }
}
const mapDispatchToProps = {
  logoutRequest
}
export default connect(mapStateToProps, mapDispatchToProps)(Header)