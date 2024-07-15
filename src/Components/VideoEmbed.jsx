import React from "react";
import "./Style/Style.css";

const VideoEmbed = ({ videoUrl }) => {
  return (
    <div className="flex justify-center mt-8">
      <div className="w-full md:w-2/3 lg:w-1/2 custom-iframe-container">
        <iframe
          className="custom-iframe rounded-lg shadow-lg"
          src={videoUrl.replace("watch?v=", "embed/")}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default VideoEmbed;
