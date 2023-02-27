import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { getBooks } from "../Redux/App/action";

export const SingleBook = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const books = useSelector((state) => state.AppReducer.books);
  const [curruntBook, setCurruntBook] = useState({});

  useEffect(() => {
    if (books.length === 0) {
      dispatch(getBooks());
    }
  }, [books.length, dispatch]);

  useEffect(() => {
    if (id) {
      const temp = books.find((book) => book.id == Number(id));
      temp && setCurruntBook(temp);
    }
  }, [books, id]);
  console.log(curruntBook);
  return (
    <div
      style={{
        border: "1px solid red",
      }}
    >
      <p>{curruntBook.book_name}</p>
      <p>{curruntBook.category}</p>
      <p>{curruntBook.release_year}</p>
      <img
        width="300px"
        src="https://media.istockphoto.com/id/1358009652/photo/man-reading-at-coffee-shop.jpg?s=612x612&w=is&k=20&c=RMwwg1tTDZsFGnOfbl91LsHwZa97SfBGP0scm6v4sdw="
        alt="img"
      />
      <button>
        <Link to={`/books/${curruntBook.id}/edit`}>Edit</Link>
      </button>
    </div>
  );
};
