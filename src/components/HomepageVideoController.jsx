import { IoPlayCircleOutline as PlayButton } from "react-icons/io5";
import { IoPauseCircleOutline as PauseButton } from "react-icons/io5";
import { GoMute as UnmuteButton } from "react-icons/go";
import { GoUnmute as MuteButton } from "react-icons/go";

import useVideoControlStore from "@/store/useVideoControlStore";

const HomepageVideoController = () => {
  const { isPaused, isMuted, togglePlayPause, toggleMuteUnmute } =
    useVideoControlStore();

  return (
    <>
      <button onClick={togglePlayPause}>
        {isPaused ? (
          <PlayButton size={`2rem`} />
        ) : (
          <PauseButton size={`2rem`} />
        )}
      </button>
      <button onClick={toggleMuteUnmute}>
        {isMuted ? (
          <UnmuteButton size={`2rem`} />
        ) : (
          <MuteButton size={`2rem`} />
        )}
      </button>
    </>
  );
};

export default HomepageVideoController;
