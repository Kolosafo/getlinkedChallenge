import { FC } from "react";
import { Oval } from "react-loader-spinner";

type Props = {
  text: string;
  customStyle?: string;
  submit?: () => void;
  loading?: boolean;
};
const GradientBtn: FC<Props> = ({ text, customStyle, submit, loading }) => {
  return (
    <button
      className={`${
        customStyle === "regNavButton"
          ? "regNavButton btnHoverEffect lg:px-10 md:px-8 px-8 py-2 lg:text-lg rounded-[10px] font-[montserrat] md:text-sm text-xs font-normal"
          : `lg:px-10 btnHoverEffect md:px-8 px-8 py-2 purpleGradientBg rounded-[3px] font-[montserrat] lg:text-lg md:text-sm text-xs font-normal ${
              customStyle ? customStyle : ""
            }`
      } flex justify-center gap-4`}
      // style={{}}
      onClick={() => (submit ? submit() : null)}
      disabled={loading ? true : false}
    >
      <span> {text} </span>
      {loading ? (
        <span>
          {" "}
          <Oval
            height={20}
            width={20}
            color="#ffff"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
            ariaLabel="oval-loading"
            secondaryColor="black"
            strokeWidth={10}
            strokeWidthSecondary={10}
          />
        </span>
      ) : null}
    </button>
  );
};

export default GradientBtn;
