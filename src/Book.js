import React from "react";

const Book = ({ id, imgSrc, title, author, rankingIndex }) => {
  // console.log(props);
  return (
    <article className="book">
      <div className="bookInnerDiv">
        <div id="rankingDiv">as{rankingIndex + 1}</div>
        <img src={imgSrc} alt="Image Placeholder" />
        <h2 className="titles">{title}</h2>
        <h4 className="authors">{author}</h4>
      </div>
    </article>
  );
};

export default Book;
