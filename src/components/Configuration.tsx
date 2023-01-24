import React from "react";
import Typo from "./Typo";

interface ConfigurationProps {
  setCurrentStep: React.Dispatch<
    React.SetStateAction<"BI" | "SI" | "CO" | "CS">
  >;
  setCurrentPage: React.Dispatch<React.SetStateAction<"List" | "Create">>;
}

const Configuration = (props: ConfigurationProps) => {
  const { setCurrentStep, setCurrentPage } = props;
  return (
    <div className="pt-12 px-14">
      <Typo className="text-lg font-bold">Service Info</Typo>
      <div className="flex justify-end">
        <div className="flex gap-3">
          <button
            className="font-medium text-white bg-black w-36 h-9 rounded-lg"
            onClick={() => setCurrentStep("CO")}
          >
            Previous
          </button>
          <button
            className="font-medium text-white bg-accordion-active w-36 h-9 rounded-lg"
            onClick={() => {
              setCurrentPage("List");
              setCurrentStep("BI");
            }}
          >
            Create
          </button>
        </div>
      </div>
    </div>
  );
};

export default Configuration;
