import Image from "next/image";
import React from "react";

const Intro = () => {
  return (
    <div className="md:px-10 animate-slide flex lg:px-40 px-12 py-20 lightBorderBottom gap-10 lightBorderTop mt-2 relative lg:flex-row md:flex-row flex-col">
      <div className="basis-[47%] relative flex justify-center md:mb-0 mb-8">
        <Image
          width={500}
          height={200}
          src={"/images/bigIdea.svg"}
          alt="bigIdea"
        />
      </div>
      <Image
        width={60}
        height={60}
        src={"/images/curlyArrow.svg"}
        alt="curlyArrow"
        className="md:self-end self-center basis-[5%] md:-ml-20 md:mr-16 md:mt-0 -mt-20"
        // className="absolute md:bottom-10 sm:bottom-1/3 bottom-[51%] md:right-1/2 right-[46%] lg:w-16 md:w-12 w-10"
      />
      <div className="basis-[47%] flex flex-col md:text-3xl text-xl justify-center relative md:text-start text-center">
        <span className="font-[ClashDisplay] font-bold">
          Introduction to getlinked
        </span>
        <span className="font-[ClashDisplay] font-bold textPurple md:mb-10 mb-2">
          tech Hackathon 1.0
        </span>
        <span className="text-sm font-light leading-7">
          Our tech hackathon is a melting pot of visionaries, and its purpose is
          as clear as day: to shape the future. Whether you&apos;re a coding
          genius, a design maverick, or a concept wizard, you&apos;ll have the
          chance to transform your ideas into reality. Solving real-world
          problems, pushing the boundaries of technology, and creating solutions
          that can change the world, that&apos;s what we&apos;re all about!
        </span>
      </div>
      <Image
        width={30}
        height={30}
        src={"/images/starPurple.svg"}
        alt="purpleStar"
        className="absolute lg:left-32 md:left-10 md:top-60 top-52 lg:w-10 md:w-5 w-4"
      />
      <Image
        width={30}
        height={30}
        src={"/images/starPurple.svg"}
        alt="purpleStar"
        className="absolute lg:right-36 lg:top-40 md:right-12 md:top-44 bottom-80 right-5 lg:w-10 md:w-5 w-4"
      />
    </div>
  );
};

export default Intro;
