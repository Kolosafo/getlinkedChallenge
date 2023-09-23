import Image from "next/image";
import { FC } from "react";
import PurpleLightBg from "../SubComponents/PurpleLightBg";

type Props = {
  isMobile: boolean;
};
const Sponsors: FC<Props> = ({ isMobile }) => {
  return (
    <div className="flex flex-col lightBorderBottom items-center gap-16 md:px-10 px-5 lg:px-40 pb-32 py-20 relative">
      <div className="flex flex-col items-center gap-3 basis-[40%]">
        <span className="boldClash md:text-3xl md:font-bold font-semibold text-lg">
          Partners and Sponsors
        </span>
        <span className="customLightText md:text-sm text-xs md:w-4/5 w-[80%] text-center">
          Getlinked Hackathon 1.0 is honored to have the following major
          companies as its partners and sponsors
        </span>
      </div>
      <div className="basis-[60%] flex justify-center w-full">
        <Image
          width={600}
          height={600}
          src={"/images/sponsors.png"}
          alt="sponsors"
          className="md:w-4/5 w-full"
        />
      </div>{" "}
      <Image
        width={25}
        height={25}
        src={"/images/star.svg"}
        alt="sponsors"
        className="absolute md:bottom-40 bottom-36 md:right-[45%] right-24 lg:w-7 md:w-5 w-3"
      />
      <Image
        width={25}
        height={25}
        src={"/images/starPurple.svg"}
        alt="sponsors"
        className="absolute md:left-96 md:top-48 sm:top-72 sm:right-24 right-44 top-64 lg:w-7 md:w-5 w-3"
      />
      <Image
        width={20}
        height={20}
        src={"/images/starPurple.svg"}
        alt="sponsors"
        className="absolute md:right-[45%] md:top-[40%] right-[90%] top-[35%] lg:w-7 md:w-5 w-3"
      />
      <PurpleLightBg
        style="md:left-32 left-[-6rem] md:top-44 top-[4rem] md:h-40 h-[7rem] md:w-60 w-[13rem]"
        mobileFilterAdjust={`${isMobile ? "blur(70px)" : "blur(95px)"}`}
      />
    </div>
  );
};

export default Sponsors;
