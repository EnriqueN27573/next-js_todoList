// Buffer Line
const absFull = "w-full h-full";

const absCenter = "flex justify-center items-center";
const xCenter = "flex justify-center";
const yCenter = "flex items-center";
const xEnd = "flex justify-end";
const yEnd = "flex items-end";
const flex = { absCenter, xCenter, yCenter, xEnd, yEnd };

const fontRegular = "font-semibold";
const fontBold = "font-bold";
const fontExBold = "font-extrabold";
const weight = { regular: fontRegular, bold: fontBold, exBold: fontExBold };

const regularText =
  "max-md:text-md md:max-lg:text-xl lg:max-2xl:text-3xl 2xl:text-5xl";
const mediumText =
  "max-md:text-lg md:max-lg:text-2xl lg:max-2xl:text-4xl 2xl:text-6xl";
const largeText =
  "max-md:text-xl md:max-lg:text-3xl lg:max-2xl:text-5xl 2xl:text-7xl";
const textSize = { default: regularText, md: mediumText, lg: largeText };

const underline = "underline";

const inlineWithGap = "flex flex-row gap-2";

const globalStyles = {
  absFull,
  flex,
  weight,
  textSize,
  underline,
  inlineWithGap,
};

export default globalStyles;

export function combineClasses(tailwindClassList: string[]) {
  return Array.from(new Set(tailwindClassList.join(" ").split(" "))).join(" ");
}
