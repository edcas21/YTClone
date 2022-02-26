import React from "react";

import ChannelRow from "../ChannelRow/ChannelRow";
import VideoRow from "../VideoRow/VideoRow";

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
      <hr />
      <VideoRow
        views="91K"
        subs="1.94M"
        description="This is my new 2022 Porsche Taycan Cross Turismo in Neptune Blue that received its first wash, drive, full detail, PPF, coating, ..."
        timestamp="12 hours ago"
        channel="AMMO NYC"
        title="First Wash & Drive 2022 Porsche Taycan Cross Turismo 1st in the USA! Full Detail and Coating"
        image="https://i.ytimg.com/an_webp/8EFqkm_68V4/mqdefault_6s.webp?du=3000&sqp=CL7m5ZAG&rs=AOn4CLDKqtpPsUsS_BH0GhJyoFuS-Fevyg"
      />
      <VideoRow
        views="91K"
        subs="1.94M"
        description="This is my new 2022 Porsche Taycan Cross Turismo in Neptune Blue that received its first wash, drive, full detail, PPF, coating, ..."
        timestamp="12 hours ago"
        channel="AMMO NYC"
        title="First Wash & Drive 2022 Porsche Taycan Cross Turismo 1st in the USA! Full Detail and Coating"
        image="https://i.ytimg.com/an_webp/8EFqkm_68V4/mqdefault_6s.webp?du=3000&sqp=CL7m5ZAG&rs=AOn4CLDKqtpPsUsS_BH0GhJyoFuS-Fevyg"
      />
      <VideoRow
        views="91K"
        subs="1.94M"
        description="This is my new 2022 Porsche Taycan Cross Turismo in Neptune Blue that received its first wash, drive, full detail, PPF, coating, ..."
        timestamp="12 hours ago"
        channel="AMMO NYC"
        title="First Wash & Drive 2022 Porsche Taycan Cross Turismo 1st in the USA! Full Detail and Coating"
        image="https://i.ytimg.com/an_webp/8EFqkm_68V4/mqdefault_6s.webp?du=3000&sqp=CL7m5ZAG&rs=AOn4CLDKqtpPsUsS_BH0GhJyoFuS-Fevyg"
      />
      <VideoRow
        views="91K"
        subs="1.94M"
        description="This is my new 2022 Porsche Taycan Cross Turismo in Neptune Blue that received its first wash, drive, full detail, PPF, coating, ..."
        timestamp="12 hours ago"
        channel="AMMO NYC"
        title="First Wash & Drive 2022 Porsche Taycan Cross Turismo 1st in the USA! Full Detail and Coating"
        image="https://i.ytimg.com/an_webp/8EFqkm_68V4/mqdefault_6s.webp?du=3000&sqp=CL7m5ZAG&rs=AOn4CLDKqtpPsUsS_BH0GhJyoFuS-Fevyg"
      />
    </div>
  );
};

export default SearchPage;
