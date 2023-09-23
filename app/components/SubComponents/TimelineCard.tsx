import { FC } from "react";

type Props = {
  doubleTextOne: string;
  doubleTextTwo: string;
  middleNumber: string | number;
  dateText: string;
  orientation: 1 | 2;
};
const TimelineCard: FC<Props> = ({
  doubleTextOne,
  doubleTextTwo,
  middleNumber,
  dateText,
  orientation,
}) => {
  return (
    <div className="flex justify-center items-center">
      {orientation === 1 ? (
        <div
          className={`md:flex hidden flex-col basis-[40%] text-right self-end md:order-1 order-2`}
        >
          <span className="font-bold lg:text-xl textPurple mb-3">
            {doubleTextOne}
          </span>
          <span className="font-light lg:text-sm md:text-xs">
            {doubleTextTwo}
          </span>
        </div>
      ) : (
        <div className="font-bold lg:text-xl textPurple basis-[40%] self-end text-end mb-5 md:order-1 order-2 md:block hidden">
          {dateText}
        </div>
      )}

      <div className="basis-[20%] w-full flex flex-col justify-center items-center md:order-2 order-1">
        <div className="border-l-4 h-20 border-l-[#D434FE] mb-2"></div>
        <div className="lg:w-16 lg:h-16 md:w-10 md:h-10 w-8 h-8 rounded-full purpleGradientBg flex items-center justify-center font-bold text-xl">
          {middleNumber}
        </div>
      </div>
      {orientation === 1 ? (
        <div className="font-bold lg:text-xl textPurple basis-[40%] self-end mb-5 md:block hidden order-3">
          {dateText}
        </div>
      ) : (
        <div className={`md:flex flex-col basis-[40%] self-end hidden order-3`}>
          {/* text-right self-end */}
          <span className="font-bold lg:text-xl textPurple mb-3">
            {doubleTextOne}
          </span>
          <span className="font-light lg:text-sm md:text-xs">
            {doubleTextTwo}
          </span>
        </div>
      )}
      <div className="md:hidden flex flex-col gap-0 order-2 md:ml-0 ml-2">
        <div className={`md:hidden flex-col basis-[40%] self-end flex`}>
          {/* text-right self-end */}
          <span className="font-bold lg:text-xl text-sm textPurple mb-1">
            {doubleTextOne}
          </span>
          <span className="font-light lg:text-sm md:text-xs text-xs">
            {doubleTextTwo}
          </span>
        </div>
        <div className="font-bold lg:text-xl text-sm textPurple basis-[40%] mt-2 md:hidde block">
          {dateText}
        </div>
      </div>
    </div>
  );
};

export default TimelineCard;
