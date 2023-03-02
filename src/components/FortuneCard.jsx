import React from 'react';

const FortuneCard = ({phraseData}) => {
    return (
        <>
                <h1>GALLETAS DE LA FORTUNA</h1>
            <div className='fortune-card'>
                <h2>{ phraseData?.phrase}</h2>
                <h3>{ phraseData?.author}</h3>
            </div>
        </>
    );
};

export default FortuneCard;