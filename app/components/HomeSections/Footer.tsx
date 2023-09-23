import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="flex flex-col md:px-10 px-10 lg:px-40 lg:py-20 md:py-10 py-10 bg-[#100b20] relative">
      <div className="flex md:flex-row flex-col gap-16 mb-16">
        <div className="flex flex-col basis-[60%] md:gap-0 gap-2">
          <Link href="/">
            <span className="boldClash mb-2">
              get<span className="textPurple">linked</span>
            </span>
          </Link>

          <span className="customLightText md:font-light font-normal md:mb-auto md:w-4/5 w-full md:leading-7 leading-6 md:text-xs mb-8">
            Getlinked Tech Hackathon is a technology innovation program
            established by a group of organizations with the aim of showcasing
            young and talented individuals in the field of technology
          </span>
          <div className="customLightText flex items-center lg:text-sm md:text-xs">
            <span> Terms of Use</span>
            <div className="border-l-2 h-4 border-l-[#D434FE] mx-3"></div>{" "}
            <span> Privacy Policy</span>
          </div>
        </div>
        <div className="flex flex-col gap-3 mr-10  basis-[20%] lg:text-sm md:text-xs">
          <span className="textPurple font-semibold">Useful Links</span>
          <span className="md:text-sm text-xs md:font-normal">Overview</span>
          <span className="md:text-sm text-xs md:font-normal">Timeline</span>
          <span className="md:text-sm text-xs md:font-normal">FAQs</span>
          <Link href="/register">
            <span className="md:text-sm text-xs md:font-normal">Register</span>
          </Link>
          <div className="flex items-center gap-3 mt-5 lg:text-sm md:text-xs">
            <span className="textPurple font-semibold whitespace-nowrap md:text-sm text-xs">
              Follow us
            </span>
            <Image
              width={22}
              height={22}
              src={"/images/instagram.svg"}
              alt="instagram"
              className="cursor-pointer"
            />
            <Image
              width={20}
              height={20}
              src={"/images/twitter.svg"}
              alt="twitter"
              className="cursor-pointer"
            />
            <Image
              width={12}
              height={12}
              src={"/images/facebook.svg"}
              alt="facebook"
              className="cursor-pointer"
            />
            <Image
              width={22}
              height={22}
              src={"/images/linkedin.svg"}
              alt="linkedin"
              className="cursor-pointer"
            />
          </div>
        </div>
        <div className="flex flex-col gap-5 basis-[20%] lg:text-sm md:text-xs">
          <Link href="/contact">
            <span className="textPurple font-semibold">Contact Us</span>
          </Link>

          <div className="flex gap-3 items-center">
            <Image
              width={15}
              height={15}
              src={"/images/phone.svg"}
              alt="phone"
              className=""
            />
            <span className="md:text-sm text-xs">+234 679 81819</span>
          </div>
          <div className="flex gap-3 items-start">
            <Image
              width={15}
              height={15}
              src={"/images/location.svg"}
              alt="location"
              className="mt-2"
            />
            <span className="md:w-4/5 w-1/3 md:text-sm text-xs">
              27,Alara Street Yaba 100012 Lagos State
            </span>
          </div>
        </div>
      </div>
      <span className="lg:text-sm md:text-xs text-xs md:font-normal font-semibold self-center">
        All rights reserved. &copy; getlinked Ltd.
      </span>
      <Image
        width={20}
        height={20}
        src={"/images/starPurple.svg"}
        alt="starPurple"
        className="absolute lg:bottom-32 md:bottom-20 bottom-4 left-1/2 lg:w-5 md:w-4 w-3"
      />
      <Image
        width={20}
        height={20}
        src={"/images/star.svg"}
        alt="star"
        className="absolute md:top-60 top-[80%] md:right-32 right-20 lg:w-5 md:w-4 w-3"
      />
      <Image
        width={20}
        height={20}
        src={"/images/lightStar.svg"}
        alt="lightStar"
        className="absolute md:top-20 top-1/2 lg:right-[28rem] md:right-60 right-1/2 lg:w-5 md:w-4 w-4"
      />
      <Image
        width={20}
        height={20}
        src={"/images/star.svg"}
        alt="star"
        className="absolute top-32 lg:left-20 md:left-3 left-4 lg:w-5 md:w-4 w-3"
      />
    </div>
  );
};

export default Footer;
