import React, { createContext,useEffect, useState } from "react";

import { fetchDataFromApi } from "../Utils/api";
export const Context = createContext();

export const AppContent = (props) => {
  const [loading, setLoading] = useState(false);
  const [SearchResults, setSearchResult] = useState([]);
  const [SelectCategories, setSelectCategories] = useState("New");
  const [mobileMenu, setmobileMenu] = useState(false);
  useEffect(() => {
    fetchSelectedCategoryData(SelectCategories)
  }, [SelectCategories]);
  const fetchSelectedCategoryData=(query)=>{
        setLoading(true);
        fetchDataFromApi(`search/?q=${query}`).then(({contents})=>{
             setSearchResult(contents)
            setLoading(false);
        }).catch((err)=>{
         console.log(err);

        })
  }
  return (
    <Context.Provider
      value={{
        loading,
        setLoading,
        SearchResults,
        setSearchResult,
        SelectCategories,
        setSelectCategories,
        mobileMenu,
        setmobileMenu,
      }}
    >
      {props.children}
    </Context.Provider>
  );
};
