import React, { useEffect } from "react";
import { BookCard } from "./BookCard";
import { Link, useLocation, useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getBooks } from "../Redux/App/action";

export const BookList = () => {
  const [searchParams] = useSearchParams();
  const dispatch = useDispatch();
  const location = useLocation();
  const books = useSelector((state) => state.AppReducer.books);
  useEffect(() => {
    //const urlCategory = searchParams.get("category");

    if (books?.length === 0 || location.search) {
      const sortBy = searchParams.get("sortBy");
      const getParams = {
        params: {
          category: searchParams.getAll("category"),
          _sort: sortBy && "release_year",
          _order: sortBy,
        },
      };
      dispatch(getBooks(getParams));
    }
  }, [location.search]);
  console.log(books);
  return (
    <div>
      <h1>Todos App</h1>
      {books?.map((e) => (
        <div key={e.id}>
          <Link to={`/books/${e.id}`}>
            <BookCard data={e} />
          </Link>
        </div>
      ))}
    </div>
  );
};
