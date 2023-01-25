import Logo1 from "../../public/logo1.svg";
import Logo2 from "../../public/logo2.svg";
import Logo3 from "../../public/logo3.svg";
const Home = () => {
  return (
    <div className="max-w-4xl m-auto">
      <div className="mt-24 sm:mx-4 flex flex-col text-left mx-4 ">
        <h3 className="text-sm xl:text-base font-[PoppinsMed]">
          E-commerce & Info Product Businesses
        </h3>
        <h1 className="text-4xl xl:text-5xl max-w-xl mt-2 font-[PoppinsMed]">
          Take Your{" "}
          <span className="underline decoration-[#D9CBA3]">Revenue</span> to the
          Next Level with Paid Social Advertising
        </h1>
        <h3 className="text-sm xl:text-base max-w-2xl mt-6">
          Dominate Your Industry and Increase Your E-commerce & Info Product
          Revenue with Our Proven Paid Social Advertising Solutions
        </h3>
      </div>
      <div className="mx-4 mt-12">
        <a href="https://cal.com/igflow/30min">
          <span className="border border-black rounded-full p-4 hover:bg-[#E4DBBF] transition-all duration-300">
            Schedule an appointment
          </span>
        </a>
      </div>
      <div className="mx-4 mt-52">
        <h1 className="text-3xl font-[PoppinsMed] max-w-xl">
          Comprehensive Marketing and Digital Services
        </h1>
        <h2 className="max-w-xl mt-4 ">
          In today's digital age, it's essential for your business to have a
          strong online presence in order to reach and engage with your target
          audience. Our team of experts specializes in crafting digital
          experiences that truly represent your brand and its values.
        </h2>
      </div>
      <div className="mx-4 mt-24 flex flex-col items-center">
        <div className="hidden md:block md:absolute text-2xl md:text-4xl font-[PoppinsMed] text-gray-300 flex flex-col justify-between col-span-2 overflow-hidden">
          <div className="flex my-8 ">
            <span className="mx-4">Email Marketing</span>
            <span className="mx-4"> Content Creation</span>
            <span className="mx-6">Website</span>
          </div>
          <div className="flex my-6 justify-center">
            <span>Social Media Management</span>
            <span className="mx-6">Website</span>
            <span className="mx-6">Email</span>
          </div>
          <div className="flex my-6">
            <span className="mx-6">Website</span>
            <span className="mx-4">Email Marketing</span>
            <span className="mx-6">Instagram Growth</span>
          </div>
          <div className="flex my-8">
            <span className="mx-4">Email Marketing</span>
            <span className="mx-6"> Content Creation</span>
            <span className="mx-6"> Content </span>
          </div>
          <div className="flex my-6">
            <span className="mx-6">Website</span>
            <span className="mx-4">Email Marketing</span>
            <span className="mx-6">Instagram Growth</span>
          </div>
          <div className="flex my-6 justify-center">
            <span>Social Media Management</span>
            <span className="mx-6">Website</span>
            <span className="mx-6">Email</span>
          </div>
        </div>
        <div className="mt-24 flex z-10 flex-col justify-center items-center max-w-sm backdrop-filter backdrop-blur-xl p-4 ">
          <span className="text-4xl font-[PoppinsMed] underline decoration-[#D9CBA3]">
            Our Services
          </span>
          <span className="text-center mt-4 text-xl">
            Work with an agency that is committed to helping your business
            succeed in the digital world
          </span>
          <span className="mt-12">
            <a href="#">
              <span className="border border-black rounded-full px-8 py-4 hover:bg-[#E4DBBF] transition-all duration-300">
                Services
              </span>
            </a>
          </span>
        </div>
      </div>
      <div className="flex flex-col mt-48 justify-center items-center">
        <h1 className="text-xl md:text-3xl font-[PoppinsMed] max-w-xl">
          Some of Our Client Include
        </h1>
        <div className="flex justify-evenly items-center bg-gray-200 border rounded-xl mt-4">
          <img
            src={Logo1}
            alt="logo"
            width="20%"
            className="filter grayscale"
          />
          <img
            src={Logo2}
            alt="logo"
            width="20%"
            className="filter grayscale"
          />
          <img
            src={Logo3}
            alt="logo"
            width="20%"
            className="filter grayscale"
          />
        </div>
      </div>
      <div className="mx-4 mt-36">
        <h1 className="text-4xl font-[PoppinsMed] max-w-xl">Contact Us</h1>
        <h2 className="max-w-xl mt-4 ">
          Thank you for visiting our website. We appreciate your interest in our
          digital marketing services and we would love to hear from you. Whether
          you have a question, a comment, or you're ready to get started with a
          project, we're here to help.
        </h2>
        <h2 className="max-w-xl mt-4 ">
          We're also active on social media, so please feel free to connect with
          us on Facebook, Twitter, Instagram, and LinkedIn.
        </h2>
      </div>
    </div>
  );
};
export { Home };
