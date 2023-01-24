import React from "react";
import Typo from "./Typo";

interface CustomOptionsProps {
  setCurrentStep: React.Dispatch<
    React.SetStateAction<"BI" | "SI" | "CO" | "CS">
  >;
}

const CustomOptions = (props: CustomOptionsProps) => {
  const { setCurrentStep } = props;
  return (
    <div className="pt-12 px-14">
      <Typo className="text-lg font-bold">Custom Options</Typo>
      <div className="flex justify-end">
        <div className="flex gap-3">
          <button
            className="font-medium text-white bg-black w-36 h-9 rounded-lg"
            onClick={() => setCurrentStep("SI")}
          >
            Previous
          </button>
          <button
            className="font-medium text-white bg-accordion-active w-36 h-9 rounded-lg"
            onClick={() => setCurrentStep("CS")}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default CustomOptions;
