import React from "react";
import FaqQA from "../SubComponents/FaqQA";
import Image from "next/image";

const Faq = () => {
  return (
    <div className="flex md:px-10 px-10 gap-10 lg:px-40 py-32 lightBorderBottom relative md:flex-row md:items-start items-center flex-col">
      <div className="basis-[40%] flex flex-col md:text-start text-center md:items-start items-center">
        <div className="boldClash mb-5 flex flex-col">
          <span>Frequently Ask</span>
          <span className="textPurple">Question</span>
        </div>
        <span className="font-light mb-10 lg:text-sm md:text-xs">
          We got answers to the questions that you might want to ask about
          <span className="font-bold"> getlinked Hackathon 1.0</span>
        </span>
        <div className="flex flex-col gap-5 w-full">
          <FaqQA question="Can I work on a project I started before the hackathon?" />
          <FaqQA question="What happens if I need help during the hackathon?" />
          <FaqQA question="What happens if I don't have an idea for a project?" />
          <FaqQA question="Can I join a team or do I have to come with one?" />
          <FaqQA question="What happens after the hackathon ends" />
          <FaqQA question="Can I work on a project I started before the hackathon?" />
        </div>
      </div>
      <div className="basis-[60%] flex self-end justify-end relative">
        <Image
          width={600}
          height={600}
          src={"/images/faqIcon.png"}
          alt="rulesIcon"
          // className="border-2"
        />
        <Image
          width={50}
          height={50}
          src={"/images/lightQuestionMark.svg"}
          alt="rulesIcon"
          className="absolute md:top-0 md:left-28 sm:left-32 left-16 top-14 sm:top-28 lg:w-12 md:w-8 s:w-7 w-5"
        />{" "}
        <Image
          width={50}
          height={50}
          src={"/images/lightQuestionMark.svg"}
          alt="rulesIcon"
          className="absolute md:top-0 sm:top-24 md:right-20 sm:right-36 right-16 top-10 lg:w-12 md:w-8 w-5"
        />{" "}
        <Image
          width={50}
          height={50}
          src={"/images/heavyQuestionMark.svg"}
          alt="rulesIcon"
          className="absolute left-[45%] md:-top-24 sm:top-5 top-0 lg:w-12 md:w-8 w-6"
        />
      </div>
      <Image
        width={25}
        height={25}
        src={"/images/starPurple.svg"}
        alt="starPurple"
        className="absolute left-32 top-16"
      />
    </div>
  );
};

export default Faq;
