import GradientBtn from "../SubComponents/GradientBtn";
import Image from "next/image";
import { FC } from "react";
import PurpleLightBg from "../SubComponents/PurpleLightBg";

type Props = {
  isMobile: boolean;
};
const Terms: FC<Props> = ({ isMobile }) => {
  return (
    <div className="flex md:px-10 px-10 lg:px-40 md:py-32 py-28 gap-10 relative md:flex-row flex-col mb:mb-0 mb-52">
      <div className="flex flex-col md:items-start items-center gap-5 basis-1/2">
        <div className="boldClash flex flex-col md:items-start items-center">
          <span>Privacy Policy and</span>
          <span className="textPurple">Terms</span>
        </div>
        <span className="customLightText opacity-75 mb-7">
          Last updated on September 12, 2023
        </span>
        <span className="customLightText md:text-start text-center md:w-full w-4/5">
          Below are our privacy & policy, which outline a lot of goodies.{" "}
          <br className="md:block hidden" /> it’s our aim to always take of our
          participant
        </span>

        <div className="customLightText flex flex-col md:text-sm text-xs rounded-md lg:p-10 md:p-5 p-5 mt-10 border-[1px] border-[#D434FE] overflow-hidden shadow-lg bg-gray-500 bg-opacity-10">
          {/* backdrop-blur */}
          <span className="leading-7 mb-7">
            At getlinked tech Hackathon 1.0, we value your privacy and are
            committed to protecting your personal information. This Privacy
            Policy outlines how we collect, use, disclose, and safeguard your
            data when you participate in our tech hackathon event. By
            participating in our event, you consent to the practices described
            in this policy.
          </span>
          <span className="font-bold md:text-lg text-sm textPurple mb-2">
            Licensing Policy
          </span>
          <span className="md:font-bold font-semibold mb-10">
            Here are terms of our Standard License:
          </span>
          <div className="flex items-baseline gap-3 mb-7">
            <Image
              width={15}
              height={15}
              src={"/images/checkIcon.svg"}
              alt="sponsors"
              className=""
            />
            <span className="leading-7">
              The Standard License grants you a non-exclusive right to navigate
              and register for our event
            </span>
          </div>
          <div className="flex items-baseline gap-3 mb-8">
            <Image
              width={15}
              height={15}
              src={"/images/checkIcon.svg"}
              alt="sponsors"
              className=""
            />
            <span className="leading-7">
              You are licensed to use the item available at any free source
              sites, for your project developement
            </span>
          </div>
          <GradientBtn text="Read More" customStyle="self-center" />
        </div>
      </div>
      <div className="basis-1/2 relative flex md:justify-end justify-center items-start h-fit">
        <Image
          width={400}
          height={400}
          src={"/images/lockIcon.svg"}
          alt="sponsors"
          className=""
        />
        <Image
          width={420}
          height={420}
          src={"/images/termsIcon.svg"}
          alt="sponsors"
          className="absolute -bottom-[45%] md:right-5 sm:right-28 right-0"
        />
      </div>
      <PurpleLightBg
        style="md:left-10 left-[-4rem] md:bottom-10 bottom-[45%] md:h-56 h-[10rem] md:w-60 w-[11rem]"
        adjustFilter="blur(130px)"
        mobileFilterAdjust={`${isMobile ? "blur(70px)" : "blur(130px)"}`}
      />
      {/* ------------------------PURPLE STAR ICONS--------------------- */}
      <Image
        width={30}
        height={30}
        src={"/images/starPurple.svg"}
        alt="starPurple"
        className="absolute lg:left-16 md:bottom-72 bottom-[25rem] md:left-2 md:w-5 lg:w-8 w-5"
      />
      <Image
        width={20}
        height={20}
        src={"/images/starPurple.svg"}
        alt="starPurple"
        className="absolute md:top-60 top-80 md:left-1/2 left-[80%] lg:w-7 md:w-5 w-5" //RESPONSIVE DONE
      />
      <Image
        width={14}
        height={10}
        src={"/images/starPurple.svg"}
        alt="starPurple"
        className="absolute lg:right-[29rem] md:right-[19rem] right-[22rem] md:bottom-[30rem] bottom-[50rem]"
      />
      {/* ------------------------WHITE STAR ICONS--------------------- */}
      <Image
        width={15}
        height={15}
        src={"/images/star.svg"}
        alt="star"
        className="absolute md:right-[40%] md:bottom-80 bottom-[24rem] right-[28%]"
      />
      <Image
        width={15}
        height={15}
        src={"/images/star.svg"}
        alt="sponsors"
        className="absolute md:right-[14rem] right-[20rem] md:top-64 top-full"
      />

      {/* ------------------------LIGHT STAR ICONS--------------------- */}
      <Image
        width={20}
        height={20}
        src={"/images/lightStar.svg"}
        alt="lightStar"
        className="absolute lg:left-[30%] md:left-[35%] md:top-0 top-14 left-[70%] lg:w-7 md:w-5 w-5"
      />
      <Image
        width={25}
        height={25}
        src={"/images/lightStar.svg"}
        alt="lightStar"
        className="absolute md:right-28 right-8 md:bottom-72 bottom-0 lg:w-7 md:w-5 w-5"
      />
    </div>
  );
};

export default Terms;
