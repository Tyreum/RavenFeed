import React from 'react'
import './Header.css'
import logo from './Logo.png'

export default function Header(props){
    return(
        <div className="Header">
            <div className="Logo"><img src={logo} width="40px" height="40px"/>RavenFeed</div>
            <input type="text" name="search" id="search" placeholder="search"></input>
            <button className="material-icons UserIcon button">account_box</button>
            <button className="material-icons UserIcon button" >expand_more</button>
        </div>
    )
}

