import React from "react";

const Footer = () => {
  const name = "Made with ❤ by Jake Farrell";
  const emailAddress = "jake_farrell@outlook.com";

  return (
    <footer className="bg-gray-800 text-white py-4">
      <div className="container mx-auto flex justify-center items-center">
        <p className="text-xl font-semibold">{name}</p>
      </div>
    </footer>
  );
};

export default Footer;
