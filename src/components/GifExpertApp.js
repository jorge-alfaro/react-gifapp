import React, { useState } from "react";
import { AddCategory } from "./AddCategory";
import GifGrid from "./GifGrid";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(["Nisekoi"]);

  return (
    <>
      <div className="block-title">
        <h2>Search GIFs</h2>
        {/* <img src="/assets/h.png" alt="media" className="img-top" /> */}
      </div>
      <div className="content">
        <AddCategory setCategories={setCategories} />
        <hr />

        <ol>
          {categories.map((category) => (
            <GifGrid key={category} category={category} />
          ))}
        </ol>
      </div>
    </>
  );
};
