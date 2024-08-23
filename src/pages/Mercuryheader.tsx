const Mercuryheader = () => {
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
    </div>
  );
};

export default Mercuryheader;
