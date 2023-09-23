"use client";
import { useRouter } from "next/navigation";
import { Dispatch, FC, SetStateAction } from "react";
import GradientBtn from "./GradientBtn";
import Image from "next/image";
import Link from "next/link";

type Props = {
  setCloseNav: Dispatch<SetStateAction<boolean>>;
  isOpen: boolean;
};
const MobileMenu: FC<Props> = ({ setCloseNav, isOpen }) => {
  const router = useRouter();

  return (
    <div
      className={`h-[70vh] w-screen fixed bg-[#140d27] py-40 pl-8 z-50 text-white ${
        isOpen ? " slide-in-left-enter-active" : "slide-in-left-leave-to"
      }`}
    >
      <div className="md:hidden flex flex-col border-1 gap-8">
        <ul className="flex flex-col gap-10">
          <li>Timeline</li>
          <li>Overview</li>
          <li>FAQs</li>
          <Link href="/contact">
            <li>Contact</li>
          </Link>
        </ul>
        <div onClick={() => router.push("/register")} className="self-start">
          <GradientBtn text="Register" customStyle="self-start" />
        </div>
      </div>
      <div
        className="absolute sm:top-14 top-6 sm:right-16 right-8 cursor-pointer"
        onClick={() => setCloseNav(false)}
      >
        <Image
          width={20}
          height={20}
          src={"/images/navCloseOg.png"}
          alt="navClose"
          //   className="absolute top-10 right-5"
        />
      </div>
    </div>
  );
};

export default MobileMenu;
