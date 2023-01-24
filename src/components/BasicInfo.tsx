import React from "react";
import FormTextfield from "./FormTextfield";
import Typo from "./Typo";
import Create from "../assets/practice/create.svg";

interface BasicInfoProps {
  setCurrentStep: React.Dispatch<
    React.SetStateAction<"BI" | "SI" | "CO" | "CS">
  >;
}

const BasicInfo = (props: BasicInfoProps) => {
  const { setCurrentStep } = props;
  return (
    <div className="py-12 px-14">
      <Typo className="text-lg font-bold mb-7">Practice Info</Typo>
      <div className="flex flex-col">
        <FormTextfield label="Practice Name" isRequired />
        <div className="flex justify-between">
          <FormTextfield label="Contact Person #1" isRequired />
          <FormTextfield label="Contact Number #1" isRequired />
          <FormTextfield label="Email #1" isRequired />
        </div>
        <div className="flex justify-between">
          <FormTextfield label="Contact Person #2" />
          <FormTextfield label="Contact Number #2" />
          <FormTextfield label="Email #2" />
        </div>
        <div className="my-14">
          <div className="flex justify-start gap-7">
            <div className="flex flex-col gap-6">
              <div className="flex flex-col">
                <Typo className="font-semibold">
                  Add Logo <span className="text-red-600"> *</span>
                </Typo>
                <Typo className="text-gray-500">Less than 5 MB</Typo>
              </div>
              <button className="bg-black flex items-center px-7 py-2 rounded-lg">
                <img src={Create} alt="Create" />
                <Typo fontFamily="Roboto" className="text-white ml-2">
                  Create
                </Typo>
              </button>
            </div>
            <input
              type="textarea"
              className="rounded-lg border border-textfield-input w-96 h-32 bg-white"
              disabled
            />
          </div>
        </div>
        <Typo className="text-lg font-bold mb-7">Address</Typo>
      </div>
      <div className="flex flex-col">
        <div className="flex justify-between">
          <FormTextfield label="Address Line 1" isRequired />
          <FormTextfield label="Address Line 2" />
          <FormTextfield label="City" isRequired hasSearchIcon />
        </div>
        <div className="flex justify-between">
          <FormTextfield label="Zipcode" isRequired />
          <FormTextfield label="State" isRequired isDropdown />
          <FormTextfield label="Country" isRequired isDropdown />
        </div>
      </div>
      <div className="flex justify-end">
        <button
          className="font-medium text-white bg-accordion-active w-36 h-9 rounded-lg mb-"
          onClick={() => setCurrentStep("SI")}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default BasicInfo;
