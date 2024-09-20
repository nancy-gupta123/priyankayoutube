import React from "react";

const VideoCard = ({ info }) => {
  
  if (!info) {
    return null;
  }

  const { snippet, statistics } = info;

  if (!snippet || !statistics) {
    return null;
  }
  const { channelTitle, title, thumbnails } = snippet;

  return (
    <div className="w-full p-2 m-2 shadow-lg h-96 sm:w-72 md:w-80 lg:w-96">
      <img className="w-full rounded-lg" alt="video" src={thumbnails.medium.url} />
      <ul className="mt-2">
        <li className="py-2 text-sm font-bold sm:text-base md:text-lg">{title}</li>
        <li className="text-xs sm:text-sm md:text-base">{channelTitle}</li>
        <li className="text-xs sm:text-sm md:text-base">{statistics.viewCount} views</li>
      </ul>
    </div>
  );
};

export const AdVideoCard=({info})=>{
  return (
    <div className="p-1 m-1 border border-red-900 ">
      <VideoCard info={info}/>
    </div>
  )
}

export default VideoCard;
