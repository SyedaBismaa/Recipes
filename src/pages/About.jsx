import { useEffect, useRef } from "react";
import gsap from "gsap";


const About = () => {
   
  const imgRef = useRef(null)
  const imgRef2 = useRef(null)
  const imgRef3 = useRef(null)
  const imgRef4 = useRef(null)

  
  useEffect(() => {
    const animate = (element) => {
      gsap.to(element, {
  rotation: 360,
  duration: 2,
  delay: 1,
  repeat: -1,
  
      });

    };

    animate(imgRef.current);
    animate(imgRef2.current);
    animate(imgRef3.current);
    animate(imgRef4.current);

   


  }, []);
    

return (
    <div className="bg-white/30  backdrop-blur-md flex flex-col items-center text-center p-8 max-h-screen rounded-lg shadow-md relative overflow-hidden">
      <h1 className="text-3xl md:text-4xl font-bold mb-6 text-blue-600 drop-shadow-sm z-10">About Us</h1>

      <div className="max-w-3xl text-gray-800 text-2xl z-10">
        <p>
          Welcome to <span className="font-semibold text-blue-600">Foodie Delight</span>, your number one destination for discovering
          mouth-watering and easy-to-make recipes. We believe that cooking should be fun, creative, and accessible to everyone —
          from beginners to seasoned chefs.
          <br /><br />
          Our mission is to inspire people around the world to cook delicious meals at home using fresh ingredients and simple
          methods. Whether you're craving quick breakfasts, hearty dinners like Spicy Ramen or Cheesy Lasagna, or restaurant-style
          showstoppers like Tandoori Paneer and fresh Sushi Rolls, we have something for every mood and occasion.
          <br /><br />
          Join our community of passionate food lovers, explore unique flavors, and make every meal an unforgettable adventure.
          Let’s create magic in the kitchen together!
        </p>
      </div>

      <div ref={imgRef} className="absolute top-[15%] left-[10%] transform rotate-6">
        <img
          className="w-24 h-24 md:w-32 md:h-32 object-cover rounded-full shadow-lg"
          src="Ramen.jpg"
          alt="Spicy Ramen"
        />
      </div>
      <div ref={imgRef2} className="absolute top-[25%] right-[15%] transform -rotate-4">
        <img
          className="w-24 h-24 md:w-32 md:h-32 object-cover rounded-full shadow-lg"
          src="Cheesy.jpg"
          alt="Cheesy Lasagna"
        />
      </div>
      <div ref={imgRef3} className="absolute bottom-[20%] left-[15%] transform rotate-8">
        <img
          className="w-24 h-24 md:w-32 md:h-32 object-cover rounded-full shadow-lg"
          src="paneer.jpg"
          alt="Tandoori Paneer"
        />
      </div>
      <div ref={imgRef4} className="absolute bottom-[15%] right-[10%] transform -rotate-6">
        <img
          className="w-24 h-24 md:w-32 md:h-32 object-cover rounded-full shadow-lg"
          src="Sushie.jpg"
          alt="Sushi Roll"
        />
      </div>
    </div>
  );

};

export default About;

