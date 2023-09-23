import React from "react";
import Image from "next/image";
import GradientBtn from "../SubComponents/GradientBtn";
import { Unica_One } from "next/font/google";
import PurpleLightBg from "../SubComponents/PurpleLightBg";
import MobileMenu from "../SubComponents/MobileMenu";
import Link from "next/link";
const unica = Unica_One({
  weight: "400",
  preload: false,
});
const Hero = () => {
  return (
    <div className="lg:pl-32 animate-slide md:pl-10 px-10 relative h-full overflow-x-clip -my-[0.7rem] overflow-y-clip">
      <div className="flex justify-between pr-16 pl-14 lg:flex-row flex-col lg:items-start md:items-end items-center style">
        <Image
          width={26}
          height={32}
          src="/images/star.svg"
          alt="star"
          className="lg:order-1 lg:self-start md:self-start md:order-2 order-2 md:mt-0 lg:mt-8 sm:-mb-4 sm:mt-4 -mt-4 lg:w-7 md:w-5 sm:w-4 w-3 -ml-48 md:ml-0"
        />
        <div className="flex flex-col lg:order-2 md:order-1 order-1">
          <span className="font-bold italic lg:text-4xl md:text-3xl sm:text-3xl text-lg whitespace-nowrap">
            Igniting a Revolution in HR Innovation
          </span>
          <div className="archLine self-end lg:w-64 md:w-64 sm:w-64 w-36 h-8"></div>
        </div>
      </div>

      <div className="flex  md:flex-row lg:flex-row  lg:items-start flex-col items-center relative">
        <Image
          width={26}
          height={32}
          src="/images/lightstar.svg"
          alt="star-icon"
          className="absolute md:right-[50%] sm:right-20 right-5 top-0 lg:w-7 md:w-4 sm:w-4 w-3"
        />
        <div className="font-[ClashDisplay] basis-1/2 font-bold lg:text-6xl md:text-5xl sm:text-5xl text-4xl mt-10 relative lg:block md:block flex flex-col items-center ">
          <span className="relative whitespace-nowrap">
            getlinked Tech
            <Image
              width={53}
              height={73}
              src="/images/bulb.svg"
              alt="bulb-icon"
              className="absolute lg:-top-10 md:-top-8 -top-6 lg:right-5 md:right-3 right-4 lg:w-10 md:w-8 sm:w-7 w-6"
            />
          </span>
          <div className="flex items-center md:ml-0 -ml-4">
            Hackathon<span className="ml-4 textPurple"> 1.0</span>{" "}
            <Image
              width={86}
              height={86}
              priority
              src="/images/chain.svg"
              alt="star"
              className="lg:w-15 md:w-15 sm:w-12 w-10"
            />
            <Image
              width={58}
              height={58}
              priority
              src="/images/explode.svg"
              alt="star"
              className="lg:w-15 md:w-15 sm:w-12 w-10"
            />
          </div>
          <div className="font-[montserrat] font-normal lg:text-lg md:text-sm text-xs w-[80%] border-red-600 mt-2 text-center sm:text-center lg:text-start md:text-start lg:mb-0md:mb-0 mb-5">
            Participate in getlinked tech Hackathon 2023 stand a chance to win a
            Big prize
          </div>
          <Link href="/register">
            <GradientBtn text="Register" customStyle="text-lg" />
          </Link>

          <div
            className={`font-normal relative flex md:gap-10 gap-4 md:mt-16 mt-8 md:text-5xl text-3xl md:mb-0 mb-[5rem]  ${unica.className}`}
          >
            <div>
              00
              <span className="text-lg">H</span>
            </div>
            <div>
              {" "}
              00
              <span className="text-lg">M</span>
            </div>
            <div>
              00
              <span className="text-lg">S</span>
            </div>
            <Image
              width={26}
              height={32}
              src="/images/lightstar.svg"
              alt="star-icon"
              className="absolute md:right-40 right-10 md:top-[-60px] -top-[5.5rem] lg:w-7 md:w-4 sm:w-4 w-3"
            />
          </div>
        </div>
        <div className="basis-1/2 w-full relative h-full flex justify-center">
          <Image
            width={700}
            height={400}
            src="/images/metrix.svg"
            className="left-5 opacity-80"
            alt="matrix"
            title="matrix"
          />
          <Image
            unoptimized={true}
            priority
            width={700}
            height={700}
            src="/images/hero.png"
            className="absolute md:top-[-125px] top-[-100px]"
            alt="hero"
          />
          <PurpleLightBg
            style="left-[34%] top-[2rem] md:h-[10rem] md:w-[15rem] md:block hidden"
            adjustFilter="blur(90px)"
          />
          <Image
            unoptimized={true}
            priority
            width={600}
            height={600}
            src="/images/hero2.png"
            className="absolute top-[-100px] left-5 opacity-70 slowSpin"
            alt="hero 2"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
