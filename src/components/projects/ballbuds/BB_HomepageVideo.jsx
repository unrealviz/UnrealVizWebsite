import * as motion from "motion/react-client";

const BB_HomepageVideo = ({ videoUrl, videoType }) => {
  return (
    <>
      {videoUrl && (
        <motion.video
          loop
          muted
          autoPlay
          playsInline
          className="relative h-full w-full object-cover"
        >
          <source src={videoUrl} type={videoType} />
        </motion.video>
      )}
    </>
  );
};

export default BB_HomepageVideo;
