import React, { Suspense } from "react";
import Loading from "../Loading/Loading";
import classes from "./Video.module.css";

const Video = ({ description, src, title }) => {
  return (
    <div className={classes["video-wrapper"]}>
      <div className={classes.video}>
        <p>{description}</p>
        <iframe
          width="400"
          height="250"
          src={src}
          title={title}
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          isLoading={false}
        ></iframe>
      </div>
    </div>
  );
};

export default Video;
