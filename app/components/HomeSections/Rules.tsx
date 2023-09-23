import Image from "next/image";
import React from "react";

const Rules = () => {
  return (
    <div className="flex animate-slide md:px-10 lg:px-40 px-12 py-10 lightBorderBottom relative overflow-x-hidden md:flex-row flex-col">
      <div className="basis-1/2 flex flex-col md:items-start items-center justify-center text-4xl relative md:order-0 order-1">
        <span className="font-[ClashDisplay] font-bold">Rules and</span>
        <span className="font-[ClashDisplay] font-bold textPurple md:mb-10 mb-5">
          Guidelines
        </span>
        <span className="text-sm lg:w-[90%] md:w-[90%] font-light leading-7 md:text-start text-center">
          Our tech hackathon is a melting pot of visionaries, and its purpose is
          as clear as day: to shape the future. Whether you&apos;re a coding
          genius, a design maverick, or a concept wizard, you&apos;ll have the
          chance to transform your ideas into reality. Solving real-world
          problems, pushing the boundaries of technology, and creating solutions
          that can change the world, that&apos;s what we&apos;re all about!
        </span>
      </div>
      <div className="basis-1/2 md:order-1 order-0">
        <Image
          width={600}
          height={600}
          src={"/images/rulesIcon.svg"}
          alt="rulesIcon"
          className=""
        />
      </div>
      <Image
        width={30}
        height={30}
        src={"/images/lightStar.svg"}
        alt="lightStar"
        className="absolute md:left-1/3 md:top-28 sm:right-20 sm:bottom-48 right-5 bottom-[40%] lg:w-8 md:w-5 w-4"
      />
      <Image
        width={30}
        height={30}
        src={"/images/star.svg"}
        alt="lightStar"
        className="absolute md:hidden md:right-1/2 md:bottom-28 sm:left-20 sm:top-1/3 left-12 top-48 lg:w-8 md:w-5 w-4"
      />
      <Image
        width={30}
        height={30}
        src={"/images/star.svg"}
        alt="lightStar"
        className="absolute md:hidden left-32 bottom-5 lg:w-8 md:w-5 w-3"
      />
      <Image
        width={30}
        height={30}
        src={"/images/star.svg"}
        alt="lightStar"
        className="absolute md:block md:right-1/2 md:bottom-28 lg:w-8 md:w-5 w-4 hidden"
      />
    </div>
  );
};

export default Rules;
