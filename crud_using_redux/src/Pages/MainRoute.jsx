import React from "react";
import { Routes, Route } from "react-router-dom";
import { Books } from "./Books";
import { SingleBook } from "./SingleBook";
import { EditBook } from "./EditBook";
import { Admin } from "./Admin";
import { RequireAuth } from "../Components/RequireAuth";
export const MainRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<Books />} />
      <Route path="/books/:id" element={<SingleBook />} />
      <Route
        path="/books/:id/edit"
        element={
          <RequireAuth>
            <EditBook />
          </RequireAuth>
        }
      />
      <Route path="/admin" element={<Admin />} />
      <Route path="*" element={<h1>Page not found</h1>} />
    </Routes>
  );
};
