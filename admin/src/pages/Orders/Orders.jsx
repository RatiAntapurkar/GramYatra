import React from 'react'
import './Orders.css'
import qr from '../../assets/qr.png'

const Orders = () => {
  const friends = ["Ravi", "Amit", "Sneha", "Priya"]

  return (
    <>
      <h2>Tickets</h2>

      <div className="qr-container">
        {friends.map((name, index) => (
          <div key={index} className="qr-item">
            <img src={qr} alt={`${name}'s QR`} className="qr-image" />
            <p className="qr-name">{name}</p>
          </div>
        ))}
      </div>
    </>
  )
}

export default Orders
