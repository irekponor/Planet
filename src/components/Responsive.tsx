import { useState } from "react";
import {
  AiOutlineBulb,
  AiOutlineHome,
  AiOutlineMenu,
  AiOutlineClose,
} from "react-icons/ai";
import { BsSun } from "react-icons/bs";
import { GrContact } from "react-icons/gr";

const Responsive = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
    console.log("state chnaging");
  };

  return (
    <div>
      <AiOutlineMenu
        size={20}
        onClick={handleNav}
        className="text-white absolute right-4 top-4 z-[99] md:hidden"
      />
      {nav ? (
        <div>
          <AiOutlineClose
            size={20}
            onClick={handleNav}
            className="text-black absolute right-4 top-4 z-[99] md:hidden"
          />
          <div className="md:hidden fixed w-full h-screen bg-white flex flex-col justify-center items-center z-20">
            <a
              href="main"
              className="w-[80%] flex justify-center text-black no-underline rounded-full bg-[#a0934b] m-3 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
            >
              <AiOutlineHome size={20} />
              <span className="pl-4 font-semibold font-title1">Home</span>
            </a>
            <a
              href="space"
              className="w-[80%] flex justify-center text-black no-underline rounded-full bg-[#a0934b] m-3 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
            >
              <BsSun size={20} />
              <span className="pl-4 font-semibold font-title1">
                Solar System
              </span>
            </a>
            <a
              href="news"
              className="w-[80%] flex justify-center text-black no-underline rounded-full bg-[#a0934b] m-3 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
            >
              <AiOutlineBulb size={20} />
              <span className="pl-4 font-semibold font-title1">
                Did You Know
              </span>
            </a>
            <a
              href="message"
              className="w-[80%] flex justify-center text-black no-underline rounded-full bg-[#a0934b] m-3 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
            >
              <GrContact size={20} />
              <span className="pl-4 font-semibold font-title1">Contact</span>
            </a>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Responsive;
