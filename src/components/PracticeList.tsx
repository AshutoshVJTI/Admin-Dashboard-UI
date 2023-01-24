import React from "react";
import { tableData, tableHeading } from "../utils/tableData";
import Typo from "./Typo";
import Edit from "../assets/practice/edit.svg";
import Eye from "../assets/practice/eye.svg";
import Status from "../assets/practice/status.svg";

const PracticeList = () => {
  return (
    <div className="min-h-[calc(100vh-264px)]">
      <table className="w-full">
        <thead>
          <tr className="bg-grey-heading pl-8 pr-12">
            <th>
              <Typo
                fontFamily="OS"
                className="font-semibold text-lighter-black text-left py-2 pl-8"
              >
                #
              </Typo>
            </th>
            {tableHeading.map((heading) => {
              return (
                <th key={heading}>
                  <Typo
                    fontFamily="OS"
                    className="font-semibold text-lighter-black text-left py-2"
                  >
                    {heading}
                  </Typo>
                </th>
              );
            })}
            <th>
              <Typo
                fontFamily="OS"
                className="font-semibold text-lighter-black text-left py-2 pr-12"
              >
                Action
              </Typo>
            </th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((data) => {
            return (
              <tr
                key={data.id}
                className={`${data.id % 2 === 0 && "bg-grey-data"}`}
              >
                <td>
                  <Typo
                    fontFamily="OS"
                    className="text-lighter-black text-sm py-3 pl-8"
                  >
                    {data.id}
                  </Typo>
                </td>
                <td>
                  <Typo
                    fontFamily="OS"
                    className="text-lighter-black text-sm py-3"
                  >
                    {data.practice}
                  </Typo>
                </td>
                <td>
                  <Typo
                    fontFamily="OS"
                    className="text-lighter-black text-sm py-3"
                  >
                    {data.contactPerson}
                  </Typo>
                </td>
                <td>
                  <Typo
                    fontFamily="OS"
                    className="text-lighter-black text-sm py-3"
                  >
                    {data.contactNumber}
                  </Typo>
                </td>
                <td>
                  <Typo
                    fontFamily="OS"
                    className="text-lighter-black text-sm py-3"
                  >
                    {data.email}
                  </Typo>
                </td>
                <td>
                  <Typo
                    fontFamily="OS"
                    className="text-lighter-black text-sm py-3"
                  >
                    <img src={Status} alt="Status" className="mx-auto" />
                  </Typo>
                </td>
                <td>
                  <Typo
                    fontFamily="OS"
                    className="text-lighter-black text-sm py-3"
                  >
                    {data.createdDate}
                  </Typo>
                </td>
                <td>
                  <Typo
                    fontFamily="OS"
                    className="text-lighter-black text-sm py-3"
                  >
                    {data.modifiedDate}
                  </Typo>
                </td>
                <td>
                  <Typo
                    fontFamily="OS"
                    className="text-lighter-black text-sm py-3"
                  >
                    {data.createdBy}
                  </Typo>
                </td>
                <td>
                  <Typo
                    fontFamily="OS"
                    className="text-lighter-black text-sm py-3"
                  >
                    {data.modifiedBy}
                  </Typo>
                </td>
                <td>
                  <Typo
                    fontFamily="OS"
                    className="text-lighter-black text-sm py-3 pr-12"
                  >
                    <div className="flex gap-4">
                      <button>
                        <img src={Edit} alt="Edit" />
                      </button>
                      <button>
                        <img src={Eye} alt="Visibile" />
                      </button>
                    </div>
                  </Typo>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default PracticeList;
