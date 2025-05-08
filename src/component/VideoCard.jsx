import React from "react";

const VideoCard = ({ videoList }) => {
    if (!videoList || !videoList.snippet || !videoList.statistics) {
        return null; // or show a loader / fallback UI
    }
    const { snippet, statistics } = videoList;
    const { channelTitle, title, thumbnails } = snippet;

    return (
        // <div className="p-2 m-2 w-74 shadow">
        //     <img className="rounded-lg" alt="image" src={thumbnails.medium.url}></img>
        //     <ul>
        //         <li className="font-bold">{title}</li>
        //         <li>{channelTitle}</li>
        //         <li>{statistics.viewCount}</li>
        //     </ul>
        // </div>

        <div className="p-2 m-2 w-78 cursor-pointer transition-transform duration-200 ease-in-out">
            <img
                className="rounded-xl w-full object-cover"
                alt="thumbnail"
                src={thumbnails.medium.url}
            />
            <div className="mt-2">
                <p className="text-sm font-semibold text-black line-clamp-2">
                    {title}
                </p>
                <p className="text-xs text-gray-600">{channelTitle}</p>
                <p className="text-xs text-gray-600">
                    {Number(statistics.viewCount).toLocaleString()} views
                </p>
            </div>
        </div>
    );
};

export default VideoCard;
