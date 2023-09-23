import { FC } from "react";
import GradientBtn from "./GradientBtn";
import Image from "next/image";

type Props = {
  setSuccess: () => void;
};
const Confirmation: FC<Props> = ({ setSuccess }) => {
  return (
    <div className="h-full w-full fixed bg-[#140d27] opacity-90 p-1 z-50 px-[10%] flex items-center justify-center">
      <div className="relative h-[80%] md:w-1/2 w-full border-2 border-[#D434FE] rounded-md flex flex-col px-[5%] py-5 justify-center items-center gap-2">
        <div className="flex items-center">
          <Image
            width={250}
            height={250}
            src={"/images/successCheck.svg"}
            alt="successCheck"
            className="object-cover"
          />
          <Image
            width={250}
            height={250}
            src={"/images/successMan.svg"}
            alt="successCheck"
            className="-ml-44"
          />
        </div>
        <span className="md:text-2xl text-lg font-bold text-center md:mb-0 -mb-2">
          Congratulations
        </span>
        <span className="md:text-2xl text-lg font-bold text-center md:leading-8 leading-6">
          you have successfully Reistered!
        </span>
        <span className="md:text-base text-sm md:mt-0 mt-5">
          Yes, it was easy and you did it!
        </span>
        <span className="md:text-base text-sm text-center flex whitespace-nowrap md:mt-0 -mt-2">
          check your mail box for next step{" "}
          <Image
            width={20}
            height={20}
            src={"/images/smileyEmoji.svg"}
            alt="successCheck"
            className="ml-1"
          />
        </span>
        <div>
          <GradientBtn text="Back" customStyle="w-full mt-5" submit={setSuccess} />
        </div>

        <Image
          width={20}
          height={20}
          src={"/images/starPurple.svg"}
          alt="lightStar"
          className="absolute -top-5 -right-5"
        />
        <Image
          width={20}
          height={20}
          src={"/images/starPurple.svg"}
          alt="lightStar"
          className="absolute md:bottom-2 bottom-[-2.5rem] md:right-2 right-[2.5rem]"
        />
        <Image
          width={20}
          height={20}
          src={"/images/lightStar.svg"}
          alt="lightStar"
          className="absolute md:left-16 left-4 top-52"
        />
      </div>
    </div>
  );
};

export default Confirmation;
