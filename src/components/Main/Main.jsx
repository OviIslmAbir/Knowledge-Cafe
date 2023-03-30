import React, { useEffect, useState } from 'react';
import Card from '../Card/Card';
import Question from '../Question/Question';
import Side from '../Side-bar/Side';

const Main = () => {
    const[time , setTime] = useState([])
    const[bookMark , setBookMark] = useState([])
    const [cards , setCards] = useState([])
    useEffect(()=>{
        fetch('data.json')
          .then(res => res.json())
          .then(data => setCards(data))
    },[])
    const addReadTime = (card) =>{
        const newTime = [...time, card]
        setTime(newTime)
    }
    const addBookMark = (card) =>{
        const newBookMark = [...bookMark, card]
        setBookMark(newBookMark)
    }
    return (
        <div className='container'>
            <div className="row">
               <div className="col-lg-8 my-3">
                {
                    cards.map(card => <Card addBookMark ={addBookMark} addReadTime = {addReadTime} key={card.id} card={card}></Card>)
                }
               </div>
               <div className="col-lg-4 my-3">
                  <Side bookMark ={bookMark} time={time}></Side>
               </div>
               <Question></Question>
            </div>
        </div>
    );
};

export default Main;