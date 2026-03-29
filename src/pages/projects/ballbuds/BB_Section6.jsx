const BB_Section6 = () => {
  return (
    <div className="h-[70vh] md:h-screen flex flex-col justify-center items-center w-full text-black bg-white">
      <h2 className="text-[clamp(2rem,4vw,6rem)] mb-8 uppercase font-black tracking-tighter">
        Salute to haters
      </h2>

      <div className="w-full md:w-[60vw] px-4">
        {/* Swapped Image for Video */}
        <video
          src="/assets/projects/ballbuds/salute_to_haters.webm"
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-auto"
        />
      </div>
    </div>
  );
};

export default BB_Section6;
