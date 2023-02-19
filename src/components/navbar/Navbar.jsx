import React, { useState } from 'react'
import './navbar.css'
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri'
import logo from '../../assets/logo.svg'

const Menu = () => (
  <>
     <p>
            <a href='#Home'>Home</a>
          </p>
          <p>
            <a href='#whatGPT3'>What is GPT3</a>
          </p>
          <p>
            <a href='#possibility'>Open AI</a>
          </p>
          <p>
            <a href='#features'>Case Studies</a>
          </p>
          <p>
            <a href='#blog'>Libery</a>
          </p>
  </>

)

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false)
  return (
    <div className='gpt3__navbar'>
      <div className='gpt3__navbar-link'>
        <div className='gpt3__navbar-link_logo'>
          <img src={logo} alt='logo'/>
        </div>
        <div className='gpt3__navbar-link_container'>
         <Menu />
        </div>
      </div>
      <div className='gpt3__navbar-sign'>
        <p>Sign in</p>
        <button type='button'>Sign Up</button>
      </div>
      <div className='gpt3__navbar-menu'>
        {toggleMenu
        ? <RiCloseLine color='crimson' size={27} onClick={()=>setToggleMenu(false)} />
        : <RiMenu3Line color='crimson' size={27} onClick={()=>setToggleMenu(true)} />
        }
        {toggleMenu && (
          <div className='gpt3__navbar-menu_container scale-up-center'>
            <div className='gpt3__navbar-menu_container-link'>
              <Menu />
              <div className='gpt3__navbar-menu_container-link-sign'>
                <p>Sign in</p>
                <button type='button'>Sign Up</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Navbar