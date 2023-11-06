import React, { useContext, useEffect } from "react";

import { Context } from "../Context/ContextApi";
import LeftNav from "./LeftNav";
import VideoCard from "./VideoCard";

const Feed = () => {
  const { loading, SearchResults } = useContext(Context);
  useEffect(() => {
    document.getElementById("root").classList.remove("custom-h");
  }, []);
  return (
    <div className="flex flex-row h-[calc(100%-56px)]">
      <LeftNav />
      <div className="grow w-[calc(100%-240px)] h-full overflow-y-auto bg-black ">
        <div className="grid grid-col-1 md:grid-col-2 lg:grid-cols-3 xl:grid-col-4 gap-4 p-5">
          {!loading &&
            SearchResults &&
            SearchResults?.map((item,index) => {
              if (item?.type !== "video") return false;
              return (
                <React.Fragment key={index}>
                <VideoCard key={item?.video?.VideoId} video={item?.video} />
                </React.Fragment>
                
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default Feed;
