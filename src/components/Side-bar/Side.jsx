import React from 'react';

const Side = (props) => {
        const {time} = props;
        const {bookMark} = props;
        let totalTime = 0;
        for(const card of time){
            totalTime = totalTime + card.time
        }
        let title = '';
        for(const card of bookMark){
            title = card.title
        }
    return (
        <div className='position-sticky top-0'>
            <h5 style={{background: "rgba(96, 71, 236, 0.2)"}} className='w-100 border border-primary p-3 rounded mb-4'>Spent time on read : {totalTime} Min</h5>
            <div>
                <h5 className='mb-3'>Bookmarked Blogs : {bookMark.length}</h5>
                <h3 className='mb-3'>{title}</h3>
            </div>
        </div>
    );
};

export default Side;