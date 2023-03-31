

const Side = (props) => {
        const {time} = props;
        const {bookMark} = props;
        let totalTime = 0;
        for(const card of time){
            totalTime = totalTime + card.time
            console.log(card)
        }
    return (
        <div className='position-sticky top-0'>
            <h5 style={{background: "rgba(96, 71, 236, 0.2)"}} className='w-100 border border-primary p-3 rounded mb-4'>Spent time on read : {totalTime} Min</h5>
            <div className="p-3 rounded" style={{background:"pink"}}>
                <h5 className='mb-3'>Bookmarked Blogs : {bookMark.length}</h5>
                <div>
                    {
                      bookMark.map(card => <h3 className="rounded p-3 shadow-lg" style={{background:"whitesmoke"}}>{card.title}</h3>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Side;