import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Book from "./Book.js";

import { books } from "./books";

function BookList() {
  return (
    <>
      <section className="bookList">
        {books.map((items, key) => {
          return <Book {...items} rankingIndex={key} key={key} />;
        })}
      </section>
    </>
  );
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<BookList />);

// function filteringMethod(id) {
//   const arrone = arr.filter((itemsInArr) => {
//     return itemsInArr.id == id;
//   });
//   console.log(arrone);
// }
// const Book = (props) => {
//   const { id, imgSrc, title, author } = props;
//   const anyFunc = () => {
//     filteringMethod(id);
//   };
//   return (
//     <article className="book">
//       <img src={"./images/" + imgSrc} alt="Image Placeholder" />
//       <h2 className="titles">{title}</h2>
//       <h4 className="authors">{author}</h4>
//       <button onClick={anyFunc}>Click ME</button>
//     </article>
//   );
// };

// const Filtering = () => {
//   return (
//     <>
//       <input type="text" onChange={filteringMethod} />
//     </>
//   );
// };
