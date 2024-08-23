import solar from "../assets/solar.jpg";

const Solarsystem = () => {
  return (
    <div>
      <div className="md:block hidden">
        <header className="fixed top-2 z-[20] mx-auto flex w-full items-center justify-between">
          <h3 className="p-3 text-custom-color font-bold">Cosmiccraft</h3>
          <div>
            <div className="mr-10">
              <a
                href="/index"
                className="no-underline p-3 justify-between font-semibold font-title text-white text-[18px]"
              >
                Home
              </a>
              <a
                href=""
                className="no-underline p-3 justify-between font-semibold font-title text-custom-color text-[22px]"
              >
                Solar System
              </a>
              <a
                href="/news"
                className="no-underline p-3 justify-between font-semibold font-title text-white text-[18px]"
              >
                Did you Know
              </a>
              <a
                href="/message"
                className="no-underline p-3 justify-between font-semibold font-title text-white text-[18px]"
              >
                Contact
              </a>
            </div>
          </div>
        </header>
      </div>
      <img src={solar} className="fixed object-cover h-screen w-full" alt="" />
      <div className="absolute top-0 w-full left-0">
        <div className="max-w-[800px] w-full h-full pl-10 m-auto justify-center items-center lg:items-start flex-col">
          <h3 className="font-title1 text-white pt-24 font-bold md:tracking-[1.6rem] tracking-[0.65rem] mb-4">
            The Solar System
          </h3>
        </div>
        <p className="md:text-[20px] mt-14 text-white font-title1 font-medium md:pl-20 pl-7 md:pr-[82px] pr-7">
          The Solar system, assemblage consisting of the Sun—an average star in
          the milky way galaxy and those bodies orbiting around it: 8 (formerly
          9) planets with more than 210 known planetary satellites (moons).
          Located at the center of the solar system and influencing the motion
          of all the other bodies through its gravitational force is the Sun,
          which in itself contains more than 99 percent of the mass of the
          system. The planets, in order of their distance outward from the Sun,
          are Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, and Neptune.
          Four planets—Jupiter through Neptune have ring systems, and all but
          Mercury and Venus have one or more moons.
        </p>
        <p className="md:text-[20px] text-[18px] mt-14 text-white font-name font-medium md:pl-20 pl-7 md:pr-[82px] pr-7">
          The comic quest begins! click 'explore' to delve through the wonders
          of our solar system, discover the unique wonders of each planet and
          explore the diverse worlds that make our solar system a marvel of the
          universe.
        </p>
        <p className="mt-14 md:pl-[580px] pl-36">
          <a href="/planet">
            <button className="font-title1 bg-custom-color text-white p-4 rounded-xl text-[18px]">
              Explore!
            </button>
          </a>
        </p>
      </div>
    </div>
  );
};

export default Solarsystem;
