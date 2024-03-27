import React from 'react'

const Scorecard = ({score, onPlayAgain}) => {
  return (
    <div className="scorecard-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/match-game-trophy.png"
        alt="trophy"
        className="trophy-img"
      />
      <p className="score-text">YOUR SCORE</p>
      <p className="score-value">{score}</p>
      <button className="play-again-btn" onClick={onPlayAgain}>
        PLAY AGAIN
      </button>
      
    </div>
  )
}

export default Scorecard
