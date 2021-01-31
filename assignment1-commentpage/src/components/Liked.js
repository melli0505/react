import React, { useEffect, useState } from "react";
import { MdFavorite, MdFavoriteBorder, MdInsertComment } from "react-icons/md";
import "./Liked.scss";
import { Route, Link, Switch, BrowserRouter } from "react-router-dom";
import CommentInsert from "./CommentInsert";
import CommentList from "./CommentListItem";

const Liked = ({ onInsert, onRemove, comments }) => {
  // let { liked }  = like;
  const [like, setLike] = useState(true);

  const onClick = () => {
    if (like) {
      setLike(false);
    } else {
      setLike(true);
    }
  };

  return (
    <div>
      <div className="like">
        <div className="heart">
          {like ? (
            <div className="liked" onClick={onClick}>
              <MdFavorite />
            </div>
          ) : (
            <div className="unliked" onClick={onClick}>
              <MdFavoriteBorder />
            </div>
          )}
          <CommentInsert onInsert={onInsert} />
        </div>
      </div>
    </div>
  );
};

export default Liked;
