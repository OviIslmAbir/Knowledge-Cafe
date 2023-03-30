import React, { useEffect, useState } from 'react';
import Card from '../Card/Card';

const Main = () => {
    const [cards , setCards] = useState([])
    useEffect(()=>{
        fetch('data.json')
          .then(res => res.json())
          .then(data => setCards(data))
    },[])
    return (
        <div className='container'>
            <div className="row">
               <div className="col-lg-8">
                {
                    cards.map(card => <Card key={card.id} card={card}></Card>)
                }
               </div>
               <div className="col-lg-4">
                 
               </div>
            </div>
        </div>
    );
};

export default Main;