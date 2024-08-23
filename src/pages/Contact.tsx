import contact from "../assets/contact.jpg";

const Contact = () => {
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
                href=""
                className="no-underline p-3 justify-between font-semibold font-title text-custom-color text-[22px]"
              >
                Contact
              </a>
            </div>
          </div>
        </header>
      </div>
      <img
        src={contact}
        className="fixed object-cover h-screen w-full"
        alt=""
      />
      <div className="absolute w-full top-0 left-0">
        <div className="max-w-[1040px] w-full h-full pl-10 m-auto justify-center items-center lg:items-start flex-col"></div>
        <h1 className="md:tracking-[1.5rem] tracking-[1rem] py-4 mt-14 text-4xl font-bold font-title1 text-center text-white">
          Contact Us
        </h1>
        <p className="md:text-[19px] text-white font-title1 font-medium md:pl-20 pl-7 md:pr-[82px] pr-7">
          Reach for the stars and connect with us! Whether you're a fellow space
          enthusiast, a curious explorer, or a fellow traveler in the vast
          universe, we want to hear from you. Share your thoughts, ask
          questions, or simply say hello, we'll get back to you as soon as
          possible. Our galaxy-spanning team is ready to assist you. Contact us
          today and let's explore the cosmos together!
        </p>
        <form
          action="https://getform.io/f/adrykyna"
          method="POST"
          encType="multipart/form-data"
        >
          <div className="md:pl-20 pl-7 md:pr-10 pr-7 grid md:grid-cols-2 gap-4">
            <div className="flex flex-col">
              <label className="uppercase text-sm py-2 font-semibold"></label>
              <input
                className="outline-none border-2 bg-transparent rounded-lg p-3 flex border-white text-white"
                type="text"
                name="name"
                placeholder="Full Name"
              />
            </div>
            <div className="flex flex-col">
              <label className="uppercase text-sm py-2 font-semibold"></label>
              <input
                className="outline-none border-2 bg-transparent rounded-lg p-3 flex border-white text-white"
                type="email"
                name="email"
                placeholder="Email id"
              />
            </div>
          </div>

          <div className="md:pl-20 pl-7 md:pr-10 pr-7">
            <div className="flex flex-col py-2">
              <label className="uppercase text-sm py-2 font-semibold"></label>
              <input
                className="outline-none border-2 bg-transparent rounded-lg p-3 flex border-white text-white"
                type="text"
                name="subject"
                placeholder="Subject"
              />
            </div>
            <div className="flex flex-col py-2">
              <label className="uppercase text-sm py-2 font-semibold"></label>
              <textarea
                className="outline-none border-2 bg-transparent rounded-lg p-3 flex border-white text-white"
                name="message"
                placeholder="Message.."
                rows={10}
              ></textarea>
            </div>
            <p className="mt-14 md:pl-[550px] pl-[122px]">
              <button className="font-title1 bg-custom-color text-white p-4 rounded-xl text-[18px]">
                Submit
              </button>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
