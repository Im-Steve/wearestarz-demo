import './showcase.css';

import React, { useState } from 'react';

import likeIcon from '../../assets/icons/like-green.svg';
import linkIcon from '../../assets/icons/link-gold.svg';
import xIcon from '../../assets/icons/x-red.svg';
import likesList from '../../contents/likes';

function Showcase() {
  const [currentCard, setCurrentCard] = useState(0);
  const [onLike, setOnLike] = useState(null);
  const [onChange, setOnChange] = useState(false);
  const list = likesList.slice();

  function changeCard(like) {
    if (!onChange) {
      setOnChange(true);
      setOnLike(like);
      setTimeout(() => {
        setOnChange(false);
        setCurrentCard(currentCard + 1);
      }, 800);
    }
  }

  function renderOneCard(card, inShow) {
    return (
      <div className={`showcase-card ${onChange && inShow && onLike && 'showcase-animation-like'} ${onChange && inShow && !onLike && 'showcase-animation-dislike'}`} key={card.author}>
        <div>
          <p className="showcase-author">
            <img src={card.avatar} className="showcase-author-image" />
            {card.author}
          </p>

          {card.type === 'video youtube' && (
            <div className="showcase-visual">
              <iframe
                title="YouTube video player"
                src={`https://www.youtube.com/embed/${card.youtubeVideoId}`}
                width="100%"
                height="100%"
                frameBorder="0"
                allowFullScreen
              />
            </div>
          )}

          {(card.type === 'book' || card.type === 'image') && (
            <div className="showcase-visual">
              <a href={card.image} target="_blank" rel="noreferrer">
                <img src={card.image} className="showcase-image" />
              </a>
            </div>
          )}

          <p className="showcase-title">{card.title}</p>
          <p className="showcase-description">{card.description}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="showcase">
      {currentCard <= list.length - 2 && renderOneCard(list[currentCard + 1], false)}
      {currentCard <= list.length - 1 && renderOneCard(list[currentCard], true)}

      <div className="showcase-buttons">
        <div className="showcase-one-button showcase-x" onClick={() => changeCard(false)}>
          <img src={xIcon} />
        </div>
        {list[currentCard] && (
          <a href={list[currentCard].link} target="_blank" rel="noreferrer">
            <div className="showcase-one-button showcase-link">
              <img src={linkIcon} />
            </div>
          </a>
        )}
        <div className="showcase-one-button showcase-like" onClick={() => changeCard(true)}>
          <img src={likeIcon} />
        </div>
      </div>
    </div>
  );
}

export default Showcase;
