const Hero = () => {
  return (
    <div>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: "url(https://i.ibb.co.com/3kYtv41/banner.png)",
        }}
      >
        <div className="hero-overlay"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="">
            <h1 className="mb-5 md:text-6xl text-3xl font-bold">
              Discover an exceptional cooking  class tailored for you!
            </h1>
            <p className="mb-6 md:text-lg">
            "Explore a World of Flavors with Mouthwatering Recipes, Expert Cooking Tips, and Time-Saving Kitchen Hacks to Make Every Meal Extraordinary"
            </p>
            <div className="md:gap-6 gap-3 flex justify-center">
              <button className="btn btn-success text-black font-semibold rounded-full md:text-xl md:px-8 md:py-6 ">Explore Now</button>
              <button className="btn btn-outline btn-success font-semibold text-white rounded-full md:text-xl md:py-6 border-amber-50 md:px-8">Our Feedback</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
