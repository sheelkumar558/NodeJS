import React from "react";

export const BookCard = ({ data }) => {
  return (
    <div
      style={{
        border: "1px solid red",
        margin: "auto",
        width: "300px",
      }}
    >
      <p>{data.book_name}</p>
      <p>{data.category}</p>
      <p>{data.release_year}</p>
      <img
        width="300px"
        src="https://media.istockphoto.com/id/1358009652/photo/man-reading-at-coffee-shop.jpg?s=612x612&w=is&k=20&c=RMwwg1tTDZsFGnOfbl91LsHwZa97SfBGP0scm6v4sdw="
        alt="img"
      />
    </div>
  );
};
