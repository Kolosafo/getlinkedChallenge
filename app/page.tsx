"use client";
import { useState, useEffect, SyntheticEvent, useRef } from "react";
import Navbar from "./components/HomeSections/Navbar";
import Hero from "./components/HomeSections/Hero";
import Intro from "./components/HomeSections/Intro";
import Rules from "./components/HomeSections/Rules";
import Judge from "./components/HomeSections/Judge";
import Faq from "./components/HomeSections/Faq";
import PurpleLightBg from "./components/SubComponents/PurpleLightBg";
import Timeline from "./components/HomeSections/Timeline";
import Prices from "./components/HomeSections/Prices";
import Sponsors from "./components/HomeSections/Sponsors";
import Terms from "./components/HomeSections/Terms";
import Footer from "./components/HomeSections/Footer";
import MobileMenu from "./components/SubComponents/MobileMenu";

function isMobileWidth() {
  return window.innerWidth < 750;
}

export default function Home() {
  // flex min-h-screen flex-col items-center justify-between p-24

  const [isMobile, setIsMobile] = useState<boolean>(isMobileWidth());
  const [openMobileNav, setOpenMobileNav] = useState<boolean>(false);

  // USE EFFECT
  useEffect(() => {
    function handleWindowResize() {
      setIsMobile(isMobileWidth());
    }
    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);
  return (
    <div className="relative overflow-x-clip">
      <MobileMenu isOpen={openMobileNav} setCloseNav={setOpenMobileNav} />

      <PurpleLightBg
        style="md:top-[8rem] top-[14rem] md:left-[15%] md:h-[10rem] h-[7rem] w-[15rem] md:w-[18rem]"
        mobileFilterAdjust={`${isMobile ? "blur(75px)" : "blur(100px)"}`}
      />

      <Navbar setOpenMobileNav={setOpenMobileNav} />
      <main className="pt-5 backdrop-blur-xl z-10 relative">
        <Hero />
        <div className="relative overflow-x-clip">
          <Intro />
          <PurpleLightBg
            style="lg:top-[53%] lg:left-64 md:left-44 md:bottom-48 md:h-60 md:w-60 w-[10rem]"
            adjustFilter="blur(160px)"
            mobileFilterAdjust={`${isMobile ? "blur(90px)" : undefined}`}
          />
          <PurpleLightBg
            style="md:bottom-0 bottom-[10rem] md:-right-52 right-[-11rem] md:h-64 h-[10rem] w-72"
            adjustFilter="blur(150px)"
            mobileFilterAdjust={`${isMobile ? "blur(90px)" : undefined}`}
          />
          <Rules />
        </div>
        <div className="relative">
          <Judge isMobile={isMobile} />
          <PurpleLightBg
            style="md:right-0 right-[-10rem] md:top-[40%] top-[38%] lg:h-[16rem] lg:w-[24rem] md:h-60 h-[6rem] md:w-60 w-[18rem]"
            mobileFilterAdjust={`${isMobile ? "blur(90px)" : "blur(150px)"}`}
          />
          <Faq />
        </div>
        <Timeline />
        <Prices isMobile={isMobile} />
        <div className="relative">
          <Sponsors isMobile={isMobile} />
          <PurpleLightBg
            style="md:right-0 right-[-3rem] md:top-[30%] top-[20%] md:h-56 h-[8rem] md:w-60 w-[10rem]"
            mobileFilterAdjust={`${isMobile ? "blur(60px)" : "blur(110px)"}`}
          />
          <Terms isMobile={isMobile} />
        </div>
      </main>
      <Footer />
    </div>
  );
}
