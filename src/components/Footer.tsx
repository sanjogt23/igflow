const date = new Date();
const year = date.getFullYear();
const Footer = () => {
  return (
    <>
      <div className="md:flex md:justify-between max-w-4xl m-auto px-4 border border-black py-12 rounded-xl mt-32 mb-4">
        <div className="mb-6 md:mb-0">
          <a href="#" className="flex items-center">
            <span className="text-black font-[PoppinsMed] self-center text-2xl font-semibold whitespace-nowrap ">
              IGFLOW
            </span>
          </a>
        </div>
        <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
          <div>
            <h2 className="mb-6 text-md uppercase font-[PoppinsMed]">
              Resources
            </h2>
            <ul className="text-sm">
              <li className="mb-4">
                <a
                  href="#"
                  className=" text-sm md:text-md group transition duration-200"
                >
                  Projects
                  <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-[#D9CAB3]"></span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className=" text-sm md:text-md group transition duration-200"
                >
                  Team
                  <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-[#D9CAB3]"></span>
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="mb-6 text-md uppercase font-[PoppinsMed] ">
              Follow us
            </h2>
            <ul className="text-sm">
              <li className="mb-4">
                <a
                  href="#"
                  className=" text-sm md:text-md group transition duration-200"
                >
                  Instagram
                  <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-[#D9CAB3]"></span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className=" text-sm md:text-md group transition duration-200"
                >
                  Twitter
                  <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-[#D9CAB3]"></span>
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="mb-6 text-md uppercase font-[PoppinsMed]">Legal</h2>
            <ul className="text-sm">
              <li className="mb-4">
                <a
                  href="#"
                  className=" text-sm md:text-md group transition duration-200"
                >
                  Privacy Policy
                  <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-[#D9CAB3]"></span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className=" text-sm md:text-md group transition duration-200"
                >
                  Terms &amp; Conditions
                  <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-[#D9CAB3]"></span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};
export { Footer };
