"use client"
import { FC, useState } from "react";

type Props = {
  question: string;
  answer?: string;
};
const FaqQA: FC<Props> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="py-3 border-b-2 border-b-[#D434FE] flex justify-between items-center lg:text-sm md:text-xs text-xs relative">
      <span className="font-light md:w-full w-[90%] text-start mr-5">{question}</span>
      <span className="textPurple text-lg font-bold cursor-pointer">+</span>
      {isOpen && (
        <div className="origin-top-right absolute left-0 mt-2 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
          {/* Dropdown content */}
          <div className="py-1">
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-100"
            >
              Option 1
            </a>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-100"
            >
              Option 2
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default FaqQA;
