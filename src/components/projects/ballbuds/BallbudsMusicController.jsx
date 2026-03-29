"use client";
import { GoMute, GoUnmute } from "react-icons/go";

import useMusicControlStore from "@/store/useMusicControlStore";

const BallbudsMusicController = () => {
  const { isMuted, toggleMuteUnmute } = useMusicControlStore();

  return (
    <>
      <button onClick={toggleMuteUnmute}>
        {isMuted ? <GoMute size={"2rem"} /> : <GoUnmute size={"2rem"} />}
      </button>
    </>
  );
};

export default BallbudsMusicController;
