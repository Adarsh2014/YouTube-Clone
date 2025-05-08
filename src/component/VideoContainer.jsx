import React, { useEffect, useState } from "react";
import YOUTUBE_VIDEO_API from "../utils/Constant";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";

const VideoContainer = () => {
    const [videos, setvideos] = useState([]);
    useEffect(() => {
        getVideos();
    }, []);

    const getVideos = async () => {
        try {
            const data = await fetch(YOUTUBE_VIDEO_API);
            const json = await data.json();

            if (json?.items && Array.isArray(json.items)) {
                setvideos(json.items);
            } else {
                console.error("Invalid response format:", json);
                setvideos([]);
            }
        } catch (error) {
            console.error("Failed to fetch videos:", error);
            setvideos([]);
        }
    };
    return (
        <div className="flex flex-wrap">
            {videos.length > 0 ? (
                videos.map((video) => (
                    <Link key={video.id} to={"/watch?v=" + video.id}>
                        <VideoCard videoList={video} />
                    </Link>
                ))
            ) : (
                <p className="text-gray-500 p-4">Loading........</p>
            )}
        </div>
    );
};

export default VideoContainer;
