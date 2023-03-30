import React, { useEffect, useState } from 'react';
import Card from '../Card/Card';
import Side from '../Side-bar/Side';

const Main = () => {
    const[time , setTime] = useState([])
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
    return (
        <div className='container'>
            <div className="row">
               <div className="col-lg-8 my-3">
                {
                    cards.map(card => <Card addReadTime = {addReadTime} key={card.id} card={card}></Card>)
                }
               </div>
               <div className="col-lg-4 my-3">
                  <Side time={time}></Side>
               </div>
            </div>
        </div>
    );
};

export default Main;