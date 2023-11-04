import React from "react";
import { AppContent } from "./Context/ContextApi";
import {  Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import Feed from "./Components/Feed";
import SearchResult from "./Components/SearchResult";
import VideoDetails from "./Components/VideoDetails";

const App = () => {
  return (
    <>
      <AppContent>
          <div className="flex flex-col h-full">
            <Header />
            <Routes>
              <Route exact path="/" element={<Feed />} />
              <Route exact path="/searchResult/:seatchQuery" element={<SearchResult />}/>
              <Route exact path="/video/:id" element={<VideoDetails />} />
            </Routes>
          </div>
      </AppContent>
    </>
  );
};

export default App;
