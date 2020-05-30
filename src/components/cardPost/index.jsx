import React from 'react'
import './Card.css'

export default function CardPost(){
    return(
        <div className='card-post'>
            <span className="material-icons">expand_more</span>
            <span>10m</span>
            <span className="material-icons" style={{fontSize: 60}}>account_box</span>
            <h3>Nome</h3>
            <h5>@Nome</h5>
            <p>Loren Ipsum</p>
            <div className="post-img"></div>
            <div className="post-detail">
                <span className="material-icons" style={{fontSize: 30}}>comment</span>
                <span className="material-icons" style={{fontSize: 30}}>loop</span>
                <span className="material-icons" style={{fontSize: 30}}>grade</span>
                <span className="material-icons" style={{fontSize: 30}}>share</span>
            </div>
        </div>
    );
}