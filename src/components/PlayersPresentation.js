import React from 'react'
export default function PlayersPresentation({ players }) {
  //console.log(players);
  return (
    <div className="grid-container">
      {players.map((player) => (

        <div className="grid-item">
          <div className="card">
            <img src={player.img} />
            <h3>{player.name}</h3>
            <p className="title">{player.club}</p>
            <p className="footer-card-detail"><button> Detail</button></p>
          </div>
        </div>
      ))}

    </div>
  )
}
