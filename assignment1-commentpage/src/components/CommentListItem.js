import React from "react";
import { MdPersonOutline, MdDelete } from "react-icons/md";
import "./CommentListItem.scss";

const CommentListItem = ({ comment, onRemove }) => {
  console.log(comment);
  const { id, text } = comment;
  return (
    // <div className="around">
      <div className="CommentListItem">
        <div className="icons">
          <div className="person">
            <MdPersonOutline />
          </div>
          <div className="text">{text}</div>
          <div className="remove" onClick={() => onRemove(id)}>
            <MdDelete />
          </div>
        </div>
      </div>
    // </div>
  );
};
export default React.memo(CommentListItem);
