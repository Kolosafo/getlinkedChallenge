import { FC } from "react";
import GradientBtn from "../SubComponents/GradientBtn";
import Image from "next/image";
import PurpleLightBg from "../SubComponents/PurpleLightBg";

type Props = {
  isMobile: boolean;
};
const Judge: FC<Props> = ({ isMobile }) => {
  console.log(isMobile)
  return (
    <div className="flex md:px-10 px-10 lg:px-40 py-20 gap-10 lightBorderBottom relative md:flex-row md:items-start items-center flex-col">
      <div className="basis-1/2 flex justify-start relative h-fit">
        <div className="relative">
          <Image
            width={600}
            height={600}
            src={"/images/judgeIcon.svg"}
            alt="judgeIcon"
            className="mt-24 z-10 object-fill"
          />
          <PurpleLightBg
            style="bottom-[-10%] -left-10 md:h-52 md:w-72 h-[7rem] w-[14rem]"
            adjustFilter="blur(120px)"
            mobileFilterAdjust={`${isMobile ? "blur(70px)" : "blur(120px)"}`}
          />
          <Image
            width={20}
            height={20}
            src={"/images/lightStar.svg"}
            alt="lightStar"
            className="absolute lg:left-80 lg:bottom-56 md:left-60 md:bottom-40 top-[55%] left-[60%] lg:w-5 md:w-3 w-2"
          />
          <div className="absolute lg:left-[13%] sm:top-16 top-[4.5rem] md:left-14 sm:left-14 left-10 -z-20 p-[10.5%] bg-gradient-to-r from-[#FF2674] to-[#8F01FE] rounded-full"></div>
        </div>

        <Image
          width={30}
          height={30}
          src={"/images/starPurple.svg"}
          alt="starPurple"
          className="absolute left-28 -top-10 lg:w-8 md:w-7 w-4"
        />
      </div>
      <Image
        width={20}
        height={20}
        src={"/images/star.svg"}
        alt="star"
        className="absolute md:right-[55%] bottom-20 right-20 lg:w-5 md:w-3 w-2"
      />
      <div className="basis-1/2 flex flex-col gap-5 md:text-xs lg:text-sm text-xs md:w-[80%] w-[95%] md:text-start text-center md:items-start items-center font-light md:leading-7 leading-4">
        <div className="flex flex-col">
          <span className="font-[ClashDisplay] font-bold text-3xl">
            Judging Criteria
          </span>
          <span className="font-[ClashDisplay] font-bold text-3xl textPurple">
            Key attributes
          </span>
        </div>
        <span>
          <span className="text-[#FF26B9] font-bold">
            Innovation and Creativity
          </span>
          : Evaluate the uniqueness and creativity of the solution. Consider
          whether it addresses a real-world problem in a novel way or introduces
          innovative features.
        </span>
        <span>
          <span className="text-[#FF26B9] font-bold">Functionality</span>:
          Assess how well the solution works. Does it perform its intended
          functions effectively and without major issues? Judges would consider
          the completeness and robustness of the solution.
        </span>
        <span>
          <span className="text-[#FF26B9] font-bold">Impact and Relevance</span>
          : Determine the potential impact of the solution in the real world.
          Does it address a significant problem, and is it relevant to the
          target audience? Judges would assess the potential social, economic,
          or environmental benefits.
        </span>
        <span>
          <span className="text-[#FF26B9] font-bold">Technical Complexity</span>
          : Evaluate the technical sophistication of the solution. Judges would
          consider the complexity of the code, the use of advanced technologies
          or algorithms, and the scalability of the solution.
        </span>
        <span>
          <span className="text-[#FF26B9] font-bold">
            Adherence to Hackathon Rules
          </span>
          : Judges will Ensure that the team adhered to the rules and guidelines
          of the hackathon, including deadlines, use of specific technologies or
          APIs, and any other competition-specific requirements.
        </span>
        <div>
          <GradientBtn text="Read More" />
        </div>
      </div>
    </div>
  );
};

export default Judge;
