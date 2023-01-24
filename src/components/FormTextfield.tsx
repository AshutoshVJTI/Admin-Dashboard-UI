import React from "react";
import Typo from "./Typo";
import Search from "../assets/practice/search.svg";

interface FormTextfieldProps {
  label: string;
  isRequired?: boolean;
  isDropdown?: boolean;
  dropdownOptions?: [string];
  hasSearchIcon?: boolean;
}

const FormTextfield = (props: FormTextfieldProps) => {
  const { label, isRequired, isDropdown, dropdownOptions, hasSearchIcon } =
    props;
  return (
    <div>
      <Typo className="font-semibold mb-3 text-textfield-label">
        {label}
        {isRequired && <span className="text-red-600"> *</span>}
      </Typo>
      <div className="relative w-486 h-14 mb-6">
        {isDropdown ? (
          <select className="rounded-lg border border-textfield-input w-full h-full pl-10 pr-10">
            {dropdownOptions &&
              dropdownOptions.map((option, index) => (
                <option key={index} value={option}>
                  {option}
                </option>
              ))}
          </select>
        ) : (
          <input
            type="text"
            className="rounded-lg border border-textfield-input w-full h-full pl-10 pr-10"
          />
        )}
        {hasSearchIcon && (
          <img
            src={Search}
            alt="Search Icon"
            className="absolute right-3 top-4 cursor-pointer"
          />
        )}
      </div>
    </div>
  );
};

export default FormTextfield;
