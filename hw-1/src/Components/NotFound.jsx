import React from "react";
import "../scss/notFound.scss";
const NotFound = () => {
  return (
    <div className="mainArea_not_found">
      <h2 className="mainArea_not_found_title">Oops! Try again.</h2>
      <p className="mainArea_not_found_description">
        The Pokemon you`re looking for is a unicorn. It doesn`t exist is this
        list
      </p>
      <img
        className="mainArea_not_found_img"
        src="./assets/img/Pikachu.png"
        alt=""
      />
    </div>
  );
};

export default NotFound;
