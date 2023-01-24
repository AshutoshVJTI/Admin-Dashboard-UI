import React from "react";
import BasicInfo from "./BasicInfo";
import CustomOptions from "./CustomOptions";
import ServiceInfo from "./ServiceInfo";
import Configuration from "./Configuration";

interface CreatePracticeProps {
  currentStep: "BI" | "SI" | "CO" | "CS";
  setCurrentStep: React.Dispatch<
    React.SetStateAction<"BI" | "SI" | "CO" | "CS">
  >;
  setCurrentPage: React.Dispatch<React.SetStateAction<"List" | "Create">>;
}

const CreatePractice = (props: CreatePracticeProps) => {
  const { currentStep, setCurrentStep, setCurrentPage } = props;
  return (
    <div className="min-h-[calc(100vh-264px)]">
      {currentStep === "BI" && <BasicInfo setCurrentStep={setCurrentStep} />}
      {currentStep === "SI" && <ServiceInfo setCurrentStep={setCurrentStep} />}
      {currentStep === "CO" && (
        <CustomOptions setCurrentStep={setCurrentStep} />
      )}
      {currentStep === "CS" && (
        <Configuration
          setCurrentStep={setCurrentStep}
          setCurrentPage={setCurrentPage}
        />
      )}
    </div>
  );
};

export default CreatePractice;
