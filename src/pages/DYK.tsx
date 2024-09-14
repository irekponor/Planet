import frontier from "../assets/frontier.jpg";

const DYK = () => {
  return (
    <div>
      <div className="md:block hidden">
        <header className="fixed top-2 z-[20] mx-auto flex w-full items-center justify-between">
          <h3 className="p-3 text-custom-color font-bold">Cosmiccraft</h3>
          <div>
            <div className="mr-10">
              <a
                href="/main"
                className="no-underline p-3 justify-between font-semibold font-title text-white text-[18px]"
              >
                Home
              </a>
              <a
                href="/space"
                className="no-underline p-3 justify-between font-semibold font-title text-white text-[18px]"
              >
                Solar System
              </a>
              <a
                href=""
                className="no-underline p-3 justify-between font-semibold font-title text-custom-color text-[22px]"
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
      <img
        src={frontier}
        className="fixed object-cover h-screen w-full"
        alt=""
      />
      <div className="absolute w-full top-0 left-0">
        <div className="max-w-[600px] w-full h-full pl-10 m-auto justify-center items-center lg:items-start flex-col">
          <h3 className="font-title1 text-white md:pt-24 pt-12 font-bold md:tracking-[1.6rem] tracking-[0.7rem] mb-4">
            Did You Know
          </h3>
        </div>
        <p className="md:text-[20px] text-white font-title1 font-medium pl-4 pr-4 md:pl-52 md:pr-[82px]">
          <p>1.Yuri Gagarin was the first human being in space.</p>
          <p>2. John Milton named the outer part of the Earth 'SPACE'.</p>
          <p>
            3. Neptune has only completed one orbit round the Sun since its
            discovery.
          </p>
          <p>4. Neil Armstrong was the first man on the Moon.</p>
          <p>5. Jupiter is the largest planet while Mercury is the smallest.</p>
          <p>
            6. There is a huge cloud of floating water in Space, that can fill
            up 13 trillion earths.
          </p>
          <p>7. lEGO features were sent to orbit Jupiter.</p>
          <p>8. Spacecraft have visited every solar system planet.</p>
          <p>
            9. Precious metals like silver and gold are forged when dead stars
            collide.
          </p>
          <p>
            10. Space is a three-dimensional (3D) continuum containing positions
            and directions.
          </p>
        </p>
      </div>
    </div>
  );
};

export default DYK;
