import React from "react";
import { GoMute, GoUnmute } from "react-icons/go";

import useMusicControlStore from "@/store/useMusicControlStore";

const BallbudsMusicController = ({ isDesktop }) => {
  const { isMuted, toggleMuteUnmute } = useMusicControlStore();

  return (
    <>
      <button onClick={toggleMuteUnmute}>
        {isMuted ? (
          <GoMute size={isDesktop ? "3rem" : "2rem"} />
        ) : (
          <GoUnmute size={isDesktop ? "3rem" : "2rem"} />
        )}
      </button>
    </>
  );
};

export default BallbudsMusicController;
