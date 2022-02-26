import React from "react";

import ChannelRow from "../ChannelRow/ChannelRow";

import "./SearchPage.css";

import { TuneOutlined } from "@mui/icons-material";

const SearchPage = () => {
  return (
    <div className="searchPage">
      <div className="searchPage__filter">
        <TuneOutlined />
        <h2>FILTER</h2>
      </div>
      <hr />
      <ChannelRow
        image="https://yt3.ggpht.com/avdsle4t42vMMUPALsh5wi5yD8CE2-ELOhwVjjd08OL1hUBobYaR1WhwACXjAdXe-VoESDwZ=s88-c-k-c0x00ffffff-no-rj"
        channel="ForrestKnight"
        verified
        subs="543K"
        noOfVideos={243}
        description="Just evolved from professional software engineer into hobbyist coder. Livin' the dream."
      />
    </div>
  );
};

export default SearchPage;
