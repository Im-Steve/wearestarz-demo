import './likes.css';

import React from 'react';

import likesList from '../../contents/likes';

function Likes() {
  const list = likesList.slice();

  function renderOneLike(like) {
    return (
      <a href={like.link} target="_blank" rel="noreferrer" key={like.author}>
        <div className="one-like">
          <div className="like-content">
            <img src={like.image} className="like-image" />
            <div className="like-text">
              <p className="like-title">{like.title}</p>
              <p className="like-author">
                <img src={like.avatar} className="like-author-image" />
                {like.author}
              </p>
            </div>
          </div>
        </div>
      </a>
    );
  }

  return (
    <div className="likes">
      {list.map((like) => renderOneLike(like))}
    </div>
  );
}

export default Likes;
