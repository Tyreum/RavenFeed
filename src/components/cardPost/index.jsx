import React from 'react'
import './Card.css'
import comment from './comment.png'
import loop from './loop.png'
import grade from './grade.png'
import share from './share.png'
import comment_red from './comment_red.png'
import loop_red from './loop_red.png'
import grade_red from './grade_red.png'
import share_red from './share_red.png'
import grade_full_red from './grade_full_red.png'

export default function CardPost(){
    return(
        <div className='card_position'>
            <div className='card-post'>
                <div className='post-time'>
                    <span className="material-icons" >expand_more</span>
                    <span>10m</span>
                </div>   
                <div className='user-info'>
                    <span className="material-icons post-user">account_box</span>
                    <div className='username'>
                        <h3>Nome</h3>
                        <h5 style={{marginTop: "-20px"}}>@Nome</h5>
                    </div>
                </div>     
                <p className='post-text'>Loren Ipsum</p>
                <div className="post-img"></div>
                <div className="post-detail">
                    <div className='btn-flexpost'>
                        <a href="#"><img className='btncomment' src={comment} alt="Comment"/></a>
                        <a href="#"><img className='btnloop' src={loop} alt="Loop"/></a>
                        <a href="#"><img className='btngrade' src={grade} alt="Grade"/></a>
                        <a href="#"><img className='btnshare' src={share} alt="Share"/></a>
                    </div>
                </div>
            </div>
        </div>
    );
}