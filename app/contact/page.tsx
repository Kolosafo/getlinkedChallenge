"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Navbar from "../components/HomeSections/Navbar";
import GradientBtn from "../components/SubComponents/GradientBtn";
import PurpleLightBg from "../components/SubComponents/PurpleLightBg";
import { contactApi } from "../APIs/contactApi";
import Link from "next/link";

function isMobileWidth() {
  return window.innerWidth < 750;
}
const Contact = () => {
  // OTHER STATES
  const [success, setSuccess] = useState<boolean | string>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [formError, setFormError] = useState<boolean | string>(false);
  const [isMobile, setIsMobile] = useState<boolean>(isMobileWidth());
  // CONTACT FORM STATE DATA
  const [team_name, setTeamName] = useState<string>("");
  const [first_name, setFirstName] = useState<string>("");
  const [phone_number, setPhoneNumber] = useState<string>("0000000");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  const handleSumbit = async () => {
    setFormError(false);
    setSuccess(false);
    if (first_name || (team_name && email && message)) {
      setLoading(true);
      const response = await contactApi({
        first_name: first_name || team_name,
        email,
        message,
        phone_number,
      }).catch((e) => {
        setFormError("Something went wrong!");
        setLoading(false);
        return;
      });
      if (response)
        setSuccess("Message recieved! We will get back to you shortly.");
      setLoading(false);
      return;
    } else {
      setFormError("Please fill the form properly");
      return;
    }
  };
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
    <div className="max-h-screen overflow-x-clip md:block flex flex-col">
      <Navbar
        additionalStyle="border-0 md:flex hidden"
        contactStyle="purpleGradientText font-semibold"
      />
      <Link href="/">
        <div className="md:px-32 md:pl-32 pl-8 md:pt-14 py-6 md:pb-6 md:hidden flex z-10">
          <Image
            width={30}
            height={30}
            src={"/images/contactBtn.svg"}
            alt="contactBtn"
            className=" cursor-pointer"
          />
        </div>
      </Link>

      <div className="md:px-10 animate-slide flex lg:px-[10%] px-12 py-16 md:justify-between relative overflow-x-clip justify-center">
        <div className="md:flex hidden relative flex-col gap-5 basis-[30%] self-center">
          <span className="boldClash textPurple">Get in touch</span>
          <div className="flex flex-col">
            <span>Contact</span>
            <span>Information</span>
          </div>

          <div className="flex flex-col">
            <span>27, Alara Street</span>
            <span>Yaba 100012</span>
            <span>Lagos State</span>
          </div>
          <span>Call Us: 07067981819</span>
          <div className="flex flex-col">
            <span>we are open from Monday-Friday</span>
            <span>08:00am-05:00pm</span>
          </div>
          <div className="flex flex-col gap-2">
            <span className="textPurple font-semibold">Share on</span>
            <div className="flex gap-5">
              <Image
                width={22}
                height={22}
                src={"/images/instagram.svg"}
                alt="instagram"
                className="cursor-pointer"
              />
              <Image
                width={20}
                height={20}
                src={"/images/twitter.svg"}
                alt="twitter"
                className="cursor-pointer"
              />
              <Image
                width={12}
                height={12}
                src={"/images/facebook.svg"}
                alt="facebook"
                className="cursor-pointer"
              />
              <Image
                width={22}
                height={22}
                src={"/images/linkedin.svg"}
                alt="linkedin"
                className="cursor-pointer"
              />
            </div>
          </div>
          {/* ------------------STAR ICON------------------ */}
          <Image
            width={30}
            height={30}
            src={"/images/starPurple.svg"}
            alt="lightStar"
            className="absolute md:left-2 md:-top-24 sm:right-20 sm:bottom-48 right-5 bottom-[40%] lg:w-5 md:w-5 w-4"
          />
        </div>
        <div className="customLightText relative basis-[55%] md:flex hidden flex-col gap-8 md:text-sm text-xs rounded-md lg:p-16 md:p-8 p-5 shadow-lg bg-gray-500 bg-opacity-10 backdrop-blur-lg">
          <div className="boldClash text-2xl textPurple flex flex-col">
            <span>Questions or need assistance?</span>
            <span>Let us know about it!</span>
          </div>
          <input
            type="text"
            className="border-[1px] rounded-md pl-8 py-2 w-full bg-transparent text-gray-200 text-sm font-semibold"
            placeholder="First Name"
            onChange={(e) => setFirstName(e.target.value)}
            value={first_name}
          />
          <input
            type="email"
            className="border-[1px] rounded-md pl-8 py-2 w-full bg-transparent text-gray-200 text-sm font-semibold"
            placeholder="Mail"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          <textarea
            name=""
            id=""
            cols={30}
            rows={10}
            className="bg-transparent rounded-md border-[1px] text-gray-200 text-sm font-semibold pl-5 pt-2 h-32"
            placeholder="Message"
            onChange={(e) => setMessage(e.target.value)}
            value={message}
          ></textarea>
          {formError ? (
            <span className="text-rose-500 font-semibold">{formError}</span>
          ) : null}
          {success ? (
            <span className="text-green-500 font-semibold">{success}</span>
          ) : null}
          <div className="self-center">
            <GradientBtn
              text="Submit"
              submit={handleSumbit}
              loading={loading}
            />
          </div>
          <Image
            width={30}
            height={30}
            src={"/images/starPurple.svg"}
            alt="lightStar"
            className="absolute md:-left-3 md:bottom-24 sm:right-20 sm:bottom-48 right-5 bottom-[40%] lg:w-5 md:w-5 w-4"
          />
          <Image
            width={30}
            height={30}
            src={"/images/lightStar.svg"}
            alt="lightStar"
            className="absolute md:right-8 md:-top-16 sm:right-20 sm:bottom-48 right-5 bottom-[40%] lg:w-5 md:w-5 w-4"
          />
          <Image
            width={30}
            height={30}
            src={"/images/star.svg"}
            alt="lightStar"
            className="absolute md:-right-10 md:-bottom-0 sm:right-20 sm:bottom-48 right-5 bottom-[40%] lg:w-5 md:w-5 w-4"
          />
        </div>
        <PurpleLightBg
          style={
            "md:-left-20 left-0 md:top-20 top-[7rem] md:h-[20rem] h-[7rem]  md:w-[24rem] w-[9rem]"
          }
          mobileFilterAdjust={`${isMobile ? "blur(70px)" : "blur(150px)"}`}
        />
        <PurpleLightBg style={"-right-20 bottom-20 md:block hidden"} />

        {/* ------------------MOBILE SCREEN----------------- */}
        <div className="flex flex-col gap-7 md:hidden self-center relative">
          <div className="boldClash text-2xl relative textPurple flex flex-col">
            <span>Questions or need</span>
            <span>assistance?</span>
            <span>Let us know about it</span>
            <Image
              width={30}
              height={30}
              src={"/images/starPurple.svg"}
              alt="lightStar"
              className="absolute -top-10 right-20 w-3"
            />
            <Image
              width={30}
              height={30}
              src={"/images/lightStar.svg"}
              alt="lightStar"
              className="absolute right-0 bottom-8 w-4"
            />
          </div>

          <span>Email us below to any question related to our event</span>
          <input
            type="text"
            className="border-[1px] rounded-md pl-6 py-2 w-full bg-transparent text-gray-100 text-sm font-semibold"
            placeholder="Team's Name"
            onChange={(e) => setTeamName(e.target.value)}
            value={team_name}
          />
          <input
            type="text"
            className="border-[1px] rounded-md pl-6 py-2 w-full bg-transparent text-gray-100 text-sm font-semibold"
            placeholder="Topic"
          />
          <input
            type="email"
            className="border-[1px] rounded-md pl-6 py-2 w-full bg-transparent text-gray-100 text-sm font-semibold"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          <textarea
            name=""
            id=""
            cols={30}
            rows={10}
            className="bg-transparent rounded-md border-[1px] text-gray-200 text-sm font-semibold pl-5 pt-2 h-32"
            placeholder="Message"
            onChange={(e) => setMessage(e.target.value)}
            value={message}
          ></textarea>
          {formError ? (
            <span className="text-rose-500 font-semibold">{formError}</span>
          ) : null}
          {success ? (
            <span className="text-green-500 font-semibold">{success}</span>
          ) : null}
          <div className="self-center">
            <GradientBtn
              text="Submit"
              submit={handleSumbit}
              loading={loading}
            />
          </div>
          <div className="flex flex-col gap-2 self-center text-center mt-10">
            <span className="textPurple">Share on</span>
            <div className="flex gap-5">
              <Image
                width={22}
                height={22}
                src={"/images/instagram.svg"}
                alt="instagram"
                className="cursor-pointer"
              />
              <Image
                width={20}
                height={20}
                src={"/images/twitter.svg"}
                alt="twitter"
                className="cursor-pointer"
              />
              <Image
                width={12}
                height={12}
                src={"/images/facebook.svg"}
                alt="facebook"
                className="cursor-pointer"
              />
              <Image
                width={22}
                height={22}
                src={"/images/linkedin.svg"}
                alt="linkedin"
                className="cursor-pointer"
              />
            </div>
          </div>

          <Image
            width={30}
            height={30}
            src={"/images/starPurple.svg"}
            alt="starPurple"
            className="absolute w-3 left-[-2rem] bottom-[18%]"
          />

          <Image
            width={30}
            height={30}
            src={"/images/star.svg"}
            alt="lightStar"
            className="absolute bottom-[14rem] right-[-2rem] w-3"
          />
        </div>
      </div>
    </div>
  );
};

export default Contact;
