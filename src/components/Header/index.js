import React from 'react'
import Logo from '../Logo'
import './styles.scss'

export default function Header () {
  return (
    <header className='header'>
      <h1 className='header__title'>Welcome to the</h1>
      <Logo />
    </header>
  )
}
