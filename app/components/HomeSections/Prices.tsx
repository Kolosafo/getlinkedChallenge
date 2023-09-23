import Image from "next/image";
import { FC } from "react";
import PurpleLightBg from "../SubComponents/PurpleLightBg";

type Props = {
  isMobile: boolean;
};

const Prices: FC<Props> = ({ isMobile }) => {
  return (
    <div className="flex flex-col gap-5 justify-between md:px-10 px-10 lg:px-40 py-20 pb-28 bg-[#120b21] relative">
      <div className="flex relative md:justify-between justify-center basis-[30%]">
        <Image
          width={25}
          height={25}
          src={"/images/starPurple.svg"}
          alt="starPurple"
          className="absolute md:relative lg:w-7 md:w-5 w-3 md:left-0 sm:left-16 left-5"
        />
        <div className="flex flex-col gap-5 md:-mr-16 md:text-start text-center">
          <div className="boldClash flex flex-col md:text-start text-center">
            <span>Prizes and</span>
            <span className="textPurple">Rewards</span>
          </div>
          <span className="customLightText md:w-4/5 w-full">
            Highlight of the prizes of rewards for winners and for participants.
          </span>
        </div>
      </div>
      <div className="flex md:flex-row flex-col justify-between basis-[70%] z-20">
        <div className="relative basis-[40%] h-fit">
          <Image
            width={600}
            height={600}
            src={"/images/trophyIcon.svg"}
            alt="trophyIcon"
            className="object-fill relative z-40"
          />
          <PurpleLightBg
            style="z-10 md:right-20 right-[8rem] bottom-44 md:h-52 h-[10rem] md:w-52 w-[10rem]"
            mobileFilterAdjust={`${isMobile ? "blur(75px)" : "blur(100px)"}`}
          />
        </div>
        <div className="basis-[70%]flex justify-center mt-10">
          {" "}
          <Image
            width={600}
            height={600}
            src={"/images/rewards.svg"}
            alt="rewards"
            className="object-fill"
          />
        </div>
      </div>

      <PurpleLightBg
        style="z-10 -right-44 bottom-24 h-40 w-60"
        adjustFilter="blur(110px)"
      />
      <Image
        width={25}
        height={25}
        src={"/images/star.svg"}
        alt="star"
        className="absolute left-1/2 top-1/3"
      />
      <Image
        width={25}
        height={25}
        src={"/images/lightStar.svg"}
        alt="star"
        className="absolute right-[22%] bottom-16 lg:w-5 md:w-3 w-3"
      />
      <Image
        width={25}
        height={25}
        src={"/images/starPurple.svg"}
        alt="star"
        className="absolute md:right-[18%] right-[25%] md:top-40 top-28 lg:w-5 md:w-3 w-3"
      />
      <Image
        width={25}
        height={25}
        src={"/images/star.svg"}
        alt="star"
        className="absolute md:left-[23%] left-[80%] md:bottom-24 bottom-[35%] lg:w-5 md:w-3 w-3"
      />
      <Image
        width={25}
        height={25}
        src={"/images/star.svg"}
        alt="star"
        className="absolute lg:right-32 lg:top-1/2 md:right-5 md:top-1/2 top-[60%] right-[70%] lg:w-5 md:w-3 w-3"
      />
    </div>
  );
};

export default Prices;
