import React from "react";
import PracticeList from "../components/PracticeList";
import Typo from "../components/Typo";
import Create from "../assets/practice/create.svg";
import Filter from "../assets/practice/filter.svg";
import Search from "../assets/practice/search.svg";
import { useState } from "react";
import Accordion from "../components/Accordion";
import CreatePractice from "../components/CreatePractice";

interface CustomerProps {
  isOpen: boolean;
}

const Customer = (props: CustomerProps) => {
  const { isOpen } = props;
  const [currentPage, setCurrentPage] = useState<"List" | "Create">("List");
  const [currentStep, setCurrentStep] = useState<"BI" | "SI" | "CO" | "CS">(
    "BI"
  );
  const handleClick = () => {
    setCurrentPage(currentPage === "List" ? "Create" : "List");
  };

  return (
    <div
      className={`${
        isOpen ? "ml-60" : "ml-20"
      } ease-in-out duration-200 mt-6 mb-7`}
    >
      <div className="ml-7 mr-9">
        <div className="flex justify-between mb-4 items-center">
          <Typo fontFamily="SF" className="text-2xl font-bold">
            {currentPage === "List" ? "Practice" : "Create Practice"}
          </Typo>
          {currentPage === "List" ? (
            <Typo
              fontFamily="SF"
              className="text-md text-lighter-grey font-semibold"
            >
              Practice
            </Typo>
          ) : (
            <div>
              <span className="text-md text-button-blue font-semibold">
                Practice
              </span>
              <span className="text-md text-lighter-grey font-semibold">
                {" "}
                / Create
              </span>
            </div>
          )}
        </div>
        {currentPage === "List" && (
          <div className="flex justify-between mb-3 items-center">
            <button
              className="bg-button-blue flex px-7 py-2 rounded-lg"
              onClick={handleClick}
            >
              <img src={Create} alt="Create" />
              <Typo fontFamily="Roboto" className="text-white ml-2">
                Create
              </Typo>
            </button>
            <div className="flex gap-2">
              <button>
                <img src={Filter} alt="filter" />
              </button>
              <button>
                <img src={Search} alt="search" />
              </button>
            </div>
          </div>
        )}
        {currentPage === "Create" && (
          <div className="flex mb-2">
            <Accordion label="Basic Info" isActive={true} />
            <Accordion
              label="Service Info"
              isActive={
                currentStep === "SI" ||
                currentStep === "CO" ||
                currentStep === "CS"
              }
              isNext={currentStep === "BI"}
            />
            <Accordion
              label="Custom Options"
              isActive={currentStep === "CO" || currentStep === "CS"}
              isNext={currentStep === "SI"}
            />
            <Accordion
              label="Configuration / Settings"
              isActive={currentStep === "CS"}
              isNext={currentStep === "CO"}
            />
          </div>
        )}
        <div className="border border-grey-border rounded-lg">
          {currentPage === "List" && <PracticeList />}
          {currentPage === "Create" && (
            <CreatePractice
              currentStep={currentStep}
              setCurrentStep={setCurrentStep}
              setCurrentPage={setCurrentPage}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Customer;
