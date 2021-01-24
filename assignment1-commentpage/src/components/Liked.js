import React, { useEffect, useState } from 'react';
import { MdFavorite , MdFavoriteBorder } from 'react-icons/md';
import './Liked.scss';


const Liked = () => {
    // let { liked }  = like;
    const [like, setLike] = useState(true);

    const onClick = () => {
        if(like){
            setLike(false);
        }
        else{
            setLike(true);
        }
    };

    return(
        <div className="like">
            <div className="heart" onClick={onClick}>
                {like ? 
                    <div className="liked"><MdFavorite/></div> : <MdFavoriteBorder />}
            </div>
        </div>
    );
};

export default Liked;