import React from "react";
import "./ChannelRow.css";
import { Avatar } from "@mui/material";

const ChannelRow = ({
  image,
  channel,
  verified,
  subs,
  noOfVideos,
  description,
}) => {
  return (
    <div className="channelRow">
        <Avatar className="channelRow__logo" alt={channel} src={image} />
        <div className="channelRow__text">
            <h4>{channel}</h4>
        </div>
    </div>
  );
};

export default ChannelRow;
