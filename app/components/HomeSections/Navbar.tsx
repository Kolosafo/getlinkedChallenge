"use client";
import { useRouter } from "next/navigation";
import { Dispatch, FC, SetStateAction, SyntheticEvent, useState } from "react";
import GradientBtn from "../SubComponents/GradientBtn";
import HamburgerMenu from "../SubComponents/HamburgerMenu";
import Link from "next/link";

type Props = {
  additionalStyle?: string;
  contactStyle?: string;
  regBtn?: boolean;
  setOpenMobileNav?: Dispatch<SetStateAction<boolean>>;
  handleScrollToOverview?: (e: SyntheticEvent) => void;
  handleScrollToTimeline?: (e: SyntheticEvent) => void;
  handleScrollToFaq?: (e: SyntheticEvent) => void;
};
const Navbar: FC<Props> = ({
  additionalStyle,
  contactStyle,
  regBtn,
  setOpenMobileNav,
}) => {
  const router = useRouter();

  return (
    <div
      className={`lg:px-24 px-8 lg:pl-32 pl-8 md:pt-14 py-6 md:pb-6 lightBorderBottom flex justify-between backdrop-blur-xl relative z-10 ${additionalStyle}`}
    >
      <Link href="/">
        <div className="font-[ClashDisplay] font-bold md:text-4xl text-xl">
          get<span className="textPurple">linked</span>
        </div>
      </Link>

      <div className="md:flex hidden justify-between border-1 lg:gap-24 gap-4">
        <ul className="flex items-center lg:gap-10 gap-7">
          <Link href="/contact">
            <li className={`${contactStyle}`}>Contact</li>
          </Link>
          <li>Timeline</li>
          <li>Overview</li>
          <li>FAQs</li>
        </ul>
        <div onClick={() => router.push("/register")}>
          <GradientBtn
            text="Register"
            customStyle={regBtn ? "regNavButton" : undefined}
          />
        </div>
      </div>
      <HamburgerMenu setOpenMenu={setOpenMobileNav} />
    </div>
  );
};

export default Navbar;
