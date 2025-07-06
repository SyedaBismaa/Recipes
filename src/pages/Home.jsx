

const Home = () => {
  return (
    <div className='flex gap-5  '>
      <div className="left w-1/2  h-[80vh] flex flex-col justify-center items -center ">
        <h1 className='text-5xl text-black font-medium pl-[2rem] pt-2  '>
          We Serve <br /> Delicious <span className='text-yellow-500'>Recipes</span>
        </h1>
        <p className='text-black pb-[5rem] p-[2rem]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam odio odit ad asperiores qui iure </p>
        <button className='  w-[15%] px-[0.5rem] rounded text-gray-800 font-bold bg-yellow-500  absolute left-[5%] bottom-[25%]'>Explore Now </button>
      </div>


      <div className="right  w-1/2 h-[80vh] pl-[8%] ">

        <video
          className="h-full w-full object-contain"
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