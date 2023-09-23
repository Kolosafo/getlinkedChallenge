import { FC } from "react";

type Props = {
  style: string;
  adjustFilter?: string;
  mdAdjustFilter?: string;
  mobileFilterAdjust?: string | undefined;
};
const PurpleLightBg: FC<Props> = ({
  style,
  adjustFilter,
  mdAdjustFilter,
  mobileFilterAdjust,
}) => {
  return (
    <div
      className={`absolute purpleLightBg  ${style}`}
      style={{
        filter: mobileFilterAdjust
          ? mobileFilterAdjust
          : adjustFilter && `${adjustFilter}`,
      }}
    ></div>
  );
};

export default PurpleLightBg;
