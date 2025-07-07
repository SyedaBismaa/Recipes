import { useEffect, useRef } from "react";
import gsap from "gsap";

const Home = () => {
  const imageRef1 = useRef(null);
  const imageRef2 = useRef(null);
  const imageRef3 = useRef(null);
  const imageRef4 = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const animate = (element) => {
      gsap.to(element, {
        y: -20,
        duration: 1.5,
        yoyo: true,
        repeat: -1,
        ease: "power1.inOut",
      });
    };

    animate(imageRef1.current);
    animate(imageRef2.current);
    animate(imageRef3.current);
    animate(imageRef4.current);
  }, []);

  useEffect(() => {
    gsap.from(textRef.current, {
      x: -200,
      opacity: 0,
      duration: 2,
      ease: "power3.out",
    });
  }, []);

  return (
    <div className="flex flex-col md:flex-row gap-5 relative">
      {/* Left */}
      <div className="w-full md:w-1/2 relative flex flex-col justify-center items-center py-10 px-4 md:px-8">
        {/* Floating Images */}
        <img ref={imageRef1} className="w-20 md:w-36 absolute top-[10%] left-[45%]" src="/chili.png" alt="" />
        <img ref={imageRef2} className="w-20 md:w-36 absolute bottom-[7%] left-[62%]" src="/Spieces.png" alt="" />
        <img ref={imageRef3} className="w-20 md:w-36 absolute top-[20%] left-[5%]" src="/Tomatos.png" alt="" />
        <img ref={imageRef4} className="w-28 md:w-48 absolute bottom-[12%] left-[0%]" src="/Splash.png" alt="" />

        {/* Text */}
        <h1 ref={textRef} className="text-3xl md:text-6xl text-black font-medium text-center md:text-left mt-8">
          We Serve <br /> Delicious <span className="text-yellow-500">Recipes</span>
        </h1>
        <p className="text-black text-base md:text-lg text-center md:text-left mt-4 px-2 md:px-0">
          Discover a variety of handpicked, mouth-watering recipes designed to make your meals exciting and memorable. From quick breakfasts to hearty dinners, we've got you covered!
        </p>

        <button
          className="hover:bg-yellow-300 active:scale-95 w-40 md:w-48 px-3 py-2 mt-6 rounded text-gray-800 font-bold transition"
        >
          Explore Now
        </button>
      </div>

      {/* Right */}
      <div className="w-full md:w-1/2 h-[40vh] md:h-[80vh] px-4 md:px-0">
        <video
          className="h-full w-full object-cover rounded-lg shadow-md"
          src="/hero-vid.mp4"
          autoPlay
          muted
          loop
          playsInline
        ></video>
      </div>
    </div>
  );
};

export default Home;
