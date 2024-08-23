import { TypeAnimation } from "react-type-animation";
import home from "../assets/home.jpg";

const Home = () => {
  return (
    <div>
      <div className="md:block hidden">
        <header className="fixed top-2 z-[20] mx-auto flex w-full items-center justify-between">
          <h3 className="p-3 text-custom-color font-bold">Cosmiccraft</h3>
          <div>
            <div className="mr-10">
              <a
                href=""
                className="no-underline p-3 justify-between font-semibold font-title text-custom-color text-[22px]"
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
      <img src={home} className="object-cover h-screen w-full" alt="" />
      <div className="absolute top-0 w-full left-0">
        <div className="max-w-[550px] w-full h-full pl-14 m-auto justify-center items-center lg:items-start flex flex-col">
          <h3 className="md:text-5xl tracking-[1.5rem] pt-56 font-bold font-title1 text-white flex">
            S p a c e
          </h3>
          <h4 className="md:text-[16px] md:pl-4 font-name md:uppercase text-[12px] pt-3 text-white">
            {
              <TypeAnimation
                sequence={[
                  // Same substring at the start will only be typed out once, initially
                  "The Final Frontier?",
                  1000, // wait 1s before replacing "Mice" with "Hamsters"
                  "The Unexplorable?",
                  1000,
                  "The Mysterious",
                  1000,
                ]}
                wrapper="span"
                speed={50}
                style={{ fontSize: "2em", display: "inline-block" }}
                repeat={Infinity}
              />
            }
          </h4>
        </div>
      </div>
    </div>
  );
};

export default Home;
