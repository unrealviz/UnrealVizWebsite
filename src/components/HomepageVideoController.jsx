import React from "react";
import { IoPlayCircleOutline as PlayButton } from "react-icons/io5";
import { IoPauseCircleOutline as PauseButton } from "react-icons/io5";
import { GoMute as UnmuteButton } from "react-icons/go";
import { GoUnmute as MuteButton } from "react-icons/go";

import useVideoControlStore from "@/store/useVideoControlStore";

const HomepageVideoController = ({ isDesktop }) => {
  const { isPaused, isMuted, togglePlayPause, toggleMuteUnmute } =
    useVideoControlStore();

  return (
    <>
      <button onClick={togglePlayPause}>
        {isPaused ? (
          <PlayButton size={`${isDesktop ? "3rem" : "2rem"}`} />
        ) : (
          <PauseButton size={`${isDesktop ? "3rem" : "2rem"}`} />
        )}
      </button>
      <button onClick={toggleMuteUnmute}>
        {isMuted ? (
          <UnmuteButton size={`${isDesktop ? "3rem" : "2rem"}`} />
        ) : (
          <MuteButton size={`${isDesktop ? "3rem" : "2rem"}`} />
        )}
      </button>
    </>
  );
};

export default HomepageVideoController;
