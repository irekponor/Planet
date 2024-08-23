import Carousel from "react-bootstrap/Carousel";
import merc from "../assets/merc.jpg";
import Mercuryheader from "./Mercuryheader";
import Mercurytext from "./Mercurytext";
import venus from "../assets/venus.jpg";
import Venus from "./Venus";
import earth from "../assets/earth.jpg";
import Earth from "./Earth";
import mars from "../assets/mars.jpg";
import Mars from "./Mars";
import jupiter from "../assets/jupiter.jpg";
import Jupiter from "./Jupiter";
import sat from "../assets/sat.jpg";
import Saturn from "./Saturn";
import ura from "../assets/ura.jpg";
import Uranus from "./Uranus";
import nep from "../assets/nep.jpg";
import Neptune from "./Neptune";

const Mercury = () => {
  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <img src={merc} className="object-cover h-screen w-full" alt="" />
          <div>
            <Mercuryheader />
            <div className="absolute top-0 w-full left-0">
              <div className="max-w-[450px] w-full h-full md:pl-10 pl-[77px] m-auto justify-center items-center lg:items-start flex-col">
                <h3 className="font-title1 text-white md:pt-20 pt-10 font-bold md:tracking-[1.6rem] tracking-[1.3rem] mb-4">
                  Mercury
                </h3>
              </div>
              <Mercurytext />
            </div>
          </div>
          <Carousel.Caption className="max-md:hidden h-screen top-[597px]">
            <p className="font-title1">Mercury</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src={venus} className="object-cover h-screen w-full" alt="" />
          <div>
            <Mercuryheader />
            <div className="absolute top-0 w-full left-0">
              <div className="max-w-[360px] w-full h-full md:pl-10 pl-24 m-auto justify-center items-center lg:items-start flex-col">
                <h3 className="font-title1 text-white md:pt-20 pt-10 font-bold tracking-[1.6rem] md:mb-4 mb-[13px]">
                  Venus
                </h3>
              </div>
              <Venus />
            </div>
          </div>
          <Carousel.Caption className="max-md:hidden h-screen top-[597px]">
            <p className="font-title1">Venus</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src={earth} className="object-cover h-screen w-full" alt="" />
          <div>
            <Mercuryheader />
            <div className="absolute top-0 w-full left-0">
              <div className="max-w-[360px] w-full h-full md:pl-10 pl-24 m-auto justify-center items-center lg:items-start flex-col">
                <h3 className="font-title1 text-white md:pt-20 pt-10 font-bold tracking-[1.6rem] md:mb-4 mb-[13px]">
                  Earth
                </h3>
              </div>
              <Earth />
            </div>
          </div>
          <Carousel.Caption className="max-md:hidden h-screen top-[597px]">
            <p className="font-title1">Earth</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src={mars} className="object-cover h-screen w-full" alt="" />
          <div>
            <Mercuryheader />
            <div className="absolute top-0 w-full left-0">
              <div className="max-w-[360px] w-full h-full md:pl-10 pl-28 m-auto justify-center items-center lg:items-start flex-col">
                <h3 className="font-title1 text-white md:pt-20 pt-10 font-bold tracking-[1.6rem] md:mb-4 mb-[10px]">
                  Mars
                </h3>
              </div>
              <Mars />
            </div>
          </div>
          <Carousel.Caption className="max-md:hidden h-screen top-[597px]">
            <p className="font-title1">Mars</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src={jupiter} className="object-cover h-screen w-full" alt="" />
          <div>
            <Mercuryheader />
            <div className="absolute top-0 w-full left-0">
              <div className="max-w-[360px] w-full h-full md:pl-10 pl-16 m-auto justify-center items-center lg:items-start flex-col">
                <h3 className="font-title1 text-white md:pt-20 pt-10 font-bold tracking-[1.6rem] md:mb-4 mb-[13px]">
                  Jupiter
                </h3>
              </div>
              <Jupiter />
            </div>
          </div>
          <Carousel.Caption className="max-md:hidden h-screen top-[597px]">
            <p className="font-title1">Jupiter</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src={sat} className="object-cover h-screen w-full" alt="" />
          <div>
            <Mercuryheader />
            <div className="absolute top-0 w-full left-0">
              <div className="max-w-[360px] w-full h-full md:pl-10 pl-20 m-auto justify-center items-center lg:items-start flex-col">
                <h3 className="font-title1 text-white md:pt-20 pt-10 font-bold tracking-[1.6rem] md:mb-4 mb-[13px]">
                  Saturn
                </h3>
              </div>
              <Saturn />
            </div>
          </div>
          <Carousel.Caption className="max-md:hidden h-screen top-[597px]">
            <p className="font-title1">Saturn</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src={ura} className="object-cover h-screen w-full" alt="" />
          <div>
            <Mercuryheader />
            <div className="absolute top-0 w-full left-0">
              <div className="max-w-[360px] w-full h-full md:pl-10 pl-20 m-auto justify-center items-center lg:items-start flex-col">
                <h3 className="font-title1 text-white md:pt-20 pt-10 font-bold tracking-[1.6rem] md:mb-4 mb-[13px]">
                  Uranus
                </h3>
              </div>
              <Uranus />
            </div>
          </div>
          <Carousel.Caption className="max-md:hidden h-screen top-[597px]">
            <p className="font-title1">Uranus</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src={nep} className="object-cover h-screen w-full" alt="" />
          <div>
            <Mercuryheader />
            <div className="absolute top-0 w-full left-0">
              <div className="max-w-[360px] w-full h-full md:pl-10 pl-12 m-auto justify-center items-center lg:items-start flex-col">
                <h3 className="font-title1 text-white md:pt-20 pt-10 font-bold tracking-[1.6rem] md:mb-4 mb-[13px]">
                  Neptune
                </h3>
              </div>
              <Neptune />
            </div>
          </div>
          <Carousel.Caption className="max-md:hidden h-screen top-[597px]">
            <p className="font-title1">Neptune</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Mercury;
