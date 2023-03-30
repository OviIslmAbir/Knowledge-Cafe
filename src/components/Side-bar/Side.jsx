import React from 'react';

const Side = (props) => {
        const {time} = props;
        let totalTime = 0;
        for(const card of time){
            console.log(time)
            totalTime = totalTime + card.time
        }
    return (
        <div>
            <h5 style={{background: "rgba(96, 71, 236, 0.2)"}} className='w-100 border border-primary p-3 rounded'>Spent time on read : {totalTime}</h5>
        </div>
    );
};

export default Side;