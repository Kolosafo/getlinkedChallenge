"use client";
import { useState, useEffect } from "react";
import GradientBtn from "../components/SubComponents/GradientBtn";
import Image from "next/image";
import Navbar from "../components/HomeSections/Navbar";
import PurpleLightBg from "../components/SubComponents/PurpleLightBg";
import Confirmation from "../components/SubComponents/Confirmation";
import { registerUser } from "../APIs/register";

function isMobileWidth() {
  if (typeof window !== "undefined") {
    return window.innerWidth < 750;
  }else{
    return false
  }
}
const Register = () => {
  // OTHER STATES
  const [success, setSuccess] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [formError, setFormError] = useState<boolean | string>(false);
  const [isMobile, setIsMobile] = useState<boolean>(isMobileWidth());

  // CONTACT FORM STATE DATA
  const [team_name, setTeam_name] = useState<string>("");
  const [phone_number, setPhoneNumber] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [project_topic, setProjectTopic] = useState<string>("");
  const [category, setCategory] = useState<number>(0);
  const [group_size, setGroupSize] = useState<number>(0);
  const [agreement, setAgreement] = useState<boolean>(false);

  const onSetSuccess = () => {
    setSuccess((state) => !state);
  };
  const handleSumbit = async () => {
    setFormError(false);
    if (team_name && phone_number && email && project_topic && agreement) {
      setLoading(true);
      const response = await registerUser({
        team_name,
        phone_number,
        email,
        project_topic,
        group_size,
        category,
        privacy_poclicy_accepted: agreement,
      }).catch((e) => {
        setFormError("THERE WAS AN ERROR REGISTERING YOUR ACCOUNT");
        setLoading(false);
        return;
      });
      console.log("RESPONSE", response);
      onSetSuccess();
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
    <div
      className={`max-h-screen overflow-x-clip md:block flex flex-col relative ${
        success ? "overflow-hidden" : "overflow-auto"
      }`}
    >
      {success ? <Confirmation setSuccess={onSetSuccess} /> : null}
      <Navbar
        additionalStyle="border-0 md:flex hidden"
        contactStyle="purpleGradientText font-semibold"
        regBtn
      />
      <div className="md:px-32 md:pl-32 pl-12 md:pt-14 py-8 md:pb-6 md:hidden flex z-10 font-[ClashDisplay] font-bold md:text-4xl text-2xl textPurple">
        Register
      </div>

      <div className="md:px-10 animate-slide flex md:flex-row flex-col lg:px-[5%] px-12 py-16 md:justify-between relative overflow-x-clip justify-center">
        <div className="basis-[45%] h-full w-full relative">
          <Image
            width={700}
            height={700}
            src={"/images/regHero.svg"}
            alt="regHero"
            className="w-full object-fill"
          />
          <PurpleLightBg
            style={
              "md:-left-40 left-[-4rem] md:top-5 top-[11.25rem] md:h-[20rem] md:w-[24rem] h-[7rem] w-[14rem]"
            }
            mobileFilterAdjust={`${isMobile ? "blur(70px)" : "blur(150px)"}`}
          />
          <Image
            width={30}
            height={30}
            src={"/images/starPurple.svg"}
            alt="starPurple"
            className="absolute md:left-16 left-[100%] md:top-10 top-40 lg:w-5 md:w-5 w-4"
          />
          <Image
            width={30}
            height={30}
            src={"/images/lightStar.svg"}
            alt="starPurple"
            className="absolute md:left-28 left-[-2rem] md:bottom-0 bottom-[-8rem] z-40 lg:w-5 md:w-5 w-4"
          />
        </div>
        <div className="basis-[55%] customLightText relative  flex flex-col md:gap-8 gap-0 md:text-sm text-xs rounded-md lg:p-16 md:p-8 p-0 shadow-lg bg-gray-500 md:bg-opacity-10 bg-opacity-0 backdrop-blur-lg">
          <span className="boldClash textPurple md:block hidden">Register</span>
          <div className="flex md:self-start self-center items-baseline md:-mb-5 mb-2 text-white font-normal">
            <span>Be part of this movement!</span>
            <div className="relative border-b-2 border-dashed border-[#D434FE] w-24 ml-1">
              <Image
                width={25}
                height={25}
                src={"/images/femaleEmoji.svg"}
                alt="femaleEmoji"
                className="absolute -top-6 left-5"
              />
              <Image
                width={30}
                height={30}
                src={"/images/maleEmoji.svg"}
                alt="maleEmoji"
                className="absolute -top-7 right-8"
              />
            </div>
          </div>
          <span className="md:text-2xl text-xl font-normal md:mb-0 mb-7 md:self-start self-center">
            CREATE YOUR ACCOUNT
          </span>
          <div className="flex md:flex-row flex-col w-full justify-between md:gap-10 gap-5 md:mt-0 mt-4 md:mb-0 mb-5">
            <div className="flex flex-col gap-2 w-full">
              <label htmlFor="team_name" className="font-normal">
                Team&apos;s Name
              </label>
              <input
                name="team_name"
                type="text"
                className="border-[1px] rounded-md px-4 py-3 w-full bg-transparent text-gray-200 lg:text-sm md:text-xs text-xs font-semibold"
                placeholder="Enter the name of your group"
                onChange={(e) => setTeam_name(e.target.value)}
                value={team_name}
              />
            </div>
            <div className="flex flex-col gap-2 w-full">
              <label htmlFor="phone" className="font-normal">
                Phone
              </label>
              <input
                name="phone"
                type="text"
                className="border-[1px] rounded-md px-4 py-3 w-full bg-transparent text-gray-200 lg:text-sm md:text-xs text-xs font-semibold"
                placeholder="Enter your phone number"
                onChange={(e) => setPhoneNumber(e.target.value)}
                value={phone_number}
              />
            </div>
          </div>
          <div className="flex md:flex-row flex-col w-full justify-between md:gap-10 gap-5 md:mb-0 mb-5">
            <div className="flex flex-col gap-2 w-full">
              <label htmlFor="email" className="font-normal">
                Email
              </label>
              <input
                name="email"
                type="email"
                className="border-[1px] rounded-md px-4 py-3 w-full bg-transparent text-gray-200 lg:text-sm md:text-xs text-xs font-semibold"
                placeholder="Enter your email address"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
            </div>
            <div className="flex flex-col gap-2 w-full">
              <label htmlFor="project" className="font-normal">
                Project Topic
              </label>
              <input
                name="project"
                type="text"
                className="border-[1px] rounded-md px-4 pr-3 py-3 w-full bg-transparent text-gray-200 lg:text-sm md:text-xs text-xs font-semibold"
                placeholder="What is your group project topic"
                onChange={(e) => setProjectTopic(e.target.value)}
                value={project_topic}
              />
            </div>
          </div>
          <div className="flex flex-roww-full justify-between md:gap-10 gap-5 md:mb-0 mb-5">
            <div className="flex flex-col gap-2 w-full">
              <label htmlFor="categorySelect" className="font-normal">
                Category
              </label>
              <select
                name="categorySelect"
                id="categorySelect"
                className="border-[1px] rounded-md px-4 py-3 w-full bg-transparent text-gray-200 lg:text-sm md:text-xs text-xs font-semibold"
                onChange={(e) => setCategory(parseInt(e.target.value))}
              >
                <option value={0} className="bg-gray-500">
                  Select your category
                </option>
                <option value={1} className="bg-gray-500">
                  Fintech
                </option>
                <option value={2} className="bg-gray-500">
                  Education
                </option>
                <option value={3} className="bg-gray-500">
                  Design
                </option>
              </select>
              {/* <input
              name="team_name"
              type="text"
              className="border-[1px] rounded-md px-4 py-3 w-full bg-transparent text-gray-200 lg:text-sm md:text-xs text-xs font-semibold"
              placeholder="Enter the name of your group"
            /> */}
            </div>
            <div className="flex flex-col gap-2 w-full">
              <label htmlFor="group_size" className="font-normal">
                Group Size
              </label>
              <select
                name="group_size"
                id="group_size"
                className="border-[1px] rounded-md px-4 py-3 w-full bg-transparent text-gray-200 lg:text-sm md:text-xs text-xs font-semibold"
                onChange={(e) => setGroupSize(parseInt(e.target.value))}
              >
                <option value={0} className="bg-gray-500">
                  Select
                </option>
                <option value={1} className="bg-gray-500">
                  1
                </option>
                <option value={2} className="bg-gray-500">
                  2
                </option>
                <option value={3} className="bg-gray-500">
                  3
                </option>
              </select>
            </div>
          </div>
          <span className="text-[#FF26B9] italic font-normal md:-mb-5 mb-3">
            Please review your registration details before submitting
          </span>
          <div className="flex items-center gap-2 md:-mb-3 mb-5">
            {agreement ? (
              <Image
                width={15}
                height={15}
                src={"/images/checkIcon.svg"}
                alt="sponsors"
                className="cursor-pointer"
                onClick={() => setAgreement(false)}
              />
            ) : (
              <div
                className="w-4 h-4 border-2 rounded-sm cursor-pointer"
                onClick={() => setAgreement(true)}
              ></div>
            )}

            <span className="font-normal">
              I agreed with the event terms and conditions and privacy policy
            </span>
          </div>
          {formError ? (
            <span className="text-rose-500 font-semibold">{formError}</span>
          ) : null}
          <GradientBtn
            text="Register Now"
            submit={handleSumbit}
            loading={loading}
          />
          <PurpleLightBg style={"-right-40 bottom-5 md:block hidden"} />

          <Image
            width={30}
            height={30}
            src={"/images/lightStar.svg"}
            alt="lightStar"
            className="absolute top-5 right-[30%] lg:w-7 md:w-5 w-4"
          />
          <Image
            width={30}
            height={30}
            src={"/images/starPurple.svg"}
            alt="starPurple"
            className="absolute md:-left-24 left-[17rem] bottom-[30%] lg:w-5 md:w-5 w-4"
          />
          <Image
            width={30}
            height={30}
            src={"/images/star.svg"}
            alt="star"
            className="absolute -bottom-4 right-24 lg:w-4 md:w-4 w-4 md:block hidden"
          />
        </div>
      </div>
    </div>
  );
};

export default Register;
