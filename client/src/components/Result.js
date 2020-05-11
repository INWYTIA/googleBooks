import React from "react";
import Button from "./Button";

function Result(props) {

  let book = {
    title: props.item.volumeInfo.title,
    authors: props.item.volumeInfo.authors,
    description: props.item.volumeInfo.description,
    image: props.item.volumeInfo.imageLinks.thumbnail,
    link: props.item.volumeInfo.canonicalVolumeLink
  }

  let alist;

  book.authors.map(author => alist += `${author}, `);

  return (
    <div className="card">
      <img src={book.image} className="card-img-top" alt={book.title} />
      <div className="card-body">
        <h5 className="card-title">{book.title}</h5>
        <p className="card-text">Author: {alist}</p>
        <p className="card-text">{book.description}</p>
        <Button link={book.link} />
        <Button />
      </div>
    </div>
  );
}

export default Result;
