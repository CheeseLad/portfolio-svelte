import React from "react";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ReturnHome = () => {
  return (
    <div className="flex justify-center mt-8">
      <a
        href="/"
        className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md transition duration-300"
      >
        <FontAwesomeIcon icon={faHouse} className="mr-2" />
        Return Home
      </a>
    </div>
  );
};

export default ReturnHome;
