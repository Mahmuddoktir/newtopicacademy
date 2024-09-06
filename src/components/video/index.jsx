import React from "react";

function Video(props) {
  return (
    <div className=" ml-40 w-[70rem]">
      <div className="relative pt-[56.25%] mx-auto" style={{ maxWidth: "90%" }}>
        <iframe
          src="https://www.youtube.com/embed/zj355hKD3lY?si=iZDWqdOj4WYYYonq"
          className="absolute top-0 left-0 w-full h-full"
          allowFullScreen
          title="YouTube Video"
        ></iframe>
      </div>
    </div>
  );
}

export default Video;
