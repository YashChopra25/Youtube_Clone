import React from "react";
import { abbreviateNumber } from "js-abbreviation-number";
import { Link } from "react-router-dom";
import { BsFillCheckCircleFill } from "react-icons/bs";

import VideoLength from "../shared/videoLength";

const SuggestionVideoCard = ({key,video}) => {
    return (
        <Link to={`/video/${video?.videoId}`}>
          <div className="flex mb-3 ">
            <div className="relative h-24 lg:20 xl:h-24 w-40 min-w-[168px] lg:w-32 lg:min-w-[128px] 
            xl:min-w-[168px] rounded-xl bg-slate-800">
              <img
                src={video?.thumbnails[0]?.url}
                alt=""
                className="h-full w-full object-cover"
              />
              {video?.lengthSeconds && <VideoLength time={video?.lengthSeconds} />}
            </div>
            <div className="flex flex-col ml-3 overflow-hidden">
                <span className="text-sm lg:text-xs xl:text-sm font-bold line-clamp-2 text-white">
                  {video.title}
                </span>
                <span className="text-[12px] lg:text-[10px] xl:text-[12px] font-semibold mt-2 text-white/[0.7] flex items-center">
                  {video?.author?.title} { video?.author?.badges[0]?.type==="VERIFIED_CHANNEL" && (
                    <BsFillCheckCircleFill className="text-white/[0.5] text-[12px] lg:text-[10px] xl:text-[12px] ml-1"/>
                  )}
                </span>
                <div className="flex text-[12px] lg:text-[10px] xl:text-[12px] font-semibold text-white/[0.7] truncate overflow-hidden">
                    <span>
                      { video?.stats?.views &&`${abbreviateNumber(video?.stats?.views,2)} views`}
                      { video?.stats?.viewers &&`${abbreviateNumber(video?.stats?.viewers,2)} views`}
                    </span>
                    <span className="flex text-[24px] leading-none font-bold text-white/[0.7] relative top-[-10px] mx-1">.</span>
                    <span className="truncate">{video?.publishedTimeText  || "Not Available"}</span>
                </div>
              </div>
          </div>
        </Link>
      );
};

 export default SuggestionVideoCard;
