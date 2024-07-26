import React from "react";
import { companyLogos } from "../constants";

const CompanyLogos = ({ className }) => {
  return (
    <div className={className}>
      <h5 className="tagline mb-6 text-center text-n-1/50">
        HELPING PEOPLE CREATE BEAUTIFUL CONTENT AT
      </h5>
      <ul className="flex">
        {companyLogos.map((logo, index) => (
          <li
            key={index}
            className="flex flex-1 items-center justify-center h-[8.5rem]"
          >
            <img
              src={logo}
              alt={logo}
              width={134}
              height={28}
              className="opacity-60 hover:opacity-100 transition-opacity"
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CompanyLogos;
