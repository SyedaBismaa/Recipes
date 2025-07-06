import React from 'react'

const About = () => {
  return (
  <div className="bg-white/30 backdrop-blur-md flex flex-col items-center text-center py-12 px-6 md:px-12 max-h-screen rounded-lg shadow-md">
  <h1 className="text-3xl md:text-4xl font-bold mb-6 text-blue-600 drop-shadow-sm">About Us</h1>
  <p className="max-w-3xl text-gray-800 text-sm md:text-base leading-relaxed tracking-wide">
    Welcome to <span className="font-semibold text-blue-600">Foodie Delight</span>, your number one destination for discovering
    mouth-watering and easy-to-make recipes. We believe that cooking should be fun, creative, and accessible to everyone — 
    from beginners to seasoned chefs.
    <br /><br />
    Our mission is to inspire people around the world to cook delicious meals at home using fresh ingredients and simple
    methods. Whether you're craving quick breakfasts, hearty dinners, or decadent desserts, we have something for every mood
    and occasion.
    <br /><br />
    We’re more than just recipes — we’re a community of food lovers who celebrate the joy of cooking and sharing meals with
    loved ones. Thank you for being part of our journey. Let’s make cooking an adventure together!
  </p>
</div>

  );
};

export default About;

