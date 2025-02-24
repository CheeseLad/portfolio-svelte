import React from "react";
import ReturnHome from "../layout/ReturnHome.jsx";

const Error = () => {
  return (
    <div class="container mx-auto py-12">
      <h2 class="text-3xl font-bold text-center mb-8">
        404 - Page Not Found
      </h2>
      <p class="text-center">
        Please check that the page you entered is correct
      </p>
      <p class="text-center">Here's a cat GIF while you're here:</p>
      <div class="relative m-2 overflow-hidden rounded-xl transition-transform duration-300 transform hover:scale-105">
        <img
          src="cat.gif"
          alt="Cat GIF"
          class="mx-auto my-4 object-cover rounded-xl overflow-hidden"
        />
      </div>
      <ReturnHome />
    </div>
  );
};

export default Error;
