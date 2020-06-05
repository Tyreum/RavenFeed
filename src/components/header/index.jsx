import React from 'react'
import './Header.css'
import logo from './Logo.png'

export default function Header(props){
    return(
        <div className="Header">
            <div className="Logo"><img src={logo} width="40px" height="40px"/>CrowFeed</div>
            <input type="text" name="search" id="search" placeholder="search"></input>
            <span className="material-icons UserIcon">account_box</span>
            <span className="material-icons UserIcon" >expand_more</span>
        </div>
    )
}

