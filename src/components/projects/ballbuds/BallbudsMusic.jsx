"use client";
import { useRef, useEffect } from "react";
import useMusicControlStore from "@/store/useMusicControlStore";

const BallbudsMusic = ({ musicUrl, musicType }) => {
  const musicRef = useRef(null);
  const { isMuted, setMusicState, experienceStarted } = useMusicControlStore();

  // On mount: start muted
  useEffect(() => {
    const music = musicRef.current;
    if ((!music, !experienceStarted)) return;
    music.volume = 0.2;

    // initial play
    music.muted = false;
    music.play().catch(() => {
      console.log("Audio autoplay blocked!");
    });
    setMusicState(false);
  }, [setMusicState, experienceStarted]);

  // Sync mute state with store
  useEffect(() => {
    const music = musicRef.current;
    if (!music) return;
    music.muted = isMuted;
  }, [isMuted]);

  return (
    <>
      {musicUrl && (
        <audio loop ref={musicRef}>
          <source src={musicUrl} type={musicType} />
        </audio>
      )}
    </>
  );
};

export default BallbudsMusic;
