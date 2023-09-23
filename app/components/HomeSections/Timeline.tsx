import React from "react";
import TimelineCard from "../SubComponents/TimelineCard";
import Image from "next/image";
const Timeline = () => {
  return (
    <div
      className="flex flex-col items-center justify-center md:px-10 px-10 lg:px-40 py-20 relative gap-20 bg-[#150e29]"
      //   style={{ boxSizing: "border-box" }}
    >
      <div className="flex items-center flex-col gap-3">
        <span className="font-[ClashDisplay] font-bold text-2xl">Timeline</span>
        <span className="text-center md:w-[80%] w-full font-light text-sm">
          Here is the breakdown of the time we anticipate using for the upcoming
          event.
        </span>
      </div>
      <div className="flex flex-col md:gap-5 gap-10 md:items-center items-baseline">
        <TimelineCard
          orientation={1}
          dateText="November 18, 2023"
          middleNumber={1}
          doubleTextOne="Hackathon Announcement"
          doubleTextTwo="The getlinked tech hackathon 1.0 is formally announced to the
          general public and teams begin to get ready to register"
        />
        <TimelineCard
          orientation={2}
          dateText="November 18, 2023"
          middleNumber={2}
          doubleTextOne="Teams Registration begins"
          doubleTextTwo="Interested teams can now show their interest in the getlinked tech
          hackathon 1.0 2023 by proceeding to register"
        />
        <TimelineCard
          orientation={1}
          dateText="November 18, 2023"
          middleNumber={3}
          doubleTextOne="Teams Registration ends"
          doubleTextTwo="Interested Participants are no longer Allowed to register.Interested Participants are no longer Allowed to register. Interested Participants are no longer Allowed to register."
        />
        <TimelineCard
          orientation={2}
          dateText="November 18, 2023"
          middleNumber={4}
          doubleTextOne="Announcement of the accepted teams and ideas"
          doubleTextTwo="All teams whom idea has been accepted into getlinked tech
          hackathon 1.0 2023 are formally announced"
        />
        <TimelineCard
          orientation={1}
          dateText="November 18, 2023"
          middleNumber={5}
          doubleTextOne="Getlinked Hackathon 1.0 Offically Begins"
          doubleTextTwo="Accepted teams can now proceed to build their
          ground breaking skill driven solutions"
        />
        <TimelineCard
          orientation={2}
          dateText="November 18, 2023"
          middleNumber={6}
          doubleTextOne="Demo Day"
          doubleTextTwo="Teams get the opportunity to pitch their projects to judges.
          The winner of the hackathon will also be announced on
          this day"
        />
      </div>
      <Image
        width={25}
        height={25}
        src={"/images/starPurple.svg"}
        alt="starPurple"
        className="absolute md:left-56 left-20 top-52 lg:w-7 md:w-5 w-3"
      />
      <Image
        width={20}
        height={20}
        src={"/images/star.svg"}
        alt="star"
        className="absolute md:right-44 right-24 md:top-1/2 top-[54%] lg:w-5 md:w-3 w-3"
      />
      <Image
        width={20}
        height={20}
        src={"/images/lightStar.svg"}
        alt="lightStar"
        className="absolute md:left-44 md:bottom-32 left-5 bottom-10 lg:w-5 md:w-3 w-3"
      />
    </div>
  );
};

export default Timeline;
