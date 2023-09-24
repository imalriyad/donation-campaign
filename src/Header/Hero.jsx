const Hero = () => {
  return (
    <div>
      <div
        className=" hero h-[65vh] bg-center bg-cover"
        style={{
          backgroundImage: "url(https://i.ibb.co/mzh3f2C/herobg.png)",
        }}
      >
        <div className="hero-overlay bg-opacity-80 bg-[#ffffffd9]"></div>
        <div className="hero-content text-black text-center">
          <div className="w-sm">
            <h1 className="mb-10 md:text-5xl text-2xl font-bold">I Grow By Helping People In Need</h1>
            
          <div className="relative">
          <input type="text" placeholder="Search here...." className="input input-bordered focus:outline-none input-md w-full md:max-w-xl max-w-xs" />
          <button className="btn bg-[#FF444A] hover:bg-[#FF444A] absolute md:right-24 right-0 text-white">Search</button>
          </div>
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
