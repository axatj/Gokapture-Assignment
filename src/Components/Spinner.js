"use client";

import React from "react";

const Spinner = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-16 h-16 border-4 border-t-4 border-blueviolet border-solid rounded-full animate-spinner"></div>
    </div>
  );
};

export default Spinner;