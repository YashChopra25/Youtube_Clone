import React from "react";
import moment from "moment/moment";
const VideoLength = ({ time }) => {
  const videoLengthInSeconds = moment()
    .startOf("day")
    .second(time)
    .format("H:mm:ss");
  return (
    <>
      <div className="absolute bottom-2 right-2 bg-black py-1 px-2 text-white text-xs rounded-md z-40">
        {videoLengthInSeconds}
      </div>
    </>
  );
};

export default VideoLength;
