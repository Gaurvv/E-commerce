import React, { useRef } from "react";

function Home() {
  const videoRef = useRef(null);

  return (
    <div className="relative flex flex-col md:flex-row h-[85vh] mx-5 mt-5 rounded-3xl shadow-2xl overflow-hidden">
      <video
        ref={videoRef}
        className="w-full h-full object-cover rounded-3xl"
        src="video.mp4"
        autoPlay
        loop={true} // The video will now loop continuously without any custom logic.
        muted
        playsInline
      />

      {/* Semi-transparent overlay for better text readability */}
      <div className="absolute inset-0 bg-gray-900/40 rounded-3xl"></div>

      <div className="absolute inset-0 flex flex-col items-start justify-center px-6 md:px-16 space-y-5">
        {/* Main heading with 90% opacity and white text for contrast */}
        <h1 className="font-serif text-4xl md:text-6xl text-white/90 uppercase drop-shadow-lg">
          Pokhara's Best food
        </h1>

        {/* Paragraph text with 80% opacity and white text for contrast */}
        <p className="font-sans text-white/80 text-base md:text-lg max-w-xl drop-shadow-md">
          Welcome to Flavor Junction — where every bite hits different! Fresh, tasty dishes from all around the world, made with love and the best ingredients. Come eat, chill, repeat!
        </p>

        {/* Button with reduced background and text opacity */}
        <button className="bg-gray-900/70 hover:bg-gray-900 text-white/90 px-8 py-3 rounded-lg font-sans font-semibold transition shadow-lg">
          Order Now
        </button>

        {/* Discount tag with reduced background and text opacity */}
        <p className="bg-gray-900/70 text-white/90 px-5 py-1 rounded-lg font-sans text-sm md:text-base shadow-md">
          Get 20% discount every weekend
        </p>
      </div>
    </div>
  );
}

export default Home;
