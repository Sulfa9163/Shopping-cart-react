import React from 'react'
import '../styles/navbar.css'
const Navbar = ({size, setShow}) => {
  return (
    <nav>
        <div className="nav_box">
            <span className="my_shop"  onClick={()=>setShow(true)}>
                My shopping
            </span>
            <div className="cart" onClick={()=>setShow(false)} >
                <span>
                    <i class="fas fa-cart-plus"></i>
                </span>
                <span>{size}</span>
            </div>
        </div>
    </nav>
  )
}

export default Navbar
