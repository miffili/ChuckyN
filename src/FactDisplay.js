import React from 'react';
import './App.css';

const FactDisplay = (props) => {
  const tweetHref = "https://twitter.com/intent/tweet?text=";
  return (
    <div className="factDisplay">
      {props.result.map((el, i) =>
        <div className="fact" key={`${el.id}_${i}`}>
          <p>{el.joke}</p>
          <a
            className="tweetButton"
            href={`${tweetHref}${encodeURIComponent(el.joke)}`}
            title="Tweet Fact"
          >
            <i className="fab fa-twitter"></i>
          </a>
        </div>
      )}
    </div>
  );
}

export default FactDisplay;
