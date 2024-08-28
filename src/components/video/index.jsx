import React from "react";

function Video(props) {
  return (
    <div className="w-full">
      <div className="relative pt-[56.25%] mx-auto" style={{ maxWidth: "90%" }}>
        <iframe
          src="https://www.youtube.com/embed/fa6K86yxHPs?si=9ZZkRh0DtrW98ZlW"
          className="absolute top-0 left-0 w-full h-full"
          allowFullScreen
          title="YouTube Video"
        ></iframe>
      </div>
    </div>
  );
}

export default Video;
