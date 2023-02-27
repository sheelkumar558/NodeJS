import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
//import { getBooks } from "../Redux/App/action";

export const FilterSort = () => {
  const dispatch = useDispatch();
  const [searchParams, setSearchParams] = useSearchParams();
  const urlCategory = searchParams.getAll("category");
  const urlSort = searchParams.getAll("sortBy");
  const [category, setcategory] = useState(urlCategory || []);
  const [sortBy, setSortBy] = useState(urlSort || "");
  const handleChange = (e) => {
    const option = e.target.value;
    console.log(option);
    let newCategory = [...category];
    if (category.includes(option)) {
      newCategory.splice(newCategory.indexOf(option), 1);
    } else {
      newCategory.push(option);
    }
    setcategory(newCategory);
  };
  const handleSort = (e) => {
    setSortBy(e.target.value);
  };
  useEffect(() => {
    if (category) {
      setSearchParams({ category: category });
      // dispatch(getBooks({ params: { category } }));
    }
  }, [category, dispatch, setSearchParams]);
  useEffect(() => {
    if (sortBy) {
      const params = {
        category: searchParams.getAll("category"),
        sortBy,
      };
      // const getParams = {
      //   params: {
      //     category: searchParams.getAll("category"),
      //     _sort: "release_year",
      //     _order: sortBy,
      //   },
      // };
      setSearchParams(params);
      // dispatch(getBooks(getParams));
    }
  }, [searchParams, dispatch, setSearchParams, sortBy]);

  return (
    <div>
      <h3>Filter</h3>
      <div>
        <div>
          <input
            type="checkbox"
            defaultChecked={category.includes("Novel")}
            value="Novel"
            onChange={handleChange}
          />
          <label>Novel</label>
        </div>
        <div>
          <input
            type="checkbox"
            defaultChecked={category.includes("function")}
            value="function"
            onChange={handleChange}
          />
          <label>function</label>
        </div>
      </div>
      <h3>Sort</h3>
      <div onChange={handleSort}>
        <input
          type="radio"
          value="asc"
          name="sortBy"
          defaultChecked={sortBy === "asc"}
        />{" "}
        Ascending
        <input
          type="radio"
          value="desc"
          name="sortBy"
          defaultChecked={sortBy === "desc"}
        />{" "}
        Descending
      </div>
    </div>
  );
};
