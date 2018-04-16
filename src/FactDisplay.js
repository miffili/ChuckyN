import React from "react";
import PropTypes from "prop-types";
import "./App.css";

const FactDisplay = (props) => {
  console.log(props);
  const tweetHref = "https://twitter.com/intent/tweet?text=";
  return (
    <div className="factDisplay">
      {props.result.map((el) =>
        <div className="fact" key={`${el.id}`}>
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

FactDisplay.propTypes = {
  result: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default FactDisplay;
