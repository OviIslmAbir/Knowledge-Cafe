import React from 'react';
import './Card.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark } from '@fortawesome/free-solid-svg-icons'

const Card = (props) => {
    const {img, userImg, name, time, date, title} = props.card;
    const addReadTime = props.addReadTime;
    return (
        <div>
            <div  className="card mb-4 p-0">
                <img src={img} className="card-img-top" alt=""/>
                <div className="card-body">
                    <div className='d-flex justify-content-between'>
                        <div className='d-flex align-items-centers gap-2'>
                            <img id='user-img' src={userImg} alt="" />
                            <div>
                                <h5 className="card-title">{name}</h5>
                                <h6><small>{date}</small></h6>
                            </div>
                        </div>
                        <h6><small>{time} min read <FontAwesomeIcon className='btn' icon={faBookmark} /></small></h6>
                    </div>
                    <h2 className="card-text">{title}</h2>
                    <a onClick={() => addReadTime(props.card)} href="#" className="btn btn-warning">Mark as read</a>
                </div>
            </div>
        </div>
    );
};

export default Card;