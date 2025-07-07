import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';

const About = () => {
  const imgRef = useRef(null);
  const imgRef2 = useRef(null);
  const imgRef3 = useRef(null);
  const imgRef4 = useRef(null);
  const textRef = useRef(null);
  const splashRef = useRef(null);

  useEffect(() => {
    const animateImage = (element) => {
      gsap.to(element, {
        y: () => gsap.utils.random(-18, 18),
        duration: 2.5,
        ease: 'sine.inOut',
        repeat: -1,
        yoyo: true,
        delay: gsap.utils.random(0, 0.5),
      });
    };
const animateText = (element) => {
      const textContent = element.innerText;
      element.innerHTML = textContent
        .split('')
        .map((char) => `<span class="inline-block">${char === ' ' ? '&nbsp;' : char}</span>`)
        .join('');

      gsap.from(element.querySelectorAll('span'), {
        opacity: 0,
        duration: 0.05,
        stagger: 0.03,
        ease: 'power1.in',
        delay: 0.5,
      });
    };

    const animateSplash = (element) => {
      gsap.to(element, {
        scale: 1.05,
        opacity: 0.5,
        duration: 3,
        ease: 'power1.inOut',
        repeat: -1,
        yoyo: true,
      });
    };

    [imgRef.current, imgRef2.current, imgRef3.current, imgRef4.current].forEach(animateImage);
    animateText(textRef.current);
    animateSplash(splashRef.current);
  }, []);

  return (
    <div className="relative min-h-[80%] bg-gradient-to-t from-amber-50 to-blue-50 flex flex-col items-center justify-center p-6 sm:p-12 overflow-hidden">
      <div ref={splashRef} className="absolute inset-0 w-full h-full opacity-20 z-0">
        <img
          src="splash1.png"
          alt="Background Splash"
          className="object-cover w-full h-full"
        />
      </div>

      <div className="relative z-10 max-w-5xl w-full bg-white/20 backdrop-blur-lg rounded-2xl shadow-2xl p-8 sm:p-12">
        <h1 className="text-3xl sm:text-5xl font-extrabold text-center text-amber-600 mb-8">
          About Foodie Delight
        </h1>

        <div ref={textRef} className="text-gray-800 text-base text-lg  text-center">
          <p>
            Welcome to <span className="font-bold text-amber-600">Foodie Delight</span>, your go-to destination for
            discovering mouth-watering, easy-to-make recipes. We believe cooking should be a joyful, creative, and
            accessible experience for everyone — from kitchen novices to culinary experts.
            <br /><br />
            Our mission is to spark inspiration worldwide, encouraging home-cooked meals with fresh ingredients and simple
            techniques. Whether you’re craving quick breakfasts, comforting dinners like Spicy Ramen or Cheesy Lasagna, or
            restaurant-style dishes like Tandoori Paneer and fresh Sushi Rolls, we’ve got you covered for every mood and
            occasion.
            <br /><br />
            Join our vibrant community of food lovers, explore bold flavors, and turn every meal into a memorable adventure.
            Let’s cook up some magic together!
          </p>
        </div>
      </div>

      <div ref={imgRef} className="absolute top-10 left-10 sm:left-20 z-10">
        <img
          className="w-19 h-20 sm:w-24 sm:h-24 rounded-full shadow-lg hover:scale-120 transition-transform duration-300"
          src="Ramen.jpg"
          alt="Spicy Ramen"
        />
      </div>
      <div ref={imgRef2} className="absolute top-10 right-10 sm:right-20 z-10">
        <img
          className="w-19 h-19 sm:w-24 sm:h-24 rounded-full shadow-lg hover:scale-120 transition-transform duration-300"
          src="Cheesy.jpg"
          alt="Cheesy Lasagna"
        />
      </div>
      <div ref={imgRef3} className="absolute bottom-10 left-10 sm:left-20 z-10">
        <img
          className="w-19 h-19 sm:w-24 sm:h-24 rounded-full shadow-lg hover:scale-120 transition-transform duration-300"
          src="paneer.jpg"
          alt="Tandoori Paneer"
        />
      </div>
      <div ref={imgRef4} className="absolute bottom-10 right-15 sm:right-20 z-10">
        <img
          className="w-19 h-19 sm:w-24 sm:h-24 rounded-full shadow-lg hover:scale-120 transition-transform duration-300 object-cover"
          src="Sushie.jpg"
          alt="Sushi Roll"
        />
      </div>
    </div>
  );
};

export default About;