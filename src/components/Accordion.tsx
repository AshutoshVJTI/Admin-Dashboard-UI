import React from "react";
import Typo from "./Typo";

interface AccordionProps {
  label: string;
  isActive?: boolean;
  isNext?: boolean;
}

const Accordion = (props: AccordionProps) => {
  const { label, isActive, isNext } = props;
  const getColor = () => {
    if (isActive) return "bg-accordion-active text-white";
    else if (isNext) return "bg-accordion-next text-black";
    else return "bg-accordion-default text-black";
  };
  return (
    <div className="flex">
      <Typo
        fontFamily="SF"
        className={`w-60 h-10 rounded-l-lg font-semibold ${getColor()} mr-2 flex justify-center items-center`}
      >
        {label}
      </Typo>
    </div>
  );
};

export default Accordion;
