import React, { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { getBooks } from "../Redux/action";
import { BookList } from "../Components/BookList";
import { FilterSort } from "../Components/FilterSort";
// import { useSearchParams } from "react-router-dom";

export const Books = () => {
  return (
    <>
      <BookList />
      <FilterSort />
    </>
  );
};
