import React from 'react';
import CommentListItem from './CommentListItem';

const CommentList = ({ comments, onRemove }) =>{
    console.log(comments);
    return(
        <div style={{marginBottom: '5rem'}}>
            {comments.map(comment => (
                <CommentListItem comment={comment} key={comment.id} onRemove={onRemove} />
            ))}
        </div>
    );
}

export default CommentList;