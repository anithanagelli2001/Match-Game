import React from 'react'
import logo from './assets/logo.png'
import timerImg from './assets/timer.png'

const Header = ({score, time}) => {
  return (
    <div className="header">
      <img src={logo} alt="website logo" className="logo" />
      <p>Score: {score}</p>
      <div className="timer-container">
        <img src={timerImg} alt="timer" className="timer-img" />
        <p>{time} sec</p>
      </div>
    </div>
  )
}

export default Header
