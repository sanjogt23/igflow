import { NavLink, Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="z-20 max-w-4xl backdrop-filter backdrop-blur-sm sticky m-auto top-0 my-2 h-16 flex px-12  justify-between items-center border border-black rounded-full">
      <div>
        <Link to="/">
          <div className="font-[PoppinsBold] text-md md:text-xl ">IGFLOW</div>
        </Link>
      </div>
      <div className="flex">
        {Links.map((element) => (
          <NavLink
            to={element.href}
            className="mx-2 text-sm md:text-md group transition duration-200"
          >
            {element.label}
            <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-[#D9CAB3]"></span>
          </NavLink>
        ))}
      </div>
    </div>
  );
};
export { Navbar };

const Links = [
  {
    label: "Services",
    href: "services",
  },
  {
    label: "Contact",
    href: "contact",
  },
];
