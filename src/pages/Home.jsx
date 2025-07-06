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
    <div className='flex gap-5  '>
      <div className="  left w-1/2  h-[80vh] flex flex-col justify-center items -center ">
        <img ref={imageRef1} className="w-[9rem] h-[9rem]  absolute top-30 left-[35%]" src="/chili.png" alt="" />
        <img ref={imageRef2} className="w-[9rem] h-[9rem]  absolute top-[80%] left-[32%]" src="/Spieces.png" alt="" />
        <img ref={imageRef3} className="w-[9rem] h-[9rem]  absolute top-30" src="/Tomatos.png" alt="" />
        <img ref={imageRef4} className="w-[12rem] h-[12rem]  absolute top-[61%] left-1" src="/Splash.png" alt="" />

        <h1 ref={textRef} className='text-6xl text-black font-medium pl-[2rem] pt-2  '>
          We Serve <br /> Delicious <span className='text-yellow-500'>Recipes</span>
        </h1>
        <p className='text-black pb-[5rem] p-[2rem]'>Discover a variety of handpicked, mouth-watering recipes designed to make your meals exciting and memorable. From quick breakfasts to hearty dinners, we've got you covered!
        </p>
        <button
          className=' hover:bg-yellow-300   active:scale-[0.97]
         w-[15%] px-1 py-1 rounded text-gray-800 font-bold 
           absolute left-[5%] bottom-[25%]'>Explore Now ➡️ </button>
      </div>


      <div className="right w-1/2 h-[80vh] pl-[8%] ">

        <video
          className="h-full w-full object-cover"
          src="/hero-vid.mp4"
          autoPlay
          muted
          loop
          playsInline
        ></video>
      </div>
    </div>
  )
}

export default Home